import styled from "styled-components";
import high_booker_databse from "../../img/high-booker-database.png";
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
  text-align: right;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const SSubTitle = styled(SubTitle)``;

const SOverlay = styled(Overlay)`
  left: 10%;
  width: 30%;
  height: 50%;
  bottom: -10vh;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
    top: 100%;
    left: 0;
  }
`;
const SPhotoContainer = styled(PhotoContainer)`
  width: 100%;
  height: 70%;
  text-align: center;
`;
const SPhoto = styled(Photo)`
  width: 50%;
  object-fit: contain;
`;
const SStacks = styled(Stacks)`
  width: 100%;
`;

const SStackText = styled(StackText)``;

const SContents = styled(Contents)`
  /* justify-content: flex-start; */
`;
const Arrow = styled.div`
  position: absolute;
  top: 3vh;
  right: 30vw;
  &::after {
    content: "";
    position: absolute;
    top: 32px;
    left: 27px;
    width: 20px;
    height: 20px;
    border-top: 2px solid gray;
    border-right: 2px solid gray;
    transform: rotate(45deg);
    transition: 0.5s ease-in-out;
    transition-delay: 0s;
    z-index: 100;
    cursor: pointer;
    &:hover {
      transition-delay: 0s;
      transform: rotate(45deg) scale(1.5);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 80px;
    height: 80px;
    background: transparent;
    border-radius: 40px;
    border: 2px solid gray;
    transition: background 0.5s width 0.5s;
  }
`;

const HighBookerDataBase = () => {
  return (
    <SProject>
      <Arrow />
      <STitle>BOOKER</STitle>
      <SSubTitle>DataBase</SSubTitle>
      <SContents>
        <SPhotoContainer>
          <SPhoto src={high_booker_databse} />
        </SPhotoContainer>
        <SOverlay>
          <SStacks>
            <SStackText>Postgresql</SStackText>
            <SStackText>Apollo Server</SStackText>
            <SStackText>GraphQL</SStackText>
            <SStackText>Prisma</SStackText>
          </SStacks>
        </SOverlay>
      </SContents>
    </SProject>
  );
};

export default HighBookerDataBase;
