import styled from "styled-components";

import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <GrayLine />
        <FieldContainer>
          <FieldText>About</FieldText>
        </FieldContainer>
        <Container>
          I am Taekwan Park, a creative frontend engineer from Busan, Rep of
          Korea. I am Rapheal, a creative frontend engineer from Lagos, Nigeria
          🇳🇬 ,that occasionally dabbles with product design. I love functional
          interfaces that also look aesthetically pleasing. A Result-oriented
          Software Engineer with superior problem-solving and critical thinking
          skills, as well as meticulous attention to detail and methodical
          nature with over 7 years of professional experience. Skilled in
          handling problems in unique ways to develop innovative solution. On
          the fun side, i love to produce music on my spare time, digital paint,
          and take photos. Huge gym rat, and foodie. Always open to talk about
          Tech, Product design, hip-hop, classic music or anything interesting
          to be honest. Also, I'm open to work too!
        </Container>
      </AboutContainer>
    </Layout>
  );
};

const AboutContainer = styled.div`
  position: relative;
  padding-top: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  /* border: 1px solid tomato; */
  @media screen and (max-width: 500px) {
    padding-top: 70vh;
  }
`;
const GrayLine = styled.hr`
  position: absolute;
  height: 1px;
  width: 100%;
  top: 54vh;
  border-width: 0;
  background-color: gray;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const FieldContainer = styled.div`
  position: absolute;
  top: 50vh;
  background-color: black;
  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 500px) {
    top: 70vh;
    width: 70vw;
    right: 3vw;
  }
`;
const FieldText = styled.div`
  font-style: italic;
  font-size: 70px;
  font-weight: 800;
  letter-spacing: -0.1em;

  @media screen and (max-width: 500px) {
    font-size: 50px;
    font-weight: 800;
  }
`;
const Container = styled.div``;
export default About;
