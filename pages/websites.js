import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Websites = () => (
  <Layout title="Useful Links">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Useful Links
      </Heading>
      Coming soon...
    </Container>
  </Layout>
)

export default Websites
export { getServerSideProps } from '../components/chakra'