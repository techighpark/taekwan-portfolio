import styled from "styled-components";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { stacks } from "../assets/stackdata";

const Skill = () => {
  let numArray = [];
  for (let i = 1; i < 6; i++) {
    numArray.push(i);
  }

  return (
    <Layout>
      <Helmet>
        <title>SKILLS | TAE KWAN</title>
      </Helmet>
      <AboutContainer>
        <FieldContainer>
          <FieldText>SLLIKS</FieldText>
        </FieldContainer>
        <BodyContainer>
          <MainContainer>
            <SkillTextContainer>
              <SkillText>Front-end</SkillText>
            </SkillTextContainer>
            <SkillTextContainer>
              <SkillText>Back-end</SkillText>
            </SkillTextContainer>
            <MySkillLv />
            <MySkillLv />
            <SkillLv />
            <SkillLv />
          </MainContainer>
          <AboutItems>
            <StackContainer>
              {numArray.map(num => (
                <StackWrapper key={num}>
                  <StackLv>
                    <StackSub>{num}</StackSub>
                  </StackLv>
                </StackWrapper>
              ))}
              {stacks.map(stack => (
                <StackWrapper key={stack}>
                  <StackSub>{stack}</StackSub>
                </StackWrapper>
              ))}
            </StackContainer>
          </AboutItems>
        </BodyContainer>
      </AboutContainer>
    </Layout>
  );
};

const StackSub = styled.span``;
const StackLv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const StackWrapper = styled.div`
  height: 30px;
  width: 100px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid orange; */
`;
const StackContainer = styled.div`
  padding: 200px 50px 100px 50px;
  /* margin-bottom: 100px; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 20px;
  /* border: 1px solid green; */
  ${StackWrapper}:nth-child(1), ${StackWrapper}:nth-child(2),${StackWrapper}:nth-child(3),${StackWrapper}:nth-child(4),${StackWrapper}:nth-child(5) {
    div {
      width: 30px;
      height: 30px;
      /* color: hsl(317 100% 54%); */
      border: hsl(317 100% 54%) 3px solid;
      background-color: transparent;
      border-radius: 15px;
      /* text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor; */
      box-shadow: inset 0 0 0.5em 0 hsl(317 100% 54%),
        0 0 0.5em 0 hsl(317 100% 54%);
      transition: all 0.5s;
    }
  }
  ${StackWrapper}:nth-child(6) {
    grid-row: 2;
    grid-column: 3;
  }
  ${StackWrapper}:nth-child(7) {
    grid-row: 3;
    grid-column: 3;
  }
  ${StackWrapper}:nth-child(8) {
    grid-row: 4;
    grid-column: 3;
  }
  ${StackWrapper}:nth-child(9) {
    grid-row: 2;
    grid-column: 1;
  }
  ${StackWrapper}:nth-child(10) {
    grid-row: 2;
    grid-column: 2;
  }
  ${StackWrapper}:nth-child(11) {
    grid-row: 5;
    grid-column: 3;
  }
  ${StackWrapper}:nth-child(12) {
    grid-row: 3;
    grid-column: 1;
  }
  ${StackWrapper}:nth-child(13) {
    grid-row: 4;
    grid-column: 1;
  }
  ${StackWrapper}:nth-child(14) {
    grid-row: 5;
    grid-column: 1;
  }
  ${StackWrapper}:nth-child(15) {
    grid-row: 6;
    grid-column: 3;
  }
  ${StackWrapper}:nth-child(16) {
    grid-row: 3;
    grid-column: 2;
  }
  ${StackWrapper}:nth-child(17) {
    grid-row: 6;
    grid-column: 1;
  }
  ${StackWrapper}:nth-child(18) {
    grid-row: 7;
    grid-column: 1;
  }
  ${StackWrapper}:nth-child(19) {
    grid-row: 4;
    grid-column: 2;
  }
  ${StackWrapper}:nth-child(20) {
    grid-row: 5;
    grid-column: 2;
  }
  ${StackWrapper}:nth-child(21) {
    grid-row: 8;
    grid-column: 1;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
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

const MySkillLv = styled.div`
  background-color: ${props => props.theme.lightAccentColor};
`;
const SkillLv = styled.div`
  background-color: ${props => props.theme.darkLine};

  /* border: 1px solid red; */
`;
const SkillText = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
const SkillTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(22, 1fr);
  grid-template-rows: 50px 3px;
  padding: 0 100px 50px 100px;

  div:nth-child(1) {
    grid-column: 1 / 11;
    grid-row: 1;
  }
  div:nth-child(2) {
    grid-column: 13 / 23;
    grid-row: 1;
  }
  div:nth-child(3) {
    grid-column: 1 / 6;
    grid-row: 2;
  }
  div:nth-child(5) {
    grid-column: 6 / 11;
    grid-row: 2;
  }
  div:nth-child(4) {
    grid-column: 13 / 16;
    grid-row: 2;
  }
  div:nth-child(6) {
    grid-column: 16 / 23;
    grid-row: 2;
  }
  @media and screen (max-width: 500px) {
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 50px 3px 50px 3px;
  }
`;

const BodyContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr;
  /* row-gap: 50px; */

  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 2000px;

  /* border: 1px solid orange; */
`;

export default Skill;
