const { getUser, signUp, login } = require("./user");

module.exports = {
  Query: {
    userById: (parent, args, context) => {
      const req = context.req;
      const authHeader = req.headers.authorization || "";
      const token = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader;

      const user = getUser(token);
      return user;
    },
  },
  Mutation: {
    register: async (parent, args, context) => {
      const user = await signUp(
        args.name,
        args.username,
        args.Email,
        args.password
      );
      return user;
    },
    login: async (parent, args, context) => {
      const user = await login(args.Email, args.password);

      return user;
    },
  },
};
