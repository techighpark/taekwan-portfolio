import styled from "styled-components";

import Layout from "../components/Layout";

const AboutContainer = styled.div`
  padding-top: 600px;
  /* border: 1px solid tomato; */
  @media screen and (max-width: 500px) {
    padding-top: 300px;
  }
`;

const FieldContainer = styled.div`
  position: absolute;
  width: 100vw;
  top: 400px;
  right: 30px;

  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 500px) {
  }
`;
const FieldText = styled.div`
  font-style: italic;
  font-size: 70px;
  font-weight: 500;
  letter-spacing: -0.1em;
  text-align: right;
  @media screen and (max-width: 500px) {
    font-size: 50px;
    font-weight: 400;
  }
`;

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <FieldContainer>
          <FieldText>About Taekwan</FieldText>
        </FieldContainer>
        I am Taekwan Park, a creative frontend engineer from Busan, Rep of
        Korea. I am Rapheal, a creative frontend engineer from Lagos, Nigeria 🇳🇬
        ,that occasionally dabbles with product design. I love functional
        interfaces that also look aesthetically pleasing. A Result-oriented
        Software Engineer with superior problem-solving and critical thinking
        skills, as well as meticulous attention to detail and methodical nature
        with over 7 years of professional experience. Skilled in handling
        problems in unique ways to develop innovative solution. On the fun side,
        i love to produce music on my spare time, digital paint, and take
        photos. Huge gym rat, and foodie. Always open to talk about Tech,
        Product design, hip-hop, classic music or anything interesting to be
        honest. Also, I'm open to work too!
      </AboutContainer>
    </Layout>
  );
};

export default About;
