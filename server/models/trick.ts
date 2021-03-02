import mongoose, { Schema } from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const TrickSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  trick_tags: [String],
  categories: [String],
  skateboarder: String,
});

export const Trick = mongoose.model("Trick", TrickSchema);
export const TrickTC = composeWithMongoose(Trick)
