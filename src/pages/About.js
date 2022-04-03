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
        <AboutWrapper>
          <KorContainer>
            <KorMain>
              저는 프론트 엔지니어로서 새로운 발걸음을 내딛고 있는 중 입니다.
            </KorMain>
            <KorSub>
              브랜드 기획을 담당했던 과거의 경험은 고객과 잠재적 고객에 대해
              한층 더 이해할수 있는 안목과 새로운 관점에서 바라볼 수 있도록
              시야를 넓혀주었습니다. 뿐만 아니라 다른 직원들과 공감하고 의사
              소통을 통해 협업하는 능력을 크게 향상 시켜주었습니다.
            </KorSub>
          </KorContainer>
        </AboutWrapper>
      </AboutContainer>
    </Layout>
  );
};
const KorSub = styled.div`
  font-size: 16px;
  font-weight: 200;
  line-height: 2.5;
`;
const KorMain = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const KorContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 40vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50%;

  background-color: rgba(255, 255, 255, 0.1);
`;
const AboutWrapper = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  padding-bottom: 400px;
  /* height: 100vh; */
  border: 1px solid tomato;
`;

const AboutContainer = styled.div`
  position: relative;
  padding-top: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  right: 0;
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

export default About;
