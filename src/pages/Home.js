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
  MysqlIcon,
  NestjsIcon,
  NodejsIcon,
  PostgresqlIcon,
  PrismaIcon,
  ReactLogoIcon,
  TypescriptIcon,
  WebrtcIcon,
  StyledcomponentsIcon,
  TailwindcssIcon,
  NextdotjsIcon,
  VercelIcon,
  NetlifyIcon,
  HerokuIcon,
  GithubIcon,
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
            </Stack>
            <Stack>
              <Css3Icon />
            </Stack>
            <Stack>
              <JavascriptIcon />
            </Stack>
            <Stack>
              <TypescriptIcon />
            </Stack>
            <Stack>
              <ReactLogoIcon />
            </Stack>
            <Stack>
              <NextdotjsIcon />
            </Stack>
            <Stack>
              <StyledcomponentsIcon />
            </Stack>
            <Stack>
              <TailwindcssIcon />
            </Stack>
            <Stack>
              <WebrtcIcon />
            </Stack>
          </Row>
          <Row>
            <Stack>
              <GithubIcon />
            </Stack>
            <Stack>
              <HerokuIcon />
            </Stack>
            <Stack>
              <VercelIcon />
            </Stack>
            <Stack>
              <NetlifyIcon />
            </Stack>
            <Stack>
              <AwsIcon />
            </Stack>
            <Stack>
              <ApollographqlIcon />
            </Stack>
          </Row>
          <Row>
            <Stack>
              <NodejsIcon />
            </Stack>
            <Stack>
              <MysqlIcon />
            </Stack>
            <Stack>
              <PostgresqlIcon />
            </Stack>
            <Stack>
              <PrismaIcon />
            </Stack>
            <Stack>
              <NestjsIcon />
            </Stack>
            <Stack>
              <GraphqlIcon />
            </Stack>
            <Stack>Rest API</Stack>
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
  font-weight: 700;
  letter-spacing: 0.1em;

  /* border: 1px solid yellowgreen; */

  &::after {
    content: "";
    position: absolute;
    bottom: 20px;
    right: -20px;
    height: 25px;
    width: 25px;
    border: 5px solid ${props => props.theme.accentColor};
    box-sizing: border-box;
  }
  @media screen and (max-width: 1100px) {
    font-size: 70px;
    &::after {
      content: "";
      bottom: 17px;
      right: -14px;
      height: 20px;
      width: 20px;
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 60px;
    &::after {
      content: "";
      bottom: 15px;
      right: -14px;
      height: 17px;
      width: 17px;
      border: 3px solid ${props => props.theme.accentColor};
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 45px;
    font-weight: 700;
    /* width: 400px; */
    &::after {
      content: "";
      bottom: 10px;
      right: -14px;
      height: 15px;
      width: 15px;
      border: 2px solid ${props => props.theme.accentColor};
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
