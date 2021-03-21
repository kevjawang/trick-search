import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { Layout } from "../components/Layout";
import { Button } from "@chakra-ui/react";

const Login = ({}) => {
  const [session, loading] = useSession();

  return (
    <Layout>
      {!session && <Button onClick={() => signIn("github")}>Login with Github</Button>}
      {session && <Button onClick={() => signOut()}>Logout</Button>}
    </Layout>
  );
};

export default Login;
