import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Resume = () => (
  <Layout title="Resume">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Resume
      </Heading>
      Coming soon...
    </Container>
  </Layout>
)

export default Resume
export { getServerSideProps } from '../components/chakra'