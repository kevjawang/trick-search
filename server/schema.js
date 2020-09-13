const {merge} = require('lodash')
const {makeExecutableSchema, gql} = require('apollo-server-express')
const { Trick, trickResolvers } = require('./gql-schemas/trick')

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
    Query, Mutation, Trick
  ],
  resolvers: merge(
    resolvers,
    trickResolvers
  )
})

module.exports = schema
