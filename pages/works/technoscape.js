import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragaph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="TechnoScape">
      <Container>
        <Title>
          TechnoScape <Badge>2021</Badge>
        </Title>
        <Paragraph>The biggest annual technology event held by BNCC.</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://technoscape.id" className="animate-cursor">
              technoscape.id <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Role</Meta>
            <span>Front End, Software Architecture, Deployment</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, MySql, Bootstrap, Jquery, Slick</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/technoscape/technoscape-0.jpg"
          alt="technoscape"
        />
        <WorkImage
          src="/images/works/technoscape/technoscape-1.png"
          alt="technoscape"
        />
        <WorkImage
          src="/images/works/technoscape/technoscape-2.png"
          alt="technoscape"
        />
        <WorkImage
          src="/images/works/technoscape/technoscape-3.png"
          alt="technoscape"
        />
        <WorkImage
          src="/images/works/technoscape/technoscape-4.png"
          alt="technoscape"
        />
      </Container>
    </Layout>
  );
};

export default Work;
