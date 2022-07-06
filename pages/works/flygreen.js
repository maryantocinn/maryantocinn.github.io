import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragaph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="FlyGreen">
      <Container>
        <Title>
          FlyGreen <Badge>2020</Badge>
        </Title>
        <Paragraph>
          An airline ticketing platform created with Laravel. This project was
          made to learn more about Laravel during a program in BNCC.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repo</Meta>
            <Link
              href="https://github.com/maryantocinn/Kelompok-2-Regen"
              className="animate-cursor"
            >
              github.com/maryantocinn/Kelompok-2-Regen
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Role</Meta>
            <span>Back End</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, MySQL</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/flygreen/flygreen-0.png" alt="flygreen" />
        <WorkImage src="/images/works/flygreen/flygreen-1.png" alt="flygreen" />
        <WorkImage src="/images/works/flygreen/flygreen-2.png" alt="flygreen" />
        <WorkImage src="/images/works/flygreen/flygreen-3.png" alt="flygreen" />
        <WorkImage src="/images/works/flygreen/flygreen-4.png" alt="flygreen" />
      </Container>
    </Layout>
  );
};

export default Work;
