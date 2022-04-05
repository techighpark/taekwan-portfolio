import styled from "styled-components";

import Layout from "../components/Layout";
import { fonts } from "../themeStyles";
import meEng from "../assets/img/meEng.JPG";
import verticalBgDog2 from "../assets/img/verticalBgDog2.JPG";
import horizontalTableWine from "../assets/img/horizontalTableWine.JPG";
import { aboutData } from "../assets/aboutData";

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <FieldContainer>
          <FieldText>About</FieldText>
        </FieldContainer>
        <AboutItemContainer>
          {/*  */}
          <AboutWrapperFirst>
            <ImageContainerFirst>
              <MeEngImg src={meEng} />
            </ImageContainerFirst>
            <KorContainerFirst>
              <KorMain>{aboutData.first.main}</KorMain>
              <KorSub>{aboutData.first.sub}</KorSub>
            </KorContainerFirst>
          </AboutWrapperFirst>
          {/*  */}
          <AboutWrapperSecond>
            <KorContainerSecond>
              <KorMain>{aboutData.second.main}</KorMain>
              <KorSub>{aboutData.second.sub}</KorSub>
            </KorContainerSecond>
            <ImageContainerSecond>
              <VerticalBgDogImg src={verticalBgDog2} />
            </ImageContainerSecond>
          </AboutWrapperSecond>
          {/*  */}
          <AboutWrapperThird>
            <ImageContainerThird>
              <HorizontalWineImg src={horizontalTableWine} />
            </ImageContainerThird>
            <KorContainerThird>
              <KorMain>{aboutData.second.main}</KorMain>
              <KorSub>{aboutData.second.sub}</KorSub>
            </KorContainerThird>
          </AboutWrapperThird>
        </AboutItemContainer>
      </AboutContainer>
    </Layout>
  );
};
const KorSub = styled.div`
  padding: 20px;
  font-size: 14px;
  font-weight: 100;
  line-height: 3;
  width: 500px;
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 400px;
  }
`;
const KorMain = styled.div`
  line-height: 2;
  padding: 40px;
  font-size: 18px;
  font-weight: 300;
  width: 430px;
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 340px;
  }
`;
const HorizontalWineImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;

const ImageContainerThird = styled.div`
  height: 100%;
  width: 40%;
  padding: 40px;
  /* border: 1px solid green; */
`;

const KorContainerThird = styled.div`
  width: 60%;
  padding: 40px;
  font-family: ${fonts.Gothic};
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  /* border: 1px solid gray; */
`;

const AboutWrapperThird = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 400px; */
  /* border: 2px solid red; */
`;

const VerticalBgDogImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 500px) {
    /* filter: grayscale(100%); */
    /* object-fit: contain; */
    opacity: 0.4;
    object-position: -50px top;
  }
`;

const ImageContainerSecond = styled.div`
  height: 100%;
  width: 30%;
  padding: 40px;
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    position: absolute;
    right: 0;
    padding: 10px;
    height: 100%;
    width: 40%;
    z-index: -1;
  }
`;
const KorContainerSecond = styled.div`
  width: 70%;
  padding: 40px;
  font-family: ${fonts.Gothic};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border: 1px solid gray; */
`;
const AboutWrapperSecond = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  /* height: 400px; */
  /* border: 2px solid red; */
  /* @media screen and (max-width: 500px) {
    flex-direction: column;
  } */
  @media screen and (max-width: 500px) {
    position: relative;
  }
`;

const MeEngImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;

const ImageContainerFirst = styled.div`
  height: 100%;
  width: 40%;
  padding: 40px;
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;
const KorContainerFirst = styled.div`
  width: 60%;
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

const AboutWrapperFirst = styled.div`
  display: flex;
  width: 100%;
  /* height: 400px; */
  /* border: 2px solid red; */
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const AboutItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 500px;
  margin-bottom: 200px;

  /* border: 1px solid white; */
`;

const FieldText = styled.div`
  font-style: italic;
  font-size: 70px;
  font-weight: 800;
  letter-spacing: -0.1em;
  padding-right: 1vw;
  background-color: black;

  border: 1px solid yellow;

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
    margin-top: 400px;
    text-align: center;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default About;
