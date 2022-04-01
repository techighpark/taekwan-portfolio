import styled from "styled-components";
import high_booker from "../../img/high-booker.JPG";
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

const SOverlay = styled(Overlay)`
  left: 0;
  width: 0%;
  height: 104%;
  bottom: -2%;
  @media screen and (max-width: 500px) {
    top: 100%;
    height: 100%;
    width: 100%;
  }
`;

const SPhotoContainer = styled(PhotoContainer)``;

const SPhoto = styled(Photo)``;

const SStacks = styled(Stacks)``;

const SStackText = styled(StackText)`
  opacity: 0;
  @media screen and (max-width: 500px) {
    opacity: 1;
  }
`;

const SContents = styled(Contents)`
  justify-content: flex-end;
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
const HighZoom = () => {
  return (
    <SProject>
      <Separator />
      <STitle>HIGH-ZOOM: Web</STitle>
      <SContents>
        <SPhotoContainer>
          <SPhoto src={high_booker} />
        </SPhotoContainer>
        <SOverlay>
          <SStacks>
            <SStackText>React JS</SStackText>
            <SStackText>WebRTC</SStackText>
            <SStackText>React Hook Form</SStackText>
            <SStackText>Styled Components</SStackText>
            <SStackText>Netlify</SStackText>
          </SStacks>
        </SOverlay>
      </SContents>
    </SProject>
  );
};

export default HighZoom;
