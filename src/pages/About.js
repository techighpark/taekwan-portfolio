import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import { fonts } from "../themeStyles";
// import meCoffee from "../assets/img/meCoffee.JPG";
import meEng from "../assets/img/meEng.JPG";
import { aboutData } from "../assets/aboutData";
import TopArrow from "../components/TopArrow";
import ScrollDown from "../components/ScrollDown";
import { GithubIcon } from "../assets/Icons";
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
            <a
              href={"https://github.com/techighpark"}
              target="_blank"
              rel="noreferrer"
            >
              <GithubContainer>
                <GithubIcon />
                <GithubText>My Github</GithubText>
              </GithubContainer>
            </a>
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

const GithubContainer = styled.div`
  border: 1px solid ${props => props.theme.fontColor};
  color: ${props => props.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: 500ms;
  margin-top: 30px;
  width: max-content;

  :hover {
    background-color: ${props => props.theme.fontColor};
    color: ${props => props.theme.bgColor};
  }
  @media screen and (max-width: 500px) {
    margin-top: 15px;
    width: max-content;
  }
`;
const GithubText = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-left: 5px;
  @media screen and (max-width: 500px) {
    /* display: none; */
  }
`;

const TextSub = styled.div`
  padding: 10px;
  /* width: 800px; */
  font-size: 14px;
  font-weight: 300;
  line-height: 2.5;
  color: ${props => props.theme.lightWhiteColor};

  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 12px;
  }
`;
const TextMain = styled.div`
  padding: 30px 50px;
  /* width: 800px; */
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: ${props => props.theme.whiteColor};
  opacity: 0.9;
  letter-spacing: 0.2em;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 0px 20px;
    width: 100%;
    letter-spacing: 0.1em;
  }
`;

const TextContainer = styled.div`
  padding: 40px;
  font-family: ${fonts.Gothic};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 100px;
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: 0px 0px;
  }
`;

const MeEngImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: brightness(80%) contrast(110%) grayscale(30%) saturate(110%)
    sepia(10%);
`;

const ImageContainer = styled.div`
  width: 700px;
  height: 350px;
  position: relative;
  transition: 500ms;

  ::after {
    content: "TAEKWAN";
    position: absolute;
    color: ${props => props.theme.lightAccentColor};
    font-weight: 800;
    left: -20px;
    top: 30px;
  }
  @media screen and (max-width: 1000px) {
    width: 600px;
    height: 300px;
    ::after {
      top: 0px;
      transform: rotate(270deg);
    }
  }
  @media screen and (max-width: 700px) {
    width: 450px;
    height: 250px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 200px;
    ::after {
      top: 0px;
      transform: rotate(270deg);
    }
  }
`;

const AboutItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutPhotoItems = styled(AboutItems)`
  flex-direction: column-reverse;
  width: 100%;
  align-items: flex-end;
  justify-content: end;
  margin-bottom: 150px;
`;

const AboutItemContainer = styled.div`
  width: 100%;
  margin-top: 300px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  max-width: 1000px;
  @media screen and (max-width: 1000px) {
    max-width: 800px;
  }
  @media screen and (max-width: 700px) {
    max-width: 600px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 300px;
    margin-bottom: 300px;
  }
`;

const FieldText = styled.div`
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 0.5em;
  unicode-bidi: bidi-override;
  direction: rtl;
  letter-spacing: 0.3em;
  ::first-letter {
    letter-spacing: 0em;
  }

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

  @media screen and (max-width: 500px) {
    margin-top: 300px;
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
`;

export default About;
