import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

const Connections = () => (
  <Layout title="Connections">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Connections
      </Heading>
      Coming soon...
    </Container>
  </Layout>

  <Paragraph>
    <NextLink href="https://moomoohorse.com/home/" passHref>
      <Link target="_blank">Hao Ren</Link>
    </NextLink> 
  </Paragraph>
)

export default Connections
export { getServerSideProps } from '../components/chakra'