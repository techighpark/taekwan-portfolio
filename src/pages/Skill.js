import styled from "styled-components";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { keyframes } from "styled-components";
import { backEndStacks, frontEndStacks } from "../assets/stackdata";

const Skill = () => {
  const getFrontSkillColor = skillLv => {
    if (skillLv === "Beginner") {
      return "#e0f4cc";
    } else if (skillLv === "Intermediate") {
      return "#c1ea99";
    } else if (skillLv === "Advanced") {
      return "#a3e066";
    } else if (skillLv === "Professional") {
      return "#84d632";
    } else if (skillLv === "Master") {
      return "#66cc00";
    }
  };
  const getBackSkillColor = skillLv => {
    if (skillLv === "Beginner") {
      return "#f1edff";
    } else if (skillLv === "Intermediate") {
      return "#c9b9ff";
    } else if (skillLv === "Advanced") {
      return "#ae97ff";
    } else if (skillLv === "Professional") {
      return "#9374ff";
    } else if (skillLv === "Master") {
      return "#7852ff";
    }
  };

  const lvRef = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Professional",
    "Master",
  ];
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
          <FrontBackContainer>
            <EndContainer>
              <EndWrapper>
                <EndTextWrapper>
                  <EndText>Front-end</EndText>
                  <EndLvContainer>
                    <FrontendLv />
                  </EndLvContainer>
                </EndTextWrapper>
              </EndWrapper>
              <SkillLvRefContainer>
                {lvRef.map(ref => (
                  <SkillLvRef key={ref} skillLv={getFrontSkillColor(ref)}>
                    {ref}
                  </SkillLvRef>
                ))}
              </SkillLvRefContainer>
              {frontEndStacks.map(stacks => (
                <StackContainer key={stacks.stack}>
                  <StackWrapper>
                    <StackIcon>{stacks.icon}</StackIcon>
                    <StackText>{stacks.stack}</StackText>
                  </StackWrapper>
                  <StackSkillLv skillLv={getFrontSkillColor(stacks.skillLv)}>
                    {stacks.skillLv}
                  </StackSkillLv>
                </StackContainer>
              ))}
            </EndContainer>
            <EndContainer>
              <EndWrapper>
                <EndTextWrapper>
                  <EndText>Back-end</EndText>
                  <EndLvContainer>
                    <BackendLv />
                  </EndLvContainer>
                </EndTextWrapper>
              </EndWrapper>
              <SkillLvRefContainer>
                {lvRef.map(ref => (
                  <SkillLvRef key={ref} skillLv={getBackSkillColor(ref)}>
                    {ref}
                  </SkillLvRef>
                ))}
              </SkillLvRefContainer>
              {backEndStacks.map(stacks => (
                <StackContainer key={stacks.stack}>
                  <StackWrapper>
                    <StackIcon>{stacks.icon}</StackIcon>
                    <StackText>{stacks.stack}</StackText>
                  </StackWrapper>
                  <StackSkillLv skillLv={getBackSkillColor(stacks.skillLv)}>
                    {stacks.skillLv}
                  </StackSkillLv>
                </StackContainer>
              ))}
            </EndContainer>
          </FrontBackContainer>
        </BodyContainer>
      </AboutContainer>
    </Layout>
  );
};
const SkillLvRef = styled.div`
  width: 80px;
  margin: 50px 5px 50px 5px;
  font-weight: 300;
  font-size: 10px;
  text-align: center;
  border-radius: 10px;
  padding: 5px 0px;
  border: 1px solid ${props => props.skillLv};
  @media screen and (max-width: 500px) {
    margin: 5px 0px;
  }
`;
const SkillLvRefContainer = styled.div`
  display: flex;
  /* border: 1px solid white; */
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const StackSkillLv = styled.div`
  width: 100px;
  font-weight: 500;
  font-size: 10px;
  /* color: ${props => props.theme.bgColor}; */
  text-align: center;
  border-radius: 10px;
  padding: 5px 0px;
  border: 1px solid ${props => props.skillLv};
  /* background-color: ${props => props.skillLv}; */
  @media screen and (max-width: 500px) {
  }
`;

const StackText = styled.div`
  width: 150px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 14px;

  /* border: 1px solid white; */
  @media screen and (max-width: 500px) {
    width: 120px;
    margin-left: 10px;
    font-weight: 500;
    font-size: 12px;
  }
`;

const StackIcon = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
`;
const StackWrapper = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid white; */
`;

const StackContainer = styled.div`
  width: 460px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border: 1px solid red; */
  @media screen and (max-width: 500px) {
    width: 320px;
    /* justify-content: center; */
  }
`;

const BackLvCharge = keyframes`
0%{  
    width:0%;
}
25%{
    width:0%;
}
100%{
    width:30%;
}`;
const FrontLvCharge = keyframes`
0%{  
    width:0%;
}
100%{
    width:50%;
}`;
const BackendLv = styled.div`
  width: 30%;
  height: 2px;
  background-color: ${props => props.theme.secAccentColor};
  animation: ${BackLvCharge} 2.5s ease-in 1;
`;

const FrontendLv = styled.div`
  width: 50%;
  height: 2px;
  background-color: ${props => props.theme.firAccentColor};
  animation: ${FrontLvCharge} 2s ease-in 1;
`;
const EndLvContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 500px;
  display: flex;
  background-color: ${props => props.theme.darkLine};

  /* border: 1px solid blue; */
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;
const EndText = styled.div`
  width: 150px;
  font-weight: 500;
  font-size: 20px;
  /* border: 1px solid yellow; */
`;
const EndTextWrapper = styled.div``;

const EndWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid yellow; */

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;
const EndContainer = styled.div`
  width: 50%;
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0px 10px 200px 10px;
  }
`;
const FrontBackContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BodyContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  margin-bottom: 200px;

  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 300px;
    margin-bottom: 0px;
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
  height: 200vh;
  max-width: 2000px;

  @media screen and (max-width: 500px) {
    height: 100%;
  }

  /* border: 1px solid orange; */
`;

export default Skill;
