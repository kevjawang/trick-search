import { ApolloServer } from "apollo-server-express";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./schema";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const apiPort = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

mongoose.set("useCreateIndex", true)

mongoose
  .connect(process.env.MONGO_DB ?? "", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`connected to MongoDB`)
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema,
  //context: ({ req }) => auth
});

server.applyMiddleware({ app });

app.listen(apiPort, () =>
  console.log(`Server running on port ${apiPort}${server.graphqlPath}`)
);
