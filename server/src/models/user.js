import graphqlcomposemongoose from "graphql-compose-mongoose";
const { composeMongoose } = graphqlcomposemongoose;
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  secret: String,
  isAdmin: Boolean,
});

export const User = mongoose.model("User", UserSchema);
export const UserTC = composeMongoose(User).addFields({token: {type: "String"}});
