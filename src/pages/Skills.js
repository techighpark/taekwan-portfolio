import styled from "styled-components";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { keyframes } from "styled-components";
import {
  backEndStacks,
  deploymentStacks,
  frontEndStacks,
  versionStacks,
} from "../assets/stackdata";

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
  const getDeploySkillColor = skillLv => {
    if (skillLv === "Beginner") {
      return "#fdd5b7";
    } else if (skillLv === "Intermediate") {
      return "#fcba87";
    } else if (skillLv === "Advanced") {
      return "#fb9f57";
    } else if (skillLv === "Professional") {
      return "#fa8327";
    } else if (skillLv === "Master") {
      return "#fa7610";
    }
  };
  const getVersionSkillColor = skillLv => {
    if (skillLv === "Beginner") {
      return "#f4cce3";
    } else if (skillLv === "Intermediate") {
      return "#e999c8";
    } else if (skillLv === "Advanced") {
      return "#de66ac";
    } else if (skillLv === "Professional") {
      return "#d33291";
    } else if (skillLv === "Master") {
      return "#c90076";
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
            <EndContainer>
              <EndWrapper>
                <EndTextWrapper>
                  <EndText>Deployment</EndText>
                  <EndLvContainer>
                    <Deployment />
                  </EndLvContainer>
                </EndTextWrapper>
              </EndWrapper>
              <SkillLvRefContainer>
                {lvRef.map(ref => (
                  <SkillLvRef key={ref} skillLv={getDeploySkillColor(ref)}>
                    {ref}
                  </SkillLvRef>
                ))}
              </SkillLvRefContainer>
              {deploymentStacks.map(stacks => (
                <StackContainer key={stacks.stack}>
                  <StackWrapper>
                    <StackIcon>{stacks.icon}</StackIcon>
                    <StackText>{stacks.stack}</StackText>
                  </StackWrapper>
                  <StackSkillLv skillLv={getDeploySkillColor(stacks.skillLv)}>
                    {stacks.skillLv}
                  </StackSkillLv>
                </StackContainer>
              ))}
            </EndContainer>
            <EndContainer>
              <EndWrapper>
                <EndTextWrapper>
                  <EndText>Version Control</EndText>
                  <EndLvContainer>
                    <VersionControl />
                  </EndLvContainer>
                </EndTextWrapper>
              </EndWrapper>
              <SkillLvRefContainer>
                {lvRef.map(ref => (
                  <SkillLvRef key={ref} skillLv={getVersionSkillColor(ref)}>
                    {ref}
                  </SkillLvRef>
                ))}
              </SkillLvRefContainer>
              {versionStacks.map(stacks => (
                <StackContainer key={stacks.stack}>
                  <StackWrapper>
                    <StackIcon>{stacks.icon}</StackIcon>
                    <StackText>{stacks.stack}</StackText>
                  </StackWrapper>
                  <StackSkillLv skillLv={getVersionSkillColor(stacks.skillLv)}>
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
  margin: 10px 5px 10px 5px;
  font-weight: 300;
  font-size: 10px;
  text-align: center;
  border-radius: 10px;
  padding: 5px 0px;
  border: 1px solid ${props => props.skillLv};
  /* border: 1px solid white; */

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

const VersionControlCharge = keyframes`
0%{  
    width:0%;
}
55%{
    width:0%;
}
100%{
    width:40%;
}`;
const DeploymentCharge = keyframes`
0%{  
    width:0%;
}
40%{
    width:0%;
}
100%{
    width:40%;
}`;
const BackLvCharge = keyframes`
0%{  
    width:0%;
}
25%{
    width:0%;
}
100%{
    width:40%;
}`;
const FrontLvCharge = keyframes`
0%{  
    width:0%;
}
100%{
    width:65%;
}`;
const VersionControl = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${props => props.theme.fouAccentColor};
  animation: ${VersionControlCharge} 2.5s ease-in 1;
`;
const Deployment = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${props => props.theme.thiAccentColor};
  animation: ${DeploymentCharge} 2.5s ease-in 1;
`;
const BackendLv = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${props => props.theme.secAccentColor};
  animation: ${BackLvCharge} 2.5s ease-in 1;
`;

const FrontendLv = styled.div`
  width: 65%;
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
  width: 200px;
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
  /* width: 50%; */
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid green; */
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0px;
  }
`;
const FrontBackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 150px;
  /* justify-content: center; */
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 120px;
  }
`;

const BodyContainer = styled.div`
  width: 100%;
  margin-top: 300px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
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
