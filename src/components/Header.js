import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

let Header = () => {
  const [visible, setVisible] = useState(false);
  const onClickCloseBtn = () => {
    setVisible(false);
  };

  const [currentTab, setCurrentTab] = useState(0);
  const tabRef = useRef([]);
  const onClickTab = index => {
    setCurrentTab(index);
  };

  return (
    <HeaderContainer>
      <Link
        to={"/"}
        ref={tabRef.current[0]}
        onClick={() => onClickTab(0)}
        selected={tabRef.current[0] === currentTab}
      >
        <HeaderTitle>TAE KWAN</HeaderTitle>
      </Link>
      <Line />
      <HeaderLinks>
        <Link to={"/portfolio"}>
          <HeaderLink
            ref={tabRef.current[1]}
            onClick={() => onClickTab(1)}
            selected={tabRef.current[1] === currentTab}
          >
            WORKS
          </HeaderLink>
        </Link>
        <Link to={"/about"}>
          <HeaderLink
            ref={tabRef.current[2]}
            onClick={() => onClickTab(2)}
            selected={tabRef.current[2] === currentTab}
          >
            ABOUT
          </HeaderLink>
        </Link>
        <HeaderLink
          onClick={() => {
            setVisible(true);
            onClickTab(3);
          }}
          content={"연락처"}
          ref={tabRef.current[3]}
          selected={tabRef.current[3] === currentTab}
        >
          CONTACT
        </HeaderLink>
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
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 2000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  /* border: 0.5px solid brown; */
  /* overflow: hidden; */
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 200;
  :hover {
    font-weight: 300;
  }
  ::first-letter {
    /* color: ${props => props.theme.accentColor}; */
    /* font-weight: 500; */
  }
  /* border: 0.5px solid gray; */
  @media screen and (max-width: 500px) {
    text-align: center;
    margin-top: 5vh;
    font-weight: 500;
  }
`;

const HeaderLinks = styled.div`
  /* width: 100%; */
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

  :hover {
    font-weight: 400;
  }

  @media screen and (max-width: 500px) {
    padding-left: 0px;
    padding-bottom: 30px;
    font-size: 14px;
    font-weight: 500;
  }
`;
const PopUpWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
  right: -60px;
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
    left: 47vw;
    transform: translate(-50%, -50%);
    /* z-index: 999; */
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
    /* z-index: 999; */
    /* border: 0.5px solid red; */
  }
  &:hover {
    &::before {
      color: white;
    }
  }
`;

const LineSnake = keyframes`
0%{
 width:30vw;
 left:-30vw;
}
100%{
  width:30vw;
  left:100vw;
}`;
const Line = styled.div`
  position: absolute;
  width: 100%;
  top: 50px;
  border-top: 0.5px solid ${props => props.theme.lightWhiteColor};
  animation: ${LineSnake} 20s infinite linear;
  /* z-index: -1; */
  @media screen and (max-width: 500px) {
    top: 90px;
  }
`;

export default Header;
