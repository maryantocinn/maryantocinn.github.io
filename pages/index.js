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
            <p>Tech Enthusiast</p>
          </Box>
          <Box flexShrink={0} mt={4} align="center">
            <Image
              borderColor={useColorModeValue("gray.800", "whiteAlpha.800")}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/maryanto.jpg"
              alt="Profile picture"
            />
          </Box>
        </Box>
        <Section delay={0.15}>
          <Heading as="h3" variant="section-title" align="center" mt={12}>
            Who am I?
          </Heading>
          <Paragraph>
            Motivated student completing Computer Science degree. Experienced in
            Agile and Scrum environments. Supports project coordination and
            programming needs. Projects included building, optimizing and
            deploying web apps.
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
            <BioYear>2002</BioYear>
            Born in Tg. Balai Karimun, Riau Islands.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Enrolled in Computer Science - Master Track program in Binus
            University.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Appointed as Research and Development Manager in BNCC(Bina Nusantara
            Computer Club).
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Interned as Back End Engineer at Coding Studio.
          </BioSection>
        </Section>
        <Section delay={0.45}>
          <Heading as="h3" variant="section-title" align="center" mt={12}>
            I have experience with
          </Heading>
          <Paragraph>
            Android Studio, Axios, Bootstrap, C, CSS, Django REST Framework,
            Docker, Express, Git, HTML, Java, Javascript, Laravel, MySQL,
            MongoDB, Netlify, Next.js, Node.js, PHP, Python, React, Sass,
            scikit, Semantic UI React, Spring Boot, SQL Server, Tailwind,
            PostgreSQL, Vagrant, Vercel
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
              <Link href="https://github.com/maryantocin" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  className="animate-cursor"
                >
                  maryantocin
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
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
