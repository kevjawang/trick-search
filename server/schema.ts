import { merge } from "lodash";
import { makeExecutableSchema, gql } from "apollo-server-express";
import { Trick, trickResolvers } from "./gql-schemas/trick";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, Trick],
  resolvers: merge(resolvers, trickResolvers),
});

export { schema };
