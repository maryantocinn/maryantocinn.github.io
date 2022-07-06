import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragaph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Compfest HIS">
      <Container>
        <Title>
          Compfest HIS <Badge>2021</Badge>
        </Title>
        <Paragraph>
          A simple hospital information system made for COMPFEST SEA selection.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/maryantocinn/compfest-be"
              className="animate-cursor"
            >
              github.com/maryantocinn/compfest-be
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/maryantocinn/compfest-fe"
              className="animate-cursor"
            >
              github.com/maryantocinn/compfest-fe
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Role</Meta>
            <span>Full Stack</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Bootstrap, Axios, Node.js, MongoDB</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/compfest/compfest-0.png" alt="compfest" />
        <WorkImage src="/images/works/compfest/compfest-1.png" alt="compfest" />
        <WorkImage src="/images/works/compfest/compfest-2.png" alt="compfest" />
        <WorkImage src="/images/works/compfest/compfest-3.png" alt="compfest" />
      </Container>
    </Layout>
  );
};

export default Work;
