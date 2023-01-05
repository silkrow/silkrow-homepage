import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Connections = () => (
  <Layout title="Connections">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Connections
      </Heading>
      <Box align="center" my={4}>
          <NextLink href="https://moomoohorse.com/home/" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Hao Ren
            </Button>
          </NextLink>
        </Box>
    </Container>
  </Layout>
)

export default Connections
export { getServerSideProps } from '../components/chakra'