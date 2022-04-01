import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import high_booker from "../img/high-booker.JPG";

const ProjectContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 10px;
`;
const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 600px;
  margin-left: 300px;
  margin-bottom: 150px;
`;
const Row = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Text = styled.div`
  margin: 10px;
  font-weight: 200;
  font-size: 14px;
`;
const Separator = styled.div`
  width: 80%;
  border-bottom: 0.5px solid white;
  margin-bottom: 30px;
`;
const Project = styled.div`
  width: 100%;
`;
const ProjectTitle = styled.div`
  font-size: 70px;
  font-weight: 500;
  margin-bottom: 70px;
`;
const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProjectPhoto = styled.img`
  max-width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  :hover {
    opacity: 0.3;
  }
`;

const BlankCover = styled.div`
  width: 50%;
  height: 500px;
  background-color: gray;
  margin: 5px 0px;
  border-radius: 10px;
`;

const Home = () => {
  return (
    <Layout>
      <StackContainer>
        <Row>
          <Text>HTML</Text>
          <Text>CSS</Text>
          <Text>JavaScript</Text>
          <Text>TypeScript</Text>
          <Text>Node JS</Text>
          <Text>React JS</Text>
          <Text>React Native</Text>
        </Row>
        <Row>
          <Text>MySQL</Text>
          <Text>Postgresql</Text>
          <Text>Rest API</Text>
          <Text>GraphQL</Text>
          <Text>Prisma</Text>
          <Text>ApolloGraphql</Text>
          <Text>Nest JS</Text>
          <Text>Web Sockets</Text>
          <Text>WebRTC</Text>
          <Text>AWS S3</Text>
        </Row>
      </StackContainer>
      <ProjectContainer>
        <Separator />
        <Project>
          <ProjectTitle>HIGH-BOOKER</ProjectTitle>
          <PhotoContainer>
            <StackContainer>
              <div>abcdef</div>
              <div>abcdef</div>
              <div>abcdef</div>
              <div>abcdef</div>
            </StackContainer>
            <ProjectPhoto src={high_booker} />
          </PhotoContainer>
        </Project>
      </ProjectContainer>
    </Layout>
  );
};

export default Home;
