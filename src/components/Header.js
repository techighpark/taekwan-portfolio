import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

const LineSnake = keyframes`
0%{
 width:50vw;
 left:-50vw;
}
50%{
  width:50vw;
  left:25vw;
}
100%{
  width:50vw;
  left:100vw;
}`;

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
const Line = styled.div`
  position: absolute;
  width: 100%;
  top: 4vh;
  border-top: 0.5px solid;
  animation: ${LineSnake} 20s infinite linear;
`;
const HeaderTitle = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 200;

  /* border: 0.5px solid gray; */
  @media screen and (max-width: 500px) {
    text-align: center;
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
    margin-top: 10vh;
  }
`;
const HeaderLink = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin-left: 30px;

  /* border: 0.5px solid gray; */

  cursor: pointer;
  :hover {
    font-weight: 300;
  }

  @media screen and (max-width: 500px) {
    margin-left: 0px;
    margin-bottom: 15px;
    font-size: 14px;
  }
`;
const PopUpWrapper = styled.div`
  position: absolute;
  top: 0vh;
  left: 0vw;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  /* border: 0.5px solid blue; */
`;

const PopUp = styled.div`
  position: absolute;
  width: 250px;
  height: 400px;
  top: 250px;
  right: -80px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  opacity: ${props => (props.visible ? "1" : "0")};

  /* border: 2px solid blue; */
`;

const ContactTitle = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
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
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.4rem;
  padding-bottom: 10%;
  color: rgba(255, 255, 255, 0.5);

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
      <HeaderTitle>
        <Link to={"/"}>TAE KWAN</Link>
      </HeaderTitle>
      <Line />
      <HeaderLinks>
        <HeaderLink>
          <Link to={"/portfolio"}>PORTFOLIO</Link>
        </HeaderLink>
        <HeaderLink>
          <Link to={"/about"}>ABOUT</Link>
        </HeaderLink>
        <HeaderLink onClick={() => setVisible(true)}>CONTACT</HeaderLink>
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
