import styled from "styled-components";
import Layout from "../components/Layout";
import HighSearchBook from "../components/high-search-book/HighSearchBook";
import HighBookerWeb from "../components/high-booker/HighBookerWeb";
import HighBookerDataBase from "../components/high-booker-database/HighBookerDataBase";
import HighZoom from "../components/high-zoom/highZoom";

const ProjectContainer = styled.div`
  width: 100%;
  padding-bottom: 20vh;
`;
const StackContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60vh;
  padding-bottom: 20vh;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    padding-top: 30vh;
  }
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1vh;
  @media screen and (max-width: 500px) {
    justify-content: center;
    text-align: center;
  }
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Text = styled.div`
  font-weight: 300;
  font-size: 14px;
  padding-right: 15px;
  @media screen and (max-width: 500px) {
    padding-right: 0px;
    padding-bottom: 15px;
  }
`;

const Home = () => {
  return (
    <Layout>
      <StackContainer>
        <Row>
          <TextContainer>
            <Text>HTML</Text>
            <Text>CSS</Text>
            <Text>JavaScript</Text>
            <Text>TypeScript</Text>
            <Text>Node JS</Text>
            <Text>React JS</Text>
            <Text>React Native</Text>
          </TextContainer>
        </Row>
        <Row>
          <TextContainer>
            <Text>Web Sockets</Text>
            <Text>WebRTC</Text>
            <Text>AWS S3</Text>
            <Text>Rest API</Text>
            <Text>GraphQL</Text>
          </TextContainer>
        </Row>
        <Row>
          <TextContainer>
            <Text>MySQL</Text>
            <Text>Postgresql</Text>
            <Text>Prisma</Text>
            <Text>ApolloGraphql</Text>
            <Text>Nest JS</Text>
          </TextContainer>
        </Row>
      </StackContainer>
      <ProjectContainer>
        <HighBookerWeb />
        <HighBookerDataBase />
        <HighSearchBook />
        <HighZoom />
      </ProjectContainer>
    </Layout>
  );
};

export default Home;
