import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import high_booker from "../img/high-booker.JPG";
import high_booker_databse from "../img/high-booker-database.png";

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
const Separator = styled.div`
  width: 80%;
  border-bottom: 0.5px solid white;
  margin-bottom: 2vh;
`;

const Project = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 50vh;
`;
const ProjectTitle = styled.div`
  position: absolute;
  font-size: 70px;
  font-weight: 300;
  z-index: 1;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

const ProjectStack = styled.div`
  height: 100%;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StackText = styled(Text)`
  font-weight: 500;
  padding: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: -1vh;
  left: 0;
  width: 0vw;
  height: 62vh;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: 0.5s ease;
  border-radius: 10px;
`;

const ProjectContents = styled.div`
  position: relative;
  top: 20vh;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  &:hover {
    ${Overlay} {
      width: 98vw;
      left: 0;
    }
  }
`;

const ProjectPhoto = styled.img`
  max-width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

const HighBookerBackTitle = styled(ProjectTitle)`
  width: 100vw;
  text-align: center;
`;

const HighBookerBackContents = styled.div`
  position: relative;
  top: 20vh;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  &:hover {
    ${Overlay} {
      width: 98vw;
      left: 0;
    }
  }
`;

const HighBookerBackPhoto = styled.img`
  max-width: 100%;
  height: 60vh;
  object-fit: contain;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    height: 300px;
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
      <Separator />
      <ProjectContainer>
        <Project>
          <ProjectTitle>HIGH-BOOKER: Web</ProjectTitle>
          <ProjectContents>
            <Link to={"/high-booker"}>
              <ProjectPhoto src={high_booker} />
            </Link>
            <Overlay>
              <ProjectStack>
                <StackText>React JS</StackText>
                <StackText>ApolloGraphql</StackText>
                <StackText>React Hook Form</StackText>
                <StackText>Styled Components</StackText>
                <StackText>Netlify</StackText>
              </ProjectStack>
            </Overlay>
          </ProjectContents>
        </Project>
        <Project>
          <HighBookerBackTitle>HIGH-BOOKER: Database</HighBookerBackTitle>
          <HighBookerBackContents>
            <Link to={"/high-booker"}>
              <HighBookerBackPhoto src={high_booker_databse} />
            </Link>
          </HighBookerBackContents>
        </Project>
      </ProjectContainer>
    </Layout>
  );
};

export default Home;
