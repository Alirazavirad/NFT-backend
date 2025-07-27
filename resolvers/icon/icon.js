const IconModel = require("../../models/icon.model")
const getIcons = async () => {
  const icons = await IconModel.find({})
  return icons;
};
const addIcon = async (args) => {
  
  const icon = await IconModel.create({
    title: args.title,
    icon: args.icon,
    color: args.color,
  });
  return icon;
};
module.exports = {
  getIcons,
  addIcon
};