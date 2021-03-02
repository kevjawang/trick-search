import { Trick, TrickTC } from "../models/trick";

const TrickQuery = {
  trickById: TrickTC.getResolver("findById"),
  trickByIds: TrickTC.getResolver("findByIds"),
  trickOne: TrickTC.getResolver("findOne"),
  trickMany: TrickTC.getResolver("findMany"),
  trickCount: TrickTC.getResolver("count"),
  trickConnection: TrickTC.getResolver("connection"),
  trickPagination: TrickTC.getResolver("pagination"),
};

const TrickMutation = {
  trickCreateOne: TrickTC.getResolver("createOne"),
  trickCreateMany: TrickTC.getResolver("createMany"),
  trickUpdateById: TrickTC.getResolver("updateById"),
  trickUpdateOne: TrickTC.getResolver("updateOne"),
  trickUpdateMany: TrickTC.getResolver("updateMany"),
  trickRemoveById: TrickTC.getResolver("removeById"),
  trickRemoveOne: TrickTC.getResolver("removeOne"),
  trickRemoveMany: TrickTC.getResolver("removeMany"),
};

export { TrickQuery, TrickMutation };
