const { getBids, addBid } = require("./bids");

module.exports = {
  Query: {
    bids: async (parent, args, context) => {
      const bids = await getBids();
      return bids;
    },

  },
  Mutation : {
    addBid : async (parent, args, context) => {
      const bid = await addBid(args);
      return bid;
    }
  }
};
