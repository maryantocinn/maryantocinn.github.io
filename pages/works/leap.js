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
          LEAP BNCC 2.1 <Badge>2021</Badge>
        </Title>
        <Paragraph>
          A learning management system for BNCC. This single page application
          will be use for BNCC Learning and Training daily activity by the
          Admin, Praetorian, and Member.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://member.bncc.net" className="animate-cursor">
              https://member.bncc.net <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Role</Meta>
            <span>Front End & Deployment</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React, Semantic UI React, styled-component, JSON Web Server,
              Axios, SASS, Laravel
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/leap/leap-0.png" alt="leap" />
        <WorkImage src="/images/works/leap/leap-1.png" alt="leap" />
        <WorkImage src="/images/works/leap/leap-2.png" alt="leap" />
        <WorkImage src="/images/works/leap/leap-3.png" alt="leap" />
        <WorkImage src="/images/works/leap/leap-4.png" alt="leap" />
      </Container>
    </Layout>
  );
};

export default Work;
