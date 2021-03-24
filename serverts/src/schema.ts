import { SchemaComposer } from "graphql-compose";
import { TrickQuery, TrickMutation } from "./gql-schemas/trick";
import { imageFromUrlResolver } from "./gql-schemas/metadata";

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...TrickQuery,
  imageFromUrlResolver,
});

schemaComposer.Mutation.addFields({
    ...TrickMutation,
});

const gqlSchema = schemaComposer.buildSchema();
export default gqlSchema;
