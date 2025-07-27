const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
const IconModal = mongoose.models.icon || mongoose.model("icon", schema);
module.exports = IconModal;