import express from "express";
import cors from "cors";
import apollo from "apollo-server-express"
const { ApolloServer } = apollo;

import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import schema from "./gql-schemas/schema.js";

dotenv.config();
const app = express();
const apiPort = process.env.PORT;

app.use(cors());

mongoose.set("useCreateIndex", true);

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to MongoDB`);
  })
  .catch((e) => {
    console.error("Could not connect to " + process.env.MONGO_DB, e.message);
  });

const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema: schema,
  context: ({ req }) => {
    const header = req.headers.authorization;
    if (!header) {
      return { isAdmin: false };
    }

    const token = header.split(" ");
    if (!token) {
      return { isAdmin: false };
    }

    let decodeToken;
    try {
      decodeToken = jwt.verify(token[1], process.env.JWT_SECRET);
    } catch (err) {
      return { isAdmin: false };
    }

    // in case any error found
    if (!!!decodeToken) {
      return { isAdmin: false };
    }

    return { userId: decodeToken.userId, isAdmin: decodeToken.isAdmin };
  }
});

server.applyMiddleware({ app });

app.listen(apiPort, () =>
  console.log(`Server running on port ${apiPort}${server.graphqlPath}`)
);
