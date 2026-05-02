"use strict";

const crypto = require("crypto");

const UID_POLL = "api::poll.poll";
const UID_VOTE = "api::poll-vote.poll-vote";
const SHA256_HEX_LENGTH = 64;

function normalizeNin(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function isSha256Hex(value) {
  return /^[a-f0-9]{64}$/i.test(value);
}

function hashNin(value) {
  const normalizedNin = normalizeNin(value);

  if (!normalizedNin) {
    return "";
  }

  if (normalizedNin.length === SHA256_HEX_LENGTH && isSha256Hex(normalizedNin)) {
    return normalizedNin.toLowerCase();
  }

  return crypto.createHash("sha256").update(normalizedNin).digest("hex");
}

module.exports = {
  async vote(ctx) {
    try {
      const pollId = ctx.params.id;
      const { optionId } = ctx.request.body;
      const hashedNin = hashNin(ctx.request.body?.nin);

      if (!hashedNin || !optionId) {
        return ctx.badRequest("NIN and optionId are required");
      }

      // Ensure no later code path reads or persists the raw NIN.
      ctx.request.body.nin = hashedNin;

      const poll = await strapi.db.query(UID_POLL).findOne({
        where: { documentId: pollId },
        populate: { options: true },
      });

      if (!poll) {
        return ctx.notFound("Poll not found");
      }

      const optionsArray = poll.options || [];
      const selectedOptionId = Number(optionId);
      const optionExists = optionsArray.some(
        (opt) => Number(opt.id) === selectedOptionId,
      );

      if (!optionExists) {
        return ctx.badRequest("Invalid optionId for this poll.");
      }

      const existingVote = await strapi.db.query(UID_VOTE).findOne({
        where: { poll: poll.id, nin: hashedNin },
      });

      if (existingVote) {
        return ctx.badRequest("You have already voted on this poll");
      }

      await strapi.db.query(UID_VOTE).create({
        data: {
          poll: poll.id,
          optionId: selectedOptionId,
          nin: hashedNin,
        },
      });

      const votes = await strapi.db.query(UID_VOTE).findMany({
        where: { poll: poll.id },
      });

      const totalVotes = votes.length;
      const counts = {};

      optionsArray.forEach((opt) => {
        counts[opt.id] = 0;
      });

      votes.forEach((vote) => {
        if (counts[vote.optionId] !== undefined) {
          counts[vote.optionId] += 1;
        }
      });

      const updatedOptions = optionsArray.map((opt) => ({
        id: opt.id,
        percentage:
          totalVotes === 0
            ? 0
            : Math.round((counts[opt.id] / totalVotes) * 100),
      }));

      await strapi.db.query(UID_POLL).update({
        where: { id: poll.id },
        data: {
          totalVotes,
          options: updatedOptions,
        },
      });

      const updatedPoll = await strapi.db.query(UID_POLL).findOne({
        where: { id: poll.id },
        populate: { options: true },
      });

      return ctx.send({ data: updatedPoll });
    } catch (err) {
      strapi.log.error("Vote controller error:", err);
      return ctx.internalServerError(err.message);
    }
  },
};
