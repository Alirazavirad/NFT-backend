const BidModel = require("../../models/bids.modal");
const getBids = async () => {
  const bids = await BidModel.find({});
  return bids;
};
const addBid = async (args) => {
  const bid = await BidModel.create({
    title: args.title,
    creator: args.creator,
    img: args.img,
    price: args.price,
  });
  return bid;
};
module.exports = {
    getBids,
    addBid
};