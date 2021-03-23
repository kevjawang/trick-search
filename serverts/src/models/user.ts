import { composeMongoose } from "graphql-compose-mongoose";
import mongoose, { Schema, Model, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  secret: string;
  isAdmin: boolean;
}

const UserSchema = new Schema({
  username: String,
  secret: String,
  isAdmin: Boolean,
});

export { IUser }
export const User: Model<IUser> = mongoose.model("User", UserSchema);
export const UserTC = composeMongoose(User).addFields({token: {type: "String"}});
