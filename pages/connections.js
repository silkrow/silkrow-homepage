import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'

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