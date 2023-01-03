import NextLink from 'next/link'
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
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import { SiZhihu, SiBilibili } from 'react-icons/si'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an CompE student study in UIUC!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Erkai Yu
          </Heading>
          <p>coder, chess player, gamedev lover</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/ErkaiYu.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
        Hi, I&apos;m Erkai Yu, an undergraduate major in Computer Engineering. 
        I like operating system development and system security things, 
        feel free to contact me if you&apos;re interested in those as well. I{' '}
        <NextLink href="https://www.chess.com/member/alphatwenty" passHref>
            <Link target="_blank">play chess</Link>
          </NextLink> as a hobby, send me a challenge and I will definitely 
        accept it. Also, I&apos;m a big fan of learning natural languages, please 
        teach me to speak in your mother tongue! :)
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://silkrow3.wordpress.com/" passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My blogs
            </Button>
          </NextLink>
        </Box>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My works
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Zhejiang, China.
        </BioSection>
        <BioSection>
          <BioYear>2009</BioYear>
          Started learning English.
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Started coding with Pascal.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Graduated from Zhejiang Yiwu High School.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Studying in{' '}
          <Link href="https://zjui.intl.zju.edu.cn/en" target="_blank">
            ZJUI
          </Link>
          {' '}as an undergraduate major in CompE
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started learning Italian.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Badminton,{' '}
          <Link href="https://www.chess.com/member/kyle_yu" target="_blank">
            Chess
          </Link>
          , Math, GameDev, 金庸武侠
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/silkrow" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @silkrow
              </Button>
            </Link>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <Link href="https://www.zhihu.com/people/draughtchuan-tang-feng" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<SiZhihu />}
              >
                @当时只道是寻常
              </Button>
            </Link>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <Link href="https://space.bilibili.com/506777179" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<SiBilibili />}
              >
                @MycroftH
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'