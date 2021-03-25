import { useSession } from "next-auth/client";
import { ISessionUser } from "./types";

export const useUser = (): [ISessionUser | undefined | null, boolean] => {
  // @ts-ignore
  return useSession();
}