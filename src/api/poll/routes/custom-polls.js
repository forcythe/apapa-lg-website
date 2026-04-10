module.exports = {
  routes: [
    {
      method: "POST",
      path: "/polls/:id/vote",
      handler: "poll.vote",
      config: { auth: false },
    },
  ],
};