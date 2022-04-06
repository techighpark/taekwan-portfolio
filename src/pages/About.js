import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import { fonts } from "../themeStyles";
import meEng from "../assets/img/meEng.JPG";
import verticalBgDog2 from "../assets/img/verticalBgDog2.JPG";
import horizontalTableWine from "../assets/img/horizontalTableWine.JPG";
import { aboutData } from "../assets/aboutData";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>TAE KWAN | ABOUT</title>
      </Helmet>
      <AboutContainer>
        <FieldContainer>
          <FieldText>ABOUT</FieldText>
        </FieldContainer>
        <AboutItemContainer>
          {/*  */}
          <AboutItems>
            <ImageContainer>
              <MeEngImg src={meEng} />
            </ImageContainer>
            <TextContainer>
              <TextMain>{aboutData.first.main}</TextMain>
              <TextSub>{aboutData.first.sub}</TextSub>
            </TextContainer>
          </AboutItems>
          {/*  */}
          <AboutItems>
            <TextContainer>
              <TextMain>{aboutData.second.main}</TextMain>
              <TextSub>{aboutData.second.sub}</TextSub>
            </TextContainer>
          </AboutItems>
          {/*  */}
          <AboutItems>
            <TextContainer>
              <TextMain>Education</TextMain>
              <TextSub>{aboutData.education.bachelor}</TextSub>
              <TextSub>{aboutData.education.master}</TextSub>
            </TextContainer>
          </AboutItems>
        </AboutItemContainer>
      </AboutContainer>
    </Layout>
  );
};

const MeEngImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;

const TextSub = styled.div`
  padding: 20px;
  width: 600px;
  font-size: 12px;
  font-weight: 100;
  line-height: 3;
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 400px;
  }
`;
const TextMain = styled.div`
  padding: 40px;
  width: 600px;
  font-size: 16px;
  font-weight: 300;
  line-height: 2;
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 340px;
  }
`;

const TextContainer = styled.div`
  /* width: 60vw; */
  height: 40vw;
  padding: 40px;
  font-family: ${fonts.Gothic};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border: 1px solid gray; */
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  padding: 100px;
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 20px;
  }
`;
const AboutItems = styled.div`
  display: flex;
  margin-bottom: 50px;
  /* border: 1px solid white; */
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const AboutItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 500px;
  margin-bottom: 200px;

  /* border: 1px solid white; */
`;

const FieldText = styled.div`
  /* font-style: italic; */
  font-size: 70px;
  font-weight: 100;
  letter-spacing: 0.5em;
  /* background-color: black; */

  /* border: 1px solid yellow; */

  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
`;
const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 400px;
  display: flex;
  justify-content: center;

  /* border: 0.5px solid yellow; */

  @media screen and (max-width: 500px) {
    margin-top: 275px;

    text-align: center;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default About;
