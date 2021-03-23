import graphqlcompose from "graphql-compose";
const { SchemaComposer } = graphqlcompose;
import { TrickQuery, TrickMutation } from "./trick.js";
import { imageFromUrlResolver } from "./metadata.js";
import { UserMutation } from "./user.js";

const schemaComposer = new SchemaComposer();

function adminAccess(resolvers) {
  Object.keys(resolvers).forEach((k) => {
    resolvers[k] = resolvers[k].wrapResolve((next) => async (rp) => {
      if (!rp.context.isAdmin)
      {
        throw new Error("Unauthorized");
      }
      return next(rp)
    });
  });
  return resolvers;
}

schemaComposer.Query.addFields({
  ...TrickQuery,
  imageFromUrlResolver,
});

schemaComposer.Mutation.addFields({
  ...adminAccess({
    ...TrickMutation,
  }),
  ...UserMutation,
});

const schema = schemaComposer.buildSchema();
export default schema;
