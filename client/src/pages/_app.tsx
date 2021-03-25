import { Provider as NextAuthProvider } from "next-auth/client"
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useApollo } from "../utils/withApollo"
import { getSession } from "next-auth/client"
import { useEffect, useState } from "react";

const theme = extendTheme({

})

async function getToken() {
  const session = await getSession()
  return session ? session.accessToken : ""
}

function MyApp({ Component, pageProps }: any) {
  const [ authToken, setAuthToken ] = useState("")
  getToken().then(token => {
    setAuthToken(token)
  })

  const apolloClient = useApollo(pageProps.initialApolloState, authToken)

  return (
    <NextAuthProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
