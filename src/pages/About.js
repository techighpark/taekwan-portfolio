import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import { fonts } from "../themeStyles";
import meCoffee from "../assets/img/meCoffee.JPG";
import { aboutData } from "../assets/aboutData";
import TopArrow from "../components/TopArrow";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>TAE KWAN | ABOUT</title>
      </Helmet>
      <AboutContainer>
        <FieldContainer>
          <FieldText>TUOBA</FieldText>
        </FieldContainer>
        <AboutItemContainer>
          <AboutPhotoItems>
            <ImageContainer>
              <MeEngImg src={meCoffee} />
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
  width: 600px;
  font-size: 14px;
  font-weight: 100;
  line-height: 2.5;
  color: ${props => props.theme.lightWhiteColor};
  /* border: 1px solid yellow; */
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const TextMain = styled.div`
  padding: 20px 40px;
  width: 600px;
  font-size: 16px;
  font-weight: 300;
  line-height: 2;
  color: ${props => props.theme.whiteColor};

  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 100%;
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
  filter: brightness(50%) contrast(120%) grayscale(30%) saturate(90%) sepia(20%);
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
  font-weight: 100;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 2000px;

  /* border: 1px solid orange; */
`;

export default About;
