import styled from "styled-components";
import Layout from "../components/Layout";

const MainContainer = styled.div`
  position: relative;
  padding-top: 75vh;
  z-index: -1;
  /* border: 1px solid tomato; */

  @media screen and (max-width: 500px) {
    padding-top: 100vh;
  }
`;

const FieldContainer = styled.div`
  position: absolute;
  top: 50vh;

  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 500px) {
    width: 50vw;
    top: 65vh;
  }
`;
const FieldText = styled.div`
  font-style: italic;
  font-size: 120px;
  font-weight: 500;
  text-align: left;
  letter-spacing: -0.1em;
  /* cursor: pointer; */
  @media screen and (max-width: 800px) {
    font-size: 90px;
  }
  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
  &::after {
    content: "Front-Engineer";
  }
  :hover {
    &::after {
      display: none;
    }
    &::before {
      content: "프론트 엔지니어";
      font-size: 110px;
      @media screen and (max-width: 800px) {
        font-size: 80px;
      }
      @media screen and (max-width: 500px) {
        font-size: 50px;
      }
    }
  }
`;

const MainStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    padding-bottom: 20vh;
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
    padding-bottom: 30px;
  }
`;
const Stack = styled.div`
  font-size: 15px;
  font-weight: 100;
  padding-left: 20px;

  /* border: 1px solid burlywood; */
  @media screen and (max-width: 500px) {
    padding-left: 0px;
    padding-bottom: 10px;
    font-size: 12px;
    font-weight: 300;
  }
`;

const Home = () => {
  return (
    <Layout>
      <MainContainer>
        <FieldContainer>
          <FieldText />
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
