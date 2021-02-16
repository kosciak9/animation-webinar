import { Container, ChakraProvider } from "@chakra-ui/react"
import { NavigationBar } from "../components/NavigationBar"
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (<ChakraProvider>
    <NavigationBar />
    <Head>
      <title>Animacje w React!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container my={4} py={4}>
      <Component {...pageProps} />
    </Container>
  </ChakraProvider>)
}

export default MyApp
