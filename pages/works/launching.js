import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragaph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="BNCC Launching">
      <Container>
        <Title>
          BNCC Launching <Badge>2020</Badge>
        </Title>
        <Paragraph>
          BNCC Launching is BNCC's annual event where freshmen are introduced to
          BNCC. In this event, freshmen would know about what is BNCC and what
          BNCC does. Freshmen could join BNCC Launching by registering through
          this website.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://launching.bncc.net" className="animate-cursor">
              launching.bncc.net <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://gitlab.com/maryantocinn/bncclaunching2020-be"
              className="animate-cursor"
            >
              gitlab.com/maryantocinn/bncclaunching2020-be
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Role</Meta>
            <span>
              Back End, Project Manager, Software Architecture, Deployment
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, MySQL, AdminLTE, Bootstrap, Jquery, Slick</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/launching/launching-0.png"
          alt="launching"
        />
        <WorkImage
          src="/images/works/launching/launching-1.png"
          alt="launching"
        />
        <WorkImage
          src="/images/works/launching/launching-2.png"
          alt="launching"
        />
        <WorkImage
          src="/images/works/launching/launching-3.png"
          alt="launching"
        />
        <WorkImage
          src="/images/works/launching/launching-4.png"
          alt="launching"
        />
      </Container>
    </Layout>
  );
};

export default Work;
