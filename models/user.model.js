const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  cart: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: "product",
        required: true,
      },
    },
  ],
});
const UserModel = mongoose.models.user || mongoose.model("user", schema);
module.exports = UserModel;
