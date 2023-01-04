import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Connections = () => (
  <Layout title="Connections">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Connections
      </Heading>
      Coming soon...
    </Container>
  </Layout>

<Section delay={0.3}>>
<Paragraph>
  Hao Ren: https://moomoohorse.com/home/
</Paragraph>
</Section>
)

export default Connections
export { getServerSideProps } from '../components/chakra'