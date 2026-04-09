"use strict";

const crypto = require("crypto");

const UID_POLL = "api::poll.poll";
const UID_VOTE = "api::poll-vote.poll-vote";

module.exports = {
  async vote(ctx) {
    const pollId = Number(ctx.params.id);
    const { nin, optionId } = ctx.request.body;

    if (!nin || !optionId) {
      return ctx.badRequest("NIN and optionId are required");
    }

    // 1️⃣ Hash the NIN
    const hashedNin = crypto
      .createHash("sha256")
      .update(nin.trim())
      .digest("hex");

    // 2️⃣ Fetch poll with populated options
    const poll = await strapi.db.query(UID_POLL).findOne({
      where: { id: pollId },
      populate: { options: true },
    });

    if (!poll) return ctx.notFound("Poll not found");

    const optionsArray = poll.options?.data || [];

    // 3️⃣ Validate option exists
    const optionExists = optionsArray.some(
      (opt) => Number(opt.id) === Number(optionId),
    );
    if (!optionExists) return ctx.badRequest("Invalid option selected");

    // 4️⃣ Check if this NIN has already voted on this poll
    const existingVote = await strapi.db.query(UID_VOTE).findOne({
      where: {
        poll: pollId,
        nin: hashedNin,
      },
    });

    if (existingVote)
      return ctx.badRequest("You have already voted on this poll");

    // 5️⃣ Create vote
    await strapi.db.query(UID_VOTE).create({
      data: {
        poll: pollId,
        optionId: Number(optionId),
        nin: hashedNin,
      },
    });

    // 6️⃣ Get all votes for this poll
    const votes = await strapi.db.query(UID_VOTE).findMany({
      where: { poll: pollId },
    });

    const totalVotes = votes.length;

    // 7️⃣ Count votes per option
    const counts = {};
    optionsArray.forEach((opt) => {
      counts[opt.id] = 0;
    });
    votes.forEach((vote) => {
      if (counts[vote.optionId] !== undefined) counts[vote.optionId] += 1;
    });

    // 8️⃣ Calculate percentages
    const updatedOptions = optionsArray.map((opt) => ({
      ...opt,
      percentage:
        totalVotes === 0 ? 0 : Math.round((counts[opt.id] / totalVotes) * 100),
    }));

    // 9️⃣ Update poll with new totals and percentages
    await strapi.db.query(UID_POLL).update({
      where: { id: pollId },
      data: {
        totalVotes,
        options: updatedOptions,
      },
    });

    // 10️⃣ Return updated poll
    const updatedPoll = await strapi.db.query(UID_POLL).findOne({
      where: { id: pollId },
      populate: { options: true },
    });

    return ctx.send({ data: updatedPoll });
  },
};
