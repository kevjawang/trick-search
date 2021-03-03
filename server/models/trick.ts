import mongoose, { Schema } from "mongoose";
import { composeMongoose } from "graphql-compose-mongoose";

const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const TrickSchema = new Schema({
  title: { type: String, required: true },
  url: {
    type: String,
    required: true,
    validate: (v: string) => {
      return urlRegex.test(v);
    },
  },
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
