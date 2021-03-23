import { schemaComposer, toInputObjectType } from "graphql-compose";
import { User, UserTC } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



const loginResolver = schemaComposer.createResolver({
  kind: "mutation",
  name: "login",
  type: `type LoginPayload { recordId: MongoID, username: String, token: String, isAdmin: Boolean }`,
  args: {
    username: "String!",
    secret: "String!",
  },
  resolve: async ({ args }) => {
    const user = await User.findOne({ username: typeof(args.username) === "string" ? args.username : "" });
    if (!user) {
      throw new Error("No user exists.");
    }
    // const correctPass = await bcrypt.compare(args.secret, user.secret);
    // if (!correctPass) {
    //   throw new Error("Password is not correct.");
    // }

    const token = jwt.sign(
      { userId: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET ?? "doesntWork",
      {
        expiresIn: "24h",
      }
    );

    return {
      recordId: user._id,
      username: user.username,
      token: token,
      isAdmin: user.isAdmin,
    };
  },
});

export { loginResolver };
