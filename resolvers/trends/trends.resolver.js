const { getTrends, addTrend } = require("./trends");
module.exports = {
  Query: {
    trends: async (parent, args, context) => {
      const trends = await getTrends();
      return trends;
    },
    
  },
  Mutation : {
    addTrend : async (parent, args, context) => {
      const trend = await addTrend(args);
      return trend;
    }
  }
};
