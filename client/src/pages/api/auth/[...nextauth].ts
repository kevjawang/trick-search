import { gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import Providers from "next-auth/providers";
import { initializeApollo } from "../../../utils/withApollo";
import { IUser, IJWT } from "../../../utils/types"

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
  pages: {
    error: "/",
  },
  providers: [
    Providers.Credentials({
      name: "Password",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { data } = await client.mutate<{ loginResolver: IUser }>({
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
          name: null,
          userId: data.loginResolver.userId,
          username: data.loginResolver.username,
          isAdmin: data.loginResolver.isAdmin,
          token: data.loginResolver.token,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user: IUser) => {
      if (user)
        return Promise.resolve({
          name: null,
          isAdmin: user.isAdmin,
          token: user.token,
        });
      return Promise.resolve(token);
    },
    session: async (session, token: IJWT) => {
      return Promise.resolve({
        user: { name: null, isAdmin: token.isAdmin },
        accessToken: token.token,
        expires: session.expires,
      });
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
