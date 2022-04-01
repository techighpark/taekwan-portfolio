import { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    align-items: flex-start;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Title = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 200;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
  }
  @media screen and (max-width: 500px) {
    align-items: center;
    margin-top: 10vh;
  }
`;
const PortfolioLink = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin-left: 30px;
  cursor: pointer;
  :hover {
    font-weight: 300;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 0px;
    font-size: 14px;
  }
`;
const InfoContainer = styled.ul`
  position: absolute;
  top: 100px;
  right: 150px;
  font-size: 20px;
  font-weight: 100;
`;

const Header = () => {
  const [visible, setVisible] = useState("");
  console.log(visible);

  return (
    <StyledHeader>
      <Title>TAE KWAN</Title>
      <LinkContainer>
        <PortfolioLink>PORTFOLIO</PortfolioLink>
        <PortfolioLink visible onClick={() => setVisible("info")}>
          INFO
        </PortfolioLink>
        <InfoContainer>
          <li>email_ techigh.b@gmail.com</li>
          <li>mobile_ 010.6644.3892</li>
        </InfoContainer>
        <PortfolioLink>CONTACT</PortfolioLink>
      </LinkContainer>
    </StyledHeader>
  );
};

export default Header;
