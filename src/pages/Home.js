import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import {
  ApollographqlIcon,
  AwsIcon,
  Css3Icon,
  GraphqlIcon,
  Html5Icon,
  JavascriptIcon,
  MysqllIcon,
  NestjsIcon,
  NodejsIcon,
  PostgresqlIcon,
  PrismaIcon,
  ReactLogoIcon,
  TypescriptIcon,
  WebrtcIcon,
} from "../assets/Icons";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>HOME | TAE KWAN</title>
      </Helmet>
      <MainContainer>
        <FieldContainer>
          <FieldText>FRONT-ENGINEER</FieldText>
        </FieldContainer>
        <MainStackContainer>
          <Row>
            <Stack>
              <Html5Icon />
              {/* Html5 */}
            </Stack>
            <Stack>
              <Css3Icon />
              {/* CSS */}
            </Stack>
            <Stack>
              <JavascriptIcon />
              {/* JavaScript */}
            </Stack>
            <Stack>
              <TypescriptIcon />
              {/* TypeScript */}
            </Stack>
            <Stack>
              <NodejsIcon />
              {/* Node JS */}
            </Stack>
            <Stack>
              <ReactLogoIcon />
              {/* React JS */}
            </Stack>
            {/* <Stack>
              <ReactLogoIcon />
              React Native
            </Stack> */}
          </Row>
          <Row>
            <Stack>
              <WebrtcIcon />
              {/* WebRTC */}
            </Stack>
            <Stack>
              <AwsIcon />
              {/* AWS S3 */}
            </Stack>
            <Stack>
              <GraphqlIcon />
              {/* GraphQL */}
            </Stack>
            <Stack>Rest API</Stack>
          </Row>
          <Row>
            {/* <GrayLine /> */}
            <Stack>
              <MysqllIcon />
              {/* MySQL */}
            </Stack>
            <Stack>
              <PostgresqlIcon />
              {/* Postgresql */}
            </Stack>
            <Stack>
              <PrismaIcon />
              {/* Prisma */}
            </Stack>
            <Stack>
              <ApollographqlIcon />
              {/* ApolloGraphql */}
            </Stack>
            <Stack>
              <NestjsIcon />
              {/* Nest JS */}
            </Stack>
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
  height: 92vh;
  position: relative;

  /* border: 3px solid tomato; */
  @media screen and (max-width: 500px) {
    height: 115vh;
  }
`;
const FieldContainer = styled.div`
  margin-top: 50vh;

  /* border: 0.5px solid yellow; */

  @media screen and (max-width: 500px) {
    margin-top: 160px;
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
  bottom: 0px;
  right: 1px;
  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    position: relative;
    /* height: 700px; */
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* margin-top: 200px; */
    /* margin-bottom: 200px; */
  }
`;

const Row = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;

  /* border: 0.5px solid yellow; */

  @media screen and (max-width: 500px) {
    /* flex-direction: column;
    
    align-items: center;
    padding-bottom: 30px; */
    justify-content: center;
  }
`;
const Stack = styled.div`
  font-size: 15px;
  font-weight: 100;
  padding-left: 20px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: ${props => props.theme.lightWhiteColor};

  /* border: 1px solid burlywood; */
  @media screen and (max-width: 500px) {
    padding-left: 0px;
    padding: 0px 10px;
    padding-bottom: 20px;
    font-size: 12px;
    font-weight: 300;
  }
`;

export default Home;
