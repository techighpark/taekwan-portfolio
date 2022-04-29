import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import { fonts } from "../themeStyles";
// import meCoffee from "../assets/img/meCoffee.JPG";
import meEng from "../assets/img/meEng.JPG";
import { aboutData } from "../assets/aboutData";
import TopArrow from "../components/TopArrow";
import ScrollDown from "../components/ScrollDown";
// import { stacks } from "../assets/stackdata";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>ABOUT | TAE KWAN</title>
      </Helmet>

      <AboutContainer>
        <FieldContainer>
          <FieldText>TUOBA</FieldText>
        </FieldContainer>
        <ScrollDown />
        <AboutItemContainer>
          <AboutPhotoItems>
            <ImageContainer>
              <MeEngImg src={meEng} />
            </ImageContainer>
          </AboutPhotoItems>
          {aboutData.map((data, index) => (
            <AboutItems key={index}>
              <TextContainer>
                <TextMain>{data.main}</TextMain>
                <TextSub>{data.sub}</TextSub>
              </TextContainer>
            </AboutItems>
          ))}
        </AboutItemContainer>
      </AboutContainer>
      <TopArrow />
    </Layout>
  );
};

const TextSub = styled.div`
  padding: 20px;
  width: 800px;
  font-size: 14px;
  font-weight: 300;
  line-height: 2.5;
  color: ${props => props.theme.lightWhiteColor};
  /* border: 1px solid yellow; */

  @media screen and (max-width: 500px) {
    width: 100%;
    font-weight: 300;
  }
`;
const TextMain = styled.div`
  padding: 20px 50px;
  width: 800px;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: ${props => props.theme.whiteColor};
  opacity: 0.9;
  letter-spacing: 0.2em;

  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 100%;
    font-weight: 600;
    letter-spacing: 0.1em;
  }
`;

const TextContainer = styled.div`
  /* width: 400px; */
  /* height: 400px; */
  padding: 40px;
  font-family: ${fonts.Gothic};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  /* background-color: #181818;
  border-radius: 30px; */

  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 20px;
  }
`;

const MeEngImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(80%) contrast(110%) grayscale(30%) saturate(110%)
    sepia(10%);
  /* filter: grayscale(100%); */
`;

const ImageContainer = styled.div`
  width: 700px;
  height: 350px;
  margin-bottom: 150px;
  position: relative;
  ::after {
    content: "TAEKWAN";
    position: absolute;
    color: ${props => props.theme.lightAccentColor};
    font-weight: 800;
    left: -20px;
    top: 30px;
    /* z-index: 30; */
  }
  /* padding: 50px; */
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 350px;
    height: 200px;
    ::after {
      top: 0px;
      transform: rotate(270deg);
    }
    /* padding: 20px; */
  }
`;

const AboutItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  @media screen and (max-width: 500px) {
    /* width: 400px; */
  }
`;
const AboutPhotoItems = styled(AboutItems)`
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const AboutItemContainer = styled.div`
  width: 100%;
  margin-top: 300px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr;
  /* row-gap: 50px; */

  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    /* width: 100%; */
    width: 100%;
    margin-top: 300px;
    margin-bottom: 300px;
    /* row-gap: 500px; */
  }
`;

const FieldText = styled.div`
  /* font-style: italic; */
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 0.5em;
  unicode-bidi: bidi-override;
  direction: rtl;
  letter-spacing: 0.3em;
  ::first-letter {
    letter-spacing: 0em;
  }
  /* background-color: black; */

  /* border: 1px solid yellow; */

  @media screen and (max-width: 500px) {
    font-size: 50px;
    font-weight: 700;
  }
`;
const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 300px;
  display: flex;
  justify-content: center;

  /* border: 0.5px solid yellow; */

  @media screen and (max-width: 500px) {
    margin-top: 100px;
    text-align: center;
  }
`;

const AboutContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 2000px;

  /* border: 1px solid orange; */
`;

export default About;
