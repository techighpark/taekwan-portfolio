import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const LineSnake = keyframes`
0%{
 width:30vw;
 left:-50vw;
}
100%{
  width:30vw;
  left:100vw;
}`;
const Line = styled.div`
  position: absolute;
  width: 100%;
  top: 4vh;
  border-top: 0.5px solid;
  animation: ${LineSnake} 20s infinite linear;
  @media screen and (max-width: 500px) {
    top: 13vh;
  }
`;
const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 0.5px solid gray; */
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderTitle = styled.div`
  width: 140px;
  font-size: 24px;
  font-weight: 200;

  /* border: 0.5px solid gray; */
  @media screen and (max-width: 500px) {
    text-align: center;
  }
  &::after {
    content: "TAE KWAN";
    width: 140px;
  }
  :hover {
    &::after {
      display: none;
    }
    &::before {
      content: "태관";
      width: 140px;
      text-align: center;
    }
  }
`;
const HeaderLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* border: 0.5px solid gray; */

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding-top: 110px;
  }
`;
const HeaderLink = styled.div`
  font-size: 16px;
  font-weight: 200;
  padding-left: 50px;
  cursor: pointer;

  /* border: 0.5px solid gray; */

  &::after {
    content: "${props => props.title}";
    width: 140px;
  }
  :hover {
    font-weight: 300;
    &::after {
      display: none;
    }
    &::before {
      content: "${props => props.content}";
      width: 140px;
      text-align: center;
    }
  }

  @media screen and (max-width: 500px) {
    padding-left: 0px;
    padding-bottom: 30px;
    font-size: 14px;
    font-weight: 300;
  }
`;
const PopUpWrapper = styled.div`
  position: absolute;
  top: 0vh;
  left: 0vw;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);

  /* border: 0.5px solid blue; */
`;

const PopUp = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  top: 200px;
  right: -80px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  opacity: ${props => (props.visible ? "1" : "0")};

  /* border: 2px solid blue; */

  @media screen and (max-width: 500px) {
    top: 45vh;
    left: 50vw;
    /* transform: translate(-50%, -50%); */
  }
`;

const ContactTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: black;
  letter-spacing: 0.3rem;

  /* border: 0.5px solid yellow; */
`;

const ContactContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* border: 0.5px solid red; */
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 0.5px solid yellow; */
`;

const Contact = styled.span`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.4rem;
  padding-bottom: 10%;
  color: rgba(0, 0, 0, 0.3);

  /* border: 0.5px solid skyblue; */
`;
const ContactContent = styled.span`
  font-weight: 300;
  font-size: 12px;

  /* border: 0.5px solid skyblue; */
`;
const ContactContentNum = styled(ContactContent)`
  letter-spacing: 0.1rem;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 3px;
  top: 0px;
  cursor: pointer;

  &::before {
    content: "\\00d7";
    font-size: 25px;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.5);
    z-index: 999;
    /* border: 0.5px solid red; */
  }
  &:hover {
    &::before {
      color: white;
    }
  }
`;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const onClickCloseBtn = () => {
    setVisible(false);
  };

  return (
    <StyledHeader>
      <Link to={"/"}>
        <HeaderTitle />
      </Link>
      <Line />
      <HeaderLinks>
        <Link to={"/portfolio"}>
          <HeaderLink title={"PORTFOLIO"} content={"포트폴리오"} />
        </Link>
        <Link to={"/about"}>
          <HeaderLink title={"ABOUT"} content={"소개"} />
        </Link>
        <HeaderLink
          onClick={() => setVisible(true)}
          title={"CONTACT"}
          content={"연락처"}
        />
      </HeaderLinks>
      {visible ? (
        <PopUpWrapper>
          <PopUp visible={visible}>
            <ContactTitle>CONTACT</ContactTitle>
            <CloseBtn onClick={onClickCloseBtn} />
            <ContactContainer>
              <ContactWrapper>
                <Contact>EMAIL</Contact>
                <ContactContent>techigh.b@gmail.com</ContactContent>
              </ContactWrapper>
              <ContactWrapper>
                <Contact>MOBILE</Contact>
                <ContactContentNum>+82 010 6644 3892</ContactContentNum>
              </ContactWrapper>
            </ContactContainer>
          </PopUp>
        </PopUpWrapper>
      ) : null}
    </StyledHeader>
  );
};

export default Header;
