import {
  Resolver,
  ResolverResolveParams,
  SchemaComposer,
} from "graphql-compose";
import { TrickQuery, TrickMutation } from "./gql-schemas/trick";
import { imageFromUrlResolver } from "./gql-schemas/metadata";
import { loginResolver } from "./gql-schemas/user";
import auth from "./auth";

const schemaComposer = new SchemaComposer();

function adminAccess(resolvers: any) {
  Object.keys(resolvers).forEach((k) => {
    resolvers[k] = resolvers[k].wrapResolve(
      (next: (arg0: any) => any) => async (rp: {
        beforeRecordMutate: (doc: any, rp: any) => Promise<any>;
      }) => {
        rp.beforeRecordMutate = async function (doc, rp) {
          console.log(rp.context)
          if (!rp.context.isAdmin) {
            throw new Error("Unauthorized");
          }
          return next(rp);
        };
      }
    );
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
  loginResolver,
});

const gqlSchema = schemaComposer.buildSchema();
export default gqlSchema;
