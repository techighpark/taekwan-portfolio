import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0px 50px 0px;
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
    margin-top: 30px;
  }
`;
const PortfolioLink = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin-left: 30px;
  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 0px;
    font-size: 14px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>TAE KWAN</Title>
      <LinkContainer>
        <PortfolioLink>PORTFOLIO</PortfolioLink>
        <PortfolioLink>INFO</PortfolioLink>
        <PortfolioLink>CONTACT</PortfolioLink>
      </LinkContainer>
    </StyledHeader>
  );
};

export default Header;
