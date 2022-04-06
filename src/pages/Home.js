import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>TAE KWAN | HOME</title>
      </Helmet>
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
            {/* <GrayLine /> */}
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

const MainContainer = styled.div`
  z-index: -1;
  max-width: 2000px;
  width: 100%;
  height: 94vh;
  position: relative;

  /* border: 3px solid tomato; */
  @media screen and (max-width: 500px) {
    height: 130vh;
  }
`;
const FieldContainer = styled.div`
  margin-top: 50vh;

  /* border: 0.5px solid yellow; */

  @media screen and (max-width: 500px) {
    margin-top: 300px;
    text-align: center;
  }
`;
const FieldText = styled.span`
  position: relative;
  /* font-style: italic; */
  font-size: 90px;
  font-weight: 100;
  letter-spacing: 0.1em;

  /* border: 1px solid yellowgreen; */

  &::after {
    content: "";
    position: absolute;
    bottom: 20px;
    right: -20px;
    height: 20px;
    width: 20px;
    border: 1px solid ${props => props.theme.accentColor};
  }
  @media screen and (max-width: 1000px) {
    font-size: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: 45px;
    &::after {
      content: "";
      bottom: 10px;
      right: -10px;
      height: 10px;
      width: 10px;
    }
  }
`;

const MainStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  bottom: 20px;
  right: 1px;
  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    height: 500px;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 200px;
    margin-bottom: 30px;
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
  white-space: nowrap;
  color: ${props => props.theme.lightWhiteColor};

  /* border: 1px solid burlywood; */
  @media screen and (max-width: 500px) {
    padding-left: 0px;
    padding-bottom: 10px;
    font-size: 12px;
    font-weight: 300;
  }
`;

export default Home;
