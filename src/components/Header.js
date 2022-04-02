import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: 0.5px solid gray;
  box-sizing: border-box; */
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const HeaderTitle = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 200;

  /* border: 0.5px solid gray;
  box-sizing: border-box; */
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const HeaderLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* border: 0.5px solid gray;
  box-sizing: border-box; */

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

  /* border: 0.5px solid gray;
  box-sizing: border-box; */
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
  background-color: rgba(0, 0, 0, 0.7);

  /* border: 0.5px solid blue;
  box-sizing: border-box; */
`;

const PopUp = styled.div`
  position: absolute;
  width: 250px;
  height: 400px;
  top: 40vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  /* border: 2px solid blue;
  box-sizing: border-box; */
`;

const ContactTitle = styled.span`
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.3rem;

  /* border: 0.5px solid yellow;
  box-sizing: border-box; */
`;

const ContactContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* border: 0.5px solid red;
  box-sizing: border-box; */
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 0.5px solid yellow;
  box-sizing: border-box; */
`;

const Contact = styled.span`
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.4rem;
  padding-bottom: 10%;
  color: rgba(255, 255, 255, 0.5);

  /* border: 0.5px solid skyblue;
  box-sizing: border-box; */
`;
const ContactContent = styled.span`
  font-weight: 300;
  font-size: 12px;

  /* border: 0.5px solid skyblue;
  box-sizing: border-box; */
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
    font-size: 20px;
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
      <HeaderTitle>TAE KWAN</HeaderTitle>
      <HeaderLinks>
        <HeaderLink>
          <Link to={"/portfolio"}>PORTFOLIO</Link>
        </HeaderLink>
        <HeaderLink>INFO</HeaderLink>
        <HeaderLink onClick={() => setVisible(true)}>CONTACT</HeaderLink>
      </HeaderLinks>
      {visible ? (
        <PopUpWrapper>
          <PopUp>
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
