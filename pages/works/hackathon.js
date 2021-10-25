import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragaph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Hackathon 3.0">
      <Container>
        <Title>
          BNCC Hackathon 3.0 <Badge>2020</Badge>
        </Title>
        <Paragraph>
          A website for BNCC Hackathon 3.0 needs. Every user's activities are
          done in here, including registration, payment, admin CRUD, group and
          payment validation.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://hackathon.bncc.net" className="animate-cursor">
              hackathon.bncc.net <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://gitlab.com/maryantocinn/hackathon-3.0-newnormal"
              className="animate-cursor"
            >
              gitlab.com/maryantocinn/hackathon-3.0-newnormal
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Role</Meta>
            <span>Back End, Software Architecture, Deployment</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, MySQL, Bootstrap, Jquery</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/hackathon/hackathon-0.png"
          alt="hackathon"
        />
        <WorkImage
          src="/images/works/hackathon/hackathon-1.png"
          alt="hackathon"
        />
        <WorkImage
          src="/images/works/hackathon/hackathon-2.png"
          alt="hackathon"
        />
        <WorkImage
          src="/images/works/hackathon/hackathon-3.png"
          alt="hackathon"
        />
        <WorkImage
          src="/images/works/hackathon/hackathon-4.png"
          alt="hackathon"
        />
        <WorkImage
          src="/images/works/hackathon/hackathon-5.png"
          alt="hackathon"
        />
      </Container>
    </Layout>
  );
};

export default Work;
