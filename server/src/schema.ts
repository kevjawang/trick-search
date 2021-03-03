import { SchemaComposer } from "graphql-compose";
import { TrickQuery, TrickMutation } from "./gql-schemas/trick";

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...TrickQuery,
});

schemaComposer.Mutation.addFields({
  ...TrickMutation,
});

const gqlSchema =  schemaComposer.buildSchema();
export default gqlSchema
