import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragaph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Learning Portal 2.1">
      <Container>
        <Title>
          Ninja <Badge>2021</Badge>
        </Title>
        <Paragraph>
          A fundraising platform made for COMPFEST SEA final task. Roles include
          donators, fundraisers and admin. All transactions need admin
          verification before proceeding.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://ninja-fe.netlify.app"
              className="animate-cursor"
            >
              ninja-fe.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/NinjaCompfest/ninja-fe"
              className="animate-cursor"
            >
              github.com/NinjaCompfest/ninja-fe
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Role</Meta>
            <span>Front End, Deployment</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Tailwind, Axios, Node.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/ninja/ninja-0.png" alt="ninja" />
        <WorkImage src="/images/works/ninja/ninja-1.png" alt="ninja" />
        <WorkImage src="/images/works/ninja/ninja-2.png" alt="ninja" />
        <WorkImage src="/images/works/ninja/ninja-3.png" alt="ninja" />
        <WorkImage src="/images/works/ninja/ninja-4.png" alt="ninja" />
      </Container>
    </Layout>
  );
};

export default Work;
