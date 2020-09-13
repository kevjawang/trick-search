const { UserInputError, AuthenticationError, gql } = require('apollo-server-express')

const Trick = require('../models/trick')

const typeDef = gql`
  extend type Query {
    tricks: [Trick!]!
    trick(id: ID!): Trick
  }

  extend type Mutation {
    addTrick(
      url: String!
      trick_tags: [String!]!
      categories: [String!]!
    ): Trick
    deleteTrick(id: ID!): Boolean
    updateTrick(
      id: ID!
      url: String!
      trick_tags: [String!]!
      categories: [String!]!
    ): Boolean
  }

  type Trick {
    id: ID!
    url: String!
    trick_tags: [String!]!
    categories: [String!]!
  }
`

const resolvers = {
  Query: {
    tricks: async(root) => {
      return Trick.find({})
        .catch((err) => {
          throw new Error(err.message)
        })
    },
    trick: (root, args, ctx) => {
      return Trick.findById(args.id)
    }
  },
  Mutation: {
    addTrick: async(root, args, ctx) => {
      //TODO: add auth and arg validation
      const trick = new Trick({...args})
      return trick.save().catch(err => {
        throw new UserInputError(err.message, {invalidArgs: args})
      })
    },
    updateTrick: async(root, args, ctx) => {
      //TODO: add auth and arg validation
      await Trick.findByIdAndUpdate(args.id, {...args})
        .catch((err) => {
          throw new UserInputError(err.message, { invalidArgs: args })
        })
        return true
    },
    deleteTrick: async(root, args, ctx) => {
       //TODO: add auth and arg validation
      try {
        await Trick.findByIdAndDelete(args.id)
      } catch (err) {
        throw new UserInputError(err.message, {invalidArgs: args})
      }
      return true
    }
  },
}

module.exports = {
  Trick: typeDef,
  trickResolvers: resolvers
}
