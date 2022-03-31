import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 200px;
  right: -100px;
  width: 200px;
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 100;
  margin: 10px;
`;

const Home = () => {
  return (
    <Layout>
      <Container>
        <div>
          <img
            src="../high-booker.JPG"
            width="100"
            height="100"
            alt={"high-booker"}
          />
          High-Booker
        </div>
        <Wrapper>
          <div>Front-end</div>
          <Text>HTML</Text>
          <Text>CSS</Text>
          <Text>JavaScript</Text>
          <Text>TypeScript</Text>
          <Text>Node JS</Text>
          <Text>React JS</Text>
          <Text>React Native</Text>
          <div>Back-end</div>
          <Text>MySQL</Text>
          <Text>Postgresql</Text>
          <Text>Rest API</Text>
          <Text>GraphQL</Text>
          <Text>Prisma</Text>
          <Text>ApolloGraphql</Text>
          <Text>Nest JS</Text>
          <Text>Web Sockets</Text>
          <Text>WebRTC</Text>
          <div>Cloud</div>
          <Text>AWS S3</Text>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Home;
