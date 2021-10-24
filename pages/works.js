import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/gridItem";

import thumbnailLeap from "../public/images/works/leap/leap-4.png";
import thumbnailNinja from "../public/images/works/ninja/ninja-0.png";
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Web Portfolio
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="leap"
              title="LEAP BNCC 2.1"
              thumbnail={thumbnailLeap}
              className="animate-cursor"
            >
              A learning management system for BNCC Learning and Training
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="ninja"
              title="Ninja"
              thumbnail={thumbnailNinja}
              className="animate-cursor"
            >
              A fundraising platform made for COMPFEST SEA final task
            </WorkGridItem>
          </Section>
          <Section delay={0.45}>
            <WorkGridItem
              id="compfest"
              title="Compfest HIS"
              thumbnail={thumbnailNinja}
              className="animate-cursor"
            >
              A fundraising platform made for COMPFEST SEA final task
            </WorkGridItem>
          </Section>
          <Section delay={0.45}>
            <WorkGridItem
              id="technoscape"
              title="Technoscape 2021"
              thumbnail={thumbnailNinja}
              className="animate-cursor"
            >
              A fundraising platform made for COMPFEST SEA final task
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="hackathon"
              title="Hackathon 3.0 BNCC"
              thumbnail={thumbnailNinja}
              className="animate-cursor"
            >
              A fundraising platform made for COMPFEST SEA final task
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="launching"
              title="BNCC Launching 2020"
              thumbnail={thumbnailNinja}
              className="animate-cursor"
            >
              A fundraising platform made for COMPFEST SEA final task
            </WorkGridItem>
          </Section>
          <Section delay={0.75}>
            <WorkGridItem
              id="airline"
              title="Airline Ticketing"
              thumbnail={thumbnailNinja}
              className="animate-cursor"
            >
              A fundraising platform made for COMPFEST SEA final task
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Heading as="h3" fontSize={20} mb={4}>
          Miscellaneous Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.9}>
            <WorkGridItem
              id="mesunda"
              title="Mesunda Mobile"
              thumbnail={thumbnailNinja}
              className="animate-cursor"
            >
              A fundraising platform made for COMPFEST SEA final task
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
