const TrendModel = require("../../models/trends.model");

const getTrends = async () => {
  const trends = await TrendModel.find({});
  return trends;
};
const addTrend = async (args) => {
  const trend = await TrendModel.create({
    title: args.title,
    creator: args.creator,
    img: args.img,
    price: args.price,
  });
  return trend;
};
module.exports = {
  getTrends,
  addTrend,
};