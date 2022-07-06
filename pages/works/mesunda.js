import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragaph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Mesunda Mobile">
      <Container>
        <Title>
          Mesunda Mobile <Badge>2021</Badge>
        </Title>
        <Paragraph>
          A mobile app created with Android Studio which is used for BNCC
          Learning and Training final project.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/maryantocinn/MesundaMobile"
              className="animate-cursor"
            >
              github.com/maryantocinn/MesundaMobile
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Role</Meta>
            <span>Mobile</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Android Studio</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/mesunda/mesunda-0.png" alt="mesunda" />
        <WorkImage src="/images/works/mesunda/mesunda-1.png" alt="mesunda" />
        <WorkImage src="/images/works/mesunda/mesunda-2.png" alt="mesunda" />
        <WorkImage src="/images/works/mesunda/mesunda-3.png" alt="mesunda" />
        <WorkImage src="/images/works/mesunda/mesunda-4.png" alt="mesunda" />
      </Container>
    </Layout>
  );
};

export default Work;
