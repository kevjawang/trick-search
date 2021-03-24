import { gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import Providers from "next-auth/providers";
import {initializeApollo} from "../../../utils/withApollo"

interface IUser {
  userId: String;
  username: String;
  isAdmin: boolean;
  token: String;
}

const LOGIN = gql`
  mutation loginResolver($username: String!, $secret: String!) {
    loginResolver(username: $username, secret: $secret) {
      userId
      username
      token
      isAdmin
    }
  }
`;

const client = initializeApollo();

const options: NextAuthOptions = {
    // providers: [
    //     Providers.GitHub({
    //      clientId: process.env.GITHUB_ID,
    //      clientSecret: process.env.GITHUBSECRET,
    //    }),
    //  ],
  providers: [
    Providers.Credentials({
      name: "",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        const { data } = await client.mutate<IUser>({
          mutation: LOGIN,
          variables: {
            username: credentials.username,
            secret: credentials.password,
          },
        });

        if (!data) {
          return null;
        }

        return {
          name: "",
          userId: data.userId,
          username: data.username,
          isAdmin: data.isAdmin,
          token: data.token,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      console.log(user)
      if (user)
      {

      }
      return Promise.resolve(token)
    }
  }
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
