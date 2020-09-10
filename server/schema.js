const {merge} = require('lodash')
const {makeExecutableSchema, gql} = require('apollo-server-express')
const { Entry, entryResolvers } = require('./gql-schemas/entry')

const Query = gql`
  type Query {
    _empty: String
  }
`

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [
    Query, Mutation, Entry
  ],
  resolvers: merge(
    resolvers,
    entryResolvers
  )
})

module.exports = schema
