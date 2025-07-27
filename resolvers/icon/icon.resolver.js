const { getIcons, addIcon } = require("./icon");

module.exports = {
  Query: {
    icons: async (parent, args, context) => {
      const icons = await getIcons();
      return icons;
    },
  },
  Mutation : {
    addIcon: async (parent, args, context) => {
      const icon = await addIcon(args);
      return icon;
    }
  }
};
