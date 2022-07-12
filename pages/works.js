import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      Coming soon...
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
