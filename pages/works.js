import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/gridItem";

import thumbnailLeap from "../public/images/works/leap/leap-4.png";
import thumbnailNinja from "../public/images/works/ninja/ninja-0.png";
import thumbnailCompfest from "../public/images/works/compfest/compfest-1.png";
import thumbnailTechnoscape from "../public/images/works/technoscape/technoscape-1.png";
import thumbnailHackathon from "../public/images/works/hackathon/hackathon-0.png";
import thumbnailLaunching from "../public/images/works/launching/launching-0.png";
import thumbnailFlygreen from "../public/images/works/flygreen/flygreen-0.png";
import thumbnailMesunda from "../public/images/works/mesunda/mesunda-0.png";
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
              thumbnail={thumbnailCompfest}
              className="animate-cursor"
            >
              A simple hospital information system made for COMPFEST SEA
              selection.
            </WorkGridItem>
          </Section>
          <Section delay={0.45}>
            <WorkGridItem
              id="technoscape"
              title="TechnoScape 2021"
              thumbnail={thumbnailTechnoscape}
              className="animate-cursor"
            >
              The biggest annual technology event held by BNCC.
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="hackathon"
              title="Hackathon 3.0 BNCC"
              thumbnail={thumbnailHackathon}
              className="animate-cursor"
            >
              Official website for BNCC Hackathon 3.0.
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="launching"
              title="BNCC Launching 2020"
              thumbnail={thumbnailLaunching}
              className="animate-cursor"
            >
              Official website for BNCC Launching 2020.
            </WorkGridItem>
          </Section>
          <Section delay={0.75}>
            <WorkGridItem
              id="flygreen"
              title="FlyGreen"
              thumbnail={thumbnailFlygreen}
              className="animate-cursor"
            >
              An airline ticketing platform.
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
              thumbnail={thumbnailMesunda}
              className="animate-cursor"
            >
              Mobile app project created with Android Studio.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
