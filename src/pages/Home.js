import styled from "styled-components";
import { keyframes } from "styled-components";
import Layout from "../components/Layout";
import { fonts } from "../themeStyles";

const MainContainer = styled.div`
  height: 95vh;

  /* border: 1px solid tomato;
  box-sizing: border-box; */
`;
const Pulse = keyframes`
  0% {
    left: -100vw;
  }
  100% {
    left: 100vw;
  }
`;

const FieldContainer = styled.div`
  position: absolute;
  width: 98vw;
  top: 45vh;
  left: 1vw;
  animation: ${Pulse} 10s infinite linear;

  /* border: 0.5px solid yellow;
  box-sizing: border-box; */
`;
const FieldText = styled.div`
  font-family: ${fonts.Staliches};
  font-size: 150px;
  text-align: left;
`;

const MainStackContainer = styled.div`
  position: relative;
  top: 75vh;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  /* border: 2px solid tomato;
  box-sizing: border-box; */
  @media screen and (max-width: 500px) {
    top: 50%;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 5px 0;

  /* border: 0.5px solid yellow;
  box-sizing: border-box; */

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Stack = styled.div`
  font-size: 14px;
  font-weight: 100;
  padding-left: 20px;

  /* border: 1px solid burlywood;
  box-sizing: border-box; */
  @media screen and (max-width: 500px) {
    padding-left: 0px;
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
