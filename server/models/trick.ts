import mongoose, { Schema } from "mongoose";
import { composeMongoose } from "graphql-compose-mongoose";

const TrickSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  trick_tags: [String],
  categories: [String],
  skateboarder: String,
});

TrickSchema.index({
  title: "text",
  trick_tags: "text",
  categories: "text",
  skateboarder: "text",
});

export const Trick = mongoose.model("Trick", TrickSchema);
export const TrickTC = composeMongoose(Trick);
