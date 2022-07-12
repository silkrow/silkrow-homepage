import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import SwordLoader from '../sword-loader'

const LazySword = dynamic(() => import('../sword'), {
  ssr: false,
  loading: () => <SwordLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Erkai Yu's homepage" />
        <meta name="author" content="Erkai Yu" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Erkai Yu" />
        <meta name="og:title" content="Erkai Yu" />
        <meta property="og:type" content="website" />
        <title>Erkai Yu - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazySword />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
