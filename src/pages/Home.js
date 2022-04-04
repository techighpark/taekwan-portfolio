import styled from "styled-components";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <MainContainer>
        <FieldContainer>
          <FieldText>Front-Engineer</FieldText>
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
            <GrayLine />
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
  /* z-index: -1; */

  /* border: 3px solid tomato; */
`;
const FieldContainer = styled.div`
  margin-top: 30%;

  /* border: 0.5px solid yellow; */

  @media screen and (max-width: 500px) {
    margin-top: 400px;
    text-align: center;
  }
`;
const FieldText = styled.span`
  position: relative;
  font-style: italic;
  font-size: 140px;
  font-weight: 700;
  letter-spacing: -0.1em;

  /* border: 1px solid yellowgreen; */

  &::after {
    content: "";
    position: absolute;
    bottom: 25px;
    right: -25px;
    height: 25px;
    width: 25px;
    background-color: ${props => props.theme.accentColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 50px;
    &::after {
      content: "";
      bottom: 10px;
      right: -10px;
      height: 10px;
      width: 10px;
    }
  }
`;

const GrayLine = styled.hr`
  height: 1px;
  background-color: gray;
  width: 100%;
  border-width: 0;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MainStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 15%;
  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    padding-top: 50px;
    padding-bottom: 100px;
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

  /* border: 1px solid burlywood; */
  @media screen and (max-width: 500px) {
    padding-left: 0px;
    padding-bottom: 10px;
    font-size: 12px;
    font-weight: 300;
  }
`;

export default Home;
