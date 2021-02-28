import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TrickSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  trick_tags: [String],
  categories: [String],
  skateboarder: String,
});

export default mongoose.model("Trick", TrickSchema);
