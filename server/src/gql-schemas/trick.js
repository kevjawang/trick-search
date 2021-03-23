import { TrickTC } from "../models/trick.js";

const TrickQuery = {
  trickById: TrickTC.mongooseResolvers.findById(),
  trickByIds: TrickTC.mongooseResolvers.findByIds(),
  trickOne: TrickTC.mongooseResolvers.findOne(),
  trickMany: TrickTC.mongooseResolvers.findMany(),
  trickCount: TrickTC.mongooseResolvers.count(),
  trickConnection: TrickTC.mongooseResolvers.connection(),
  trickPagination: TrickTC.mongooseResolvers.pagination().addFilterArg({
    name: "search",
    type: "String",
    query: (query, value, resolveParams) => {
      resolveParams.args.sort = {
        score: { $meta: "textScore" },
      };
      query.$text = { $search: value, $language: "en" };
      resolveParams.projection.score = { $meta: "textScore" };
    },
  }),
};

const TrickMutation = {
  trickCreateOne: TrickTC.mongooseResolvers.createOne(),
  trickCreateMany: TrickTC.mongooseResolvers.createMany(),
  trickUpdateById: TrickTC.mongooseResolvers.updateById(),
  trickUpdateOne: TrickTC.mongooseResolvers.updateOne(),
  trickUpdateMany: TrickTC.mongooseResolvers.updateMany(),
  trickRemoveById: TrickTC.mongooseResolvers.removeById(),
  trickRemoveOne: TrickTC.mongooseResolvers.removeOne(),
  trickRemoveMany: TrickTC.mongooseResolvers.removeMany(),
};


export { TrickQuery, TrickMutation };
