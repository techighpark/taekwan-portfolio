import styled from "styled-components";
import Layout from "../components/Layout";

const BookerWeb = () => {
  return (
    <Layout>
      <PortfolioContainer>
        <FieldContainer>
          <FieldText>High-Booker</FieldText>
        </FieldContainer>
        <LinkContainer>
          <WebLink>https://high-booker.netlify.app/</WebLink>
        </LinkContainer>
      </PortfolioContainer>
    </Layout>
  );
};

const WebLink = styled.div``;
const LinkContainer = styled.div``;
const PortfolioContainer = styled.div`
  position: relative;
  padding-top: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid tomato; */
  @media screen and (max-width: 500px) {
    padding-top: 130vh;
  }
`;
const FieldContainer = styled.div`
  position: absolute;
  top: 30vh;
  z-index: 11;
  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 500px) {
    top: 70vh;
  }
`;
const FieldText = styled.div`
  font-style: italic;
  font-size: 70px;
  font-weight: 800;
  letter-spacing: -0.1em;
  @media screen and (max-width: 500px) {
    font-size: 50px;
    font-weight: 800;
  }
`;
export default BookerWeb;
