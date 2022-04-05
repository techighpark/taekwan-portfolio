import styled from "styled-components";

import Layout from "../components/Layout";
import { fonts } from "../themeStyles";
// import ymImg from "../img/IMG_0673.JPG";
import myImg from "../img/IMG_8999.JPG";

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <FieldContainer>
          <FieldText>About</FieldText>
        </FieldContainer>
        <AboutItemContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <KorContainer>
            <KorMain>
              프론트 엔지니어로서 새로운 발걸음을 내딛고 있는 박태관 입니다.
            </KorMain>
            <KorSub>
              브랜드 기획을 담당했던 과거의 경험은 고객과 잠재적 고객에 대해
              한층 더 이해할수 있는 안목과 새로운 관점에서 바라볼 수 있도록
              시야를 넓혀주었습니다. 뿐만 아니라 다른 직원들과 공감하고 의사
              소통을 통해 협업하는 능력을 크게 향상 시켜주었습니다.
            </KorSub>
          </KorContainer>
        </AboutItemContainer>
        <AboutItemContainer>
          <ImageContainer>
            <SecondImage />
            <BgImage />
          </ImageContainer>
          <KorContainer>
            <KorMain>
              브랜드를 디자인하며 수많은 문제를 해결했고,
              <br />
              이를 통해 창의성과 공감 능력이 향상 되었습니다.
            </KorMain>
            <KorSub>
              또한 각 팀의 리더가 브랜드의 전체적인 프로세스를 이해할 수 있도록
              노력하였습니다. 브랜드가 성장하는 것과 동시에
            </KorSub>
          </KorContainer>
        </AboutItemContainer>
      </AboutContainer>
    </Layout>
  );
};
const KorSub = styled.div`
  padding: 20px;
  font-size: 14px;
  font-weight: 100;
  line-height: 2.5;
`;
const KorMain = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: 200;
`;
const KorContainer = styled.div`
  width: 50%;
  font-family: ${fonts.GothicA1};
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* background-color: rgba(255, 255, 255, 0.1); */
`;

const SecondImage = styled.img`
  height: 100%;
`;
SecondImage.defaultProps = {
  src: myImg,
};

const BgImage = styled.img`
  position: absolute;
  height: 200%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  filter: grayscale(100%) brightness(40%) blur(2px);
`;
BgImage.defaultProps = {
  src: myImg,
};
const Image = styled.img`
  height: 150%;
  transform: translateY(-20%);

  /* filter: grayscale(100%) brightness(70%); */
`;
Image.defaultProps = {
  src: myImg,
};
const ImageContainer = styled.div`
  height: 100%;
  position: relative;
  /* border: 1px solid tomato; */
`;

const AboutItemContainer = styled.div`
  margin-top: 200px;
  /* margin-bottom: 500px; */
  /* width: 100%; */
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: rgba(255, 255, 255, 0.1); */

  /* border: 1px solid tomato; */
`;

const FieldText = styled.div`
  font-style: italic;
  font-size: 70px;
  font-weight: 800;
  letter-spacing: -0.1em;
  padding-right: 1vw;
  background-color: black;

  /* border: 1px solid yellowgreen; */

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

  /* ::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 0.5px;
    z-index: -1;
    background-color: gray;
  } */

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
