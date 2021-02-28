import { ApolloServer } from "apollo-server-express";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { db } from "./db";
import { schema } from "./schema";

const app = express();
const apiPort = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema,
});

server.applyMiddleware({ app });

app.listen(apiPort, () =>
  console.log(`Server running on port ${apiPort}${server.graphqlPath}`)
);
