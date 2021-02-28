import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { useApollo } from "../utils/withApollo"

function MyApp({ Component, pageProps }: any) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
