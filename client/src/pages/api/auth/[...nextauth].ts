import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";
import {use} from "../../../generated/graphql"

const options: NextAuthOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUBSECRET,
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET
  },
  callbacks: {
    signIn: async function signIn(user, account, metadata) {

      return true
    }
  }
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
