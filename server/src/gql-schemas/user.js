import { User, UserTC } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

UserTC.addResolver({
  kind: "mutation",
  name: "login",
  type: `type LoginPayload { userId: MongoID, username: String, token: String, isAdmin: Boolean }`,
  args: {
    username: "String!",
    secret: "String!",
  },
  resolve: async ({ args }) => {
    const user = await User.findOne({
      username: typeof args.username === "string" ? args.username : "",
    });
    if (!user) {
      throw new Error("No user exists.");
    }
    const correctPass = await bcrypt.compare(args.secret, user.secret);
    if (!correctPass) {
      throw new Error("Password is not correct.");
    }

    const token = jwt.sign(
      { userId: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    return {
      userId: user._id,
      username: user.username,
      token: token,
      isAdmin: user.isAdmin,
    };
  },
});

UserTC.addResolver({
  kind: "mutation",
  name: "register",
  type: `type RegisterPayload { username: String! }`,
  args: {
    username: "String!",
    secret: "String!",
  },
  resolve: async ({ args }) => {
    const user = await User.findOne({
      username: args.username,
    });
    if (user) {
      throw new Error("User with username exists.")
    }

    const hashedPass = await bcrypt.hash(args.secret, 10);
    const newuser = await User.create({
      username: args.username,
      secret: hashedPass,
      isAdmin: false
    });
    return { username: newuser.username };
  },
});

const UserMutation = {
  register: UserTC.getResolver("register"),
  loginResolver: UserTC.getResolver("login"),
};

export { UserMutation };
