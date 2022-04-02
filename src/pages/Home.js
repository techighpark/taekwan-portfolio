import styled from "styled-components";
import Layout from "../components/Layout";
import { fonts } from "../themeStyles";

const MainContainer = styled.div`
  height: 95vh;

  /* border: 1px solid tomato; */
  @media screen and (max-width: 500px) {
    height: 68vh;
  }
`;

const FieldContainer = styled.div`
  position: relative;
  width: 100vw;
  top: 50vh;
  left: 0vw;

  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 800px) {
    width: 50vw;
    top: 35vh;
  }
  @media screen and (max-width: 500px) {
    width: 50vw;
    top: 22vh;
  }
`;
const FieldText = styled.div`
  font-family: ${fonts.Staliches};
  font-size: 130px;
  text-align: left;
  @media screen and (max-width: 500px) {
    font-size: 70px;
  }
`;

const MainStackContainer = styled.div`
  position: relative;
  top: 55vh;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  /* border: 2px solid tomato; */
  @media screen and (max-width: 800px) {
    top: 40vh;
  }
  @media screen and (max-width: 500px) {
    top: 24vh;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 5px 0;

  /* border: 0.5px solid yellow; */

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Stack = styled.div`
  font-size: 14px;
  font-weight: 100;
  padding-left: 20px;

  /* border: 1px solid burlywood; */
  @media screen and (max-width: 500px) {
    padding-left: 0px;
    padding-bottom: 10px;
  }
`;

const Home = () => {
  return (
    <Layout>
      <MainContainer>
        <FieldContainer>
          <FieldText>FRONT-ENGINEER</FieldText>
        </FieldContainer>
        <MainStackContainer>
          <Row>
            <Stack>HTML</Stack>
            <Stack>CSS</Stack>
            <Stack>JavaScript</Stack>
            <Stack>TypeScript</Stack>
            <Stack>Node JS</Stack>
            <Stack>React JS</Stack>
            <Stack>React Native</Stack>
          </Row>
          <Row>
            <Stack>Web Sockets</Stack>
            <Stack>WebRTC</Stack>
            <Stack>AWS S3</Stack>
            <Stack>Rest API</Stack>
            <Stack>GraphQL</Stack>
          </Row>
          <Row>
            <Stack>MySQL</Stack>
            <Stack>Postgresql</Stack>
            <Stack>Prisma</Stack>
            <Stack>ApolloGraphql</Stack>
            <Stack>Nest JS</Stack>
          </Row>
        </MainStackContainer>
      </MainContainer>
    </Layout>
  );
};

export default Home;
