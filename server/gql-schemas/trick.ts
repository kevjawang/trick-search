import {
  UserInputError,
  AuthenticationError,
  gql,
} from "apollo-server-express";
import { UpdateQuery, Document } from "mongoose";

import Trick from "../models/trick";

const typeDef = gql`
  extend type Query {
    tricks: [Trick!]!
    trick(id: ID!): Trick
  }

  extend type Mutation {
    addTrick(
      title: String!
      url: String!
      trick_tags: [String!]
      categories: [String!]
    ): Trick
    deleteTrick(id: ID!): Boolean
    updateTrick(
      id: ID!
      title: String!
      url: String!
      trick_tags: [String!]
      categories: [String!]
    ): Boolean
  }

  type Trick {
    id: ID!
    title: String!
    url: String!
    trick_tags: [String!]!
    categories: [String!]!
  }
`;

const resolvers = {
  Query: {
    tricks: async (root: any) => {
      return Trick.find({}).catch((err) => {
        throw new Error(err.message);
      });
    },
    trick: (root: any, args: { id: any; }, ctx: any) => {
      return Trick.findById(args.id);
    },
  },
  Mutation: {
    addTrick: async (root: any, args: any, ctx: any) => {
      //TODO: add auth and arg validation
      const trick = new Trick({ ...args });
      return trick.save().catch((err) => {
        throw new UserInputError(err.message, { invalidArgs: args });
      });
    },
    updateTrick: async (root: any, args: UpdateQuery<Document<any>>, ctx: any) => {
      //TODO: add auth and arg validation
      await Trick.findByIdAndUpdate(args.id, { ...args }).catch((err) => {
        throw new UserInputError(err.message, { invalidArgs: args });
      });
      return true;
    },
    deleteTrick: async (root: any, args: { id: any; }, ctx: any) => {
      //TODO: add auth and arg validation
      try {
        await Trick.findByIdAndDelete(args.id);
      } catch (err) {
        throw new UserInputError(err.message, { invalidArgs: args });
      }
      return true;
    },
  },
};

export { typeDef as Trick, resolvers as trickResolvers };
