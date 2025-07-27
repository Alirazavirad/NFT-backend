const express = require("express");
const app = express();
const cors = require("cors");
const { loadFilesSync } = require("@graphql-tools/load-files");
const path = require("path");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { createHandler } = require("graphql-http/lib/use/express");
const { mongoose } = require("mongoose");
const Uploadroutes = require("./routes/upload.routes");
app.use("/upload", Uploadroutes);
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const schemas = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolvers = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

const schema = makeExecutableSchema({
  typeDefs: schemas,
  resolvers: resolvers,
});
app.use(
  "/graphql",
  createHandler({
    schema,
    context: ({ req, res, raw }) => ({
      req: raw, // یا req یا raw بسته به نسخه Yoga
      res,
    }),
  })
);

mongoose.connect("mongodb://127.0.0.1:27017/NFT");
app.listen(5000);
