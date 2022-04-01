import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import high_search_book from "../../img/high-search-book.png";
import {
  Contents,
  Overlay,
  Photo,
  PhotoContainer,
  Project,
  Stacks,
  StackText,
  SubTitle,
  Title,
} from "../ProjectStyles";

const SProject = styled(Project)`
  @media screen and (max-width: 500px) {
    padding-top: 30vh;
  }
`;
const STitle = styled(Title)`
  text-align: center;
  top: 5vh;
  @media screen and (max-width: 500px) {
    top: 37vh;
  }
`;
const SSubTitle = styled(SubTitle)`
  text-align: center;
  padding-top: 0px;
  right: -17vw;
  top: 2vh;
  @media screen and (max-width: 500px) {
    top: 33vh;
  }
`;

const SOverlay = styled(Overlay)`
  left: 51%;
  width: 49%;
  height: 100%;
  opacity: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
    top: 100%;
    left: 0;
    opacity: 1;
  }
`;
const SPhotoContainer = styled(PhotoContainer)``;
const SPhoto = styled(Photo)``;
const SStacks = styled(Stacks)`
  width: 100%;
`;

const SStackText = styled(StackText)``;

const SContents = styled(Contents)`
  justify-content: flex-start;

  &:hover {
    ${SOverlay} {
      opacity: 1;
    }
    ${StackText} {
      opacity: 1;
    }
  }
`;

const VerticalSeparator = styled.div`
  position: absolute;
  height: 100vh;
  border-right: 0.5px solid gray;
  top: 0vh;
  right: 0vw;
  @media screen and (max-width: 500px) {
    height: 40vh;
    top: 30vh;
    right: 1vh;
  }
`;
const SecondSeparator = styled.div`
  position: absolute;
  right: -1vw;
  top: 6vh;
  width: 50vw;
  border-bottom: 0.5px solid gray;
  @media screen and (max-width: 500px) {
    top: 37vh;
    right: -1vh;
  }
`;

const HighSearchBook = () => {
  return (
    <SProject>
      <VerticalSeparator />
      <SecondSeparator />
      <STitle>
        <FontAwesomeIcon
          icon={faSearch}
          size={"xs"}
          fade
          style={{ paddingRight: "2vw" }}
        />
        SEARCH-BOOK
      </STitle>
      <SSubTitle>Web</SSubTitle>
      <SContents>
        <SPhotoContainer>
          <SPhoto src={high_search_book} />
        </SPhotoContainer>
        <SOverlay>
          <SStacks>
            <SStackText>React JS</SStackText>
            <SStackText>Rest API</SStackText>
            <SStackText>Axios</SStackText>
          </SStacks>
        </SOverlay>
      </SContents>
    </SProject>
  );
};

export default HighSearchBook;
