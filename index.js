import express from "express";
import { ApolloServer } from "@apollo/server";
import mongoose from "mongoose";
import lodash from "lodash";
import cors from "cors";
import schema from "./graphql/index.js";

import { expressMiddleware } from "@apollo/server/express4";

const app = express();
const port = 4000;

const server = new ApolloServer({
  schema,
});

await server.start();
app.use("/graphql", cors(), express.json(), expressMiddleware(server));

mongoose.connect(process.env.MONGO_KEY).then(async () => {
  app.listen(port, () => {
    console.log("Server listening on port: ", port);
  });
});
