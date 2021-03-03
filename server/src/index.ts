import { ApolloServer } from "apollo-server-express";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./schema";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const app = express();
const apiPort = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_DB ?? "", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema,
});

server.applyMiddleware({ app });

app.listen(apiPort, () =>
  console.log(`Server running on port ${apiPort}${server.graphqlPath}`)
);
