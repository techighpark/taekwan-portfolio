import styled from "styled-components";
import high_booker from "../../img/high-booker.JPG";
import high_booker1 from "../../img/high-booker-web-1.png";
import high_booker2 from "../../img/high-booker-web-2.png";
import high_booker3 from "../../img/high-booker-web-3.png";
import {
  Contents,
  Overlay,
  Photo,
  PhotoContainer,
  Project,
  Stacks,
  StackText,
  Title,
} from "../ProjectStyles";

const SProject = styled(Project)``;

const STitle = styled(Title)``;

const SPhoto = styled(Photo)`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 100;
  object-fit: contain;

  @media screen and (max-width: 500px) {
    width: 100%;
    top: 0vh;
    left: 0vw;
  }
`;

const SPhotoA = styled(Photo)`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 99;
  object-fit: contain;
  @media screen and (max-width: 500px) {
    top: 35vh;
    left: 0vw;
    object-fit: cover;
  }
`;
const SPhotoB = styled(Photo)`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 98;
  object-fit: contain;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const SPhotoC = styled(Photo)`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 97;
  object-fit: contain;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SStacks = styled(Stacks)`
  position: absolute;
  width: auto;
  height: 40%;
  right: 40vw;
  padding: 0px 60px;
  background: rgba(255, 255, 255, 0.19);
  border-radius: 10px;
  @media screen and (max-width: 1000px) {
    flex-direction: row;
    width: 100%;
    height: auto;
    bottom: -10vh;
    right: 0vw;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    bottom: -25vh;
  }
`;

const SPhotoContainer = styled(PhotoContainer)`
  width: 100%;
  position: relative;
  transition: 1s ease;
  &:hover {
    ${SPhoto} {
      width: auto;
      top: 10vh;
      left: 0vw;
      height: 50%;
      @media screen and (max-width: 500px) {
        width: 100%;
        top: 0vh;
        left: 0vw;
      }
    }
    ${SPhotoA} {
      width: auto;
      top: 35vh;
      left: 25vw;
      height: 50%;
      @media screen and (max-width: 700px) {
        left: 8vw;
      }
      @media screen and (max-width: 500px) {
        top: 35vh;
        left: 0vw;
        object-fit: cover;
      }
    }
    ${SPhotoB} {
      width: auto;
      top: 0vh;
      left: 35vw;
      height: 50%;
      @media screen and (max-width: 800px) {
        left: 40vw;
      }
      @media screen and (max-width: 700px) {
        left: 40vw;
      }
    }
    ${SPhotoC} {
      width: auto;
      top: 30vh;
      left: 55vw;
      height: 50%;
      @media screen and (max-width: 1200px) {
        left: 50vw;
      }
      @media screen and (max-width: 1000px) {
        left: 45vw;
      }
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
    ${SStacks} {
      @media screen and (min-width: 1000px) {
        top: 0vh;
        right: 0vw;
      }
    }
  }
`;

const SStackText = styled(StackText)``;

const SContents = styled(Contents)`
  justify-content: center;
  height: 70vh;
  &:hover {
    ${Overlay} {
      width: 100%;
      left: 0;
    }
    ${SStackText} {
      opacity: 1;
    }
  }
`;

const Separator = styled.div`
  position: absolute;
  left: -3vw;
  top: 2vh;
  width: 80%;
  border-bottom: 0.5px solid gray;
`;
const HighBookerWeb = () => {
  return (
    <SProject>
      <Separator />
      <STitle>BOOKER: Web</STitle>
      <SContents>
        <SPhotoContainer>
          <SPhoto src={high_booker} />
          <SPhotoA src={high_booker2} />
          <SPhotoB src={high_booker1} />
          <SPhotoC src={high_booker3} />
          <SStacks>
            <SStackText>React JS</SStackText>
            <SStackText>ApolloGraphql</SStackText>
            <SStackText>React Hook Form</SStackText>
            <SStackText>Styled Components</SStackText>
            <SStackText>Netlify</SStackText>
          </SStacks>
        </SPhotoContainer>
      </SContents>
    </SProject>
  );
};

export default HighBookerWeb;
