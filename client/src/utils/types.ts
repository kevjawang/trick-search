import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface IUser extends User {
  userId: string;
  username: string;
  isAdmin: boolean;
  token: string;
}

export interface IJWT extends JWT {
  isAdmin: boolean;
  token: string;
}

export interface ISessionUser extends Session {
  user: {
    name: string;
    isAdmin: boolean;
  },
}