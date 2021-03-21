import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  githubId: String,
  secret: String
})


export const User = mongoose.model("User", UserSchema);
