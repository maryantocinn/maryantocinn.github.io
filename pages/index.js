import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragaph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";
import Welcome from "../components/welcome";
import {
  IoLogoGitlab,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";
import { BsSpotify } from "react-icons/bs";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Welcome />
        <Box>
          <Box flexGrow={1} align="center">
            <Heading as="h2" variant="page-title">
              Maryanto
            </Heading>
            <p>Software Engineer</p>
          </Box>
          <Box flexShrink={0} mt={4} align="center">
            <Image
              borderColor={useColorModeValue("gray.800", "whiteAlpha.800")}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/maryanto.png"
              alt="Profile picture"
            />
          </Box>
        </Box>
        <Section delay={0.15}>
          <Heading as="h3" variant="section-title" align="center" mt={12}>
            Who am I?
          </Heading>
          <Paragraph>
          Hello! I'm Maryanto, a recent Master's degree graduate and 
          full-time backend software engineer. I thrive in Agile and 
          Scrum environments, excelling in coordinating projects and 
          solving programming challenges. My journey includes crafting and 
          optimizing web applications, driven by my passion for innovation and 
          creating seamless user experiences.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                className="animate-cursor"
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" align="center" mt={12}>
            My journey
          </Heading>
          <BioSection>
            <BioYear>2024</BioYear>
            Promoted to Software Engineer II at&nbsp;
            <Link
              href="https://tiket.com/"
              target="_blank"
              className="animate-cursor"
            >
              tiket.com
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Completed my master's degree at&nbsp;
            <Link
              href="https://graduation.apps.binus.ac.id/graduates/2501878071/"
              target="_blank"
              className="animate-cursor"
            >
              Binus University
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Completed my bachelor's degree at&nbsp;
            <Link
              href="https://graduation.apps.binus.ac.id/graduates/2301878076/"
              target="_blank"
              className="animate-cursor"
            >
              Binus University
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Started working as Software Engineer I at&nbsp;
            <Link
              href="https://tiket.com/"
              target="_blank"
              className="animate-cursor"
            >
              tiket.com
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Instructed at&nbsp;
            <Link
              href="https://codingstudio.id/kursus-laravel/"
              target="_blank"
              className="animate-cursor"
            >
              Coding Studio
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Interned as Software Engineer at&nbsp;
            <Link
              href="https://tiket.com/"
              target="_blank"
              className="animate-cursor"
            >
              tiket.com
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Part-timed as Back End Engineer at&nbsp;
            <Link
              href="https://codingstudio.id/"
              target="_blank"
              className="animate-cursor"
            >
              Coding Studio
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Appointed as Research and Development Manager in&nbsp;
            <Link
              href="https://bncc.net/"
              target="_blank"
              className="animate-cursor"
            >
              BNCC
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Enrolled in Computer Science - Master Track program in&nbsp;
            <Link
              href="https://binus.ac.id//"
              target="_blank"
              className="animate-cursor"
            >
              Binus University
            </Link>
          </BioSection>
        </Section>
        <Section delay={0.45}>
          <Heading as="h3" variant="section-title" align="center" mt={12}>
            I have experience with
          </Heading>
          <Paragraph>
            Android Studio, Axios, Bootstrap, C, CSS, Django REST Framework,
            Docker, Express, Git, Go, HTML, Java, Javascript, Laravel, MySQL,
            MongoDB, Netlify, Next.js, Node.js, PHP, Python, React, Sass,
            scikit, Semantic UI React, Spring Boot, Spring WebFlux, SQL Server,
            Tailwind, PostgreSQL, Vagrant, Vercel
          </Paragraph>
        </Section>
        <Section delay={0.6}>
          <Heading as="h3" variant="section-title" align="center" mt={12}>
            Find me on
          </Heading>
          <List align="center">
            <ListItem>
              <Link href="https://linkedin.com/in/maryantocinn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                  className="animate-cursor"
                >
                  Maryanto
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/maryantocinn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  className="animate-cursor"
                >
                  maryantocinn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://gitlab.com/maryantocinn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGitlab} />}
                  className="animate-cursor"
                >
                  maryantocinn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/maryantocinn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                  className="animate-cursor"
                >
                  maryantocinn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://spotify.link/B9vHSo6CiCb" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={BsSpotify} />}
                  className="animate-cursor"
                >
                  maryantocinn
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
