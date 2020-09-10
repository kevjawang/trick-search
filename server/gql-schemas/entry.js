const { UserInputError, AuthenticationError, gql } = require('apollo-server-express')

const Entry = require('../models/entry-model')

const typeDef = gql`
  extend type Query {
    entries: [Entry!]!
    entry(id: ID!): Entry
  }

  extend type Mutation {
    addEntry(
      url: String!
      trick_tags: [String!]!
      categories: [String!]!
    ): Entry
    deleteEntry(id: ID!): Boolean
    updateEntry(
      id: ID!
      url: String!
      trick_tags: [String!]!
      categories: [String!]!
    ): Boolean
  }

  type Entry {
    id: ID!
    url: String!
    trick_tags: [String!]!
    categories: [String!]!
  }
`

const resolvers = {
  Query: {
    entries: async(root) => {
      return Entry.find({})
        .catch((err) => {
          throw new Error(err.message)
        })
    },
    entry: (root, args, ctx) => {
      return Entry.findById(args.id)
    }
  },
  Mutation: {
    addEntry: async(root, args, ctx) => {
      //TODO: add auth and arg validation
      const entry = new Entry({...args})
      return entry.save().catch(err => {
        throw new UserInputError(err.message, {invalidArgs: args})
      })
    },
    updateEntry: async(root, args, ctx) => {
      //TODO: add auth and arg validation
      await Entry.findByIdAndUpdate(args.id, {...args})
        .catch((err) => {
          throw new UserInputError(err.message, { invalidArgs: args })
        })
        return true
    },
    deleteEntry: async(root, args, ctx) => {
       //TODO: add auth and arg validation
      try {
        await Entry.findByIdAndDelete(args.id)
      } catch (err) {
        throw new UserInputError(err.message, {invalidArgs: args})
      }
      return true
    }
  },
}

module.exports = {
  Entry: typeDef,
  entryResolvers: resolvers
}
