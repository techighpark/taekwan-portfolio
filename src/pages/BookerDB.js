import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";

const BookerDB = () => {
  return (
    <Layout>
      <PortfolioContainer>
        <FieldContainer>
          <FieldText>High-Booker</FieldText>
        </FieldContainer>
        <LinkContainer>
          <Link to={"/ex/high-booker"}>
            <WebLink>https://high-booker.netlify.app/</WebLink>
          </Link>
        </LinkContainer>
      </PortfolioContainer>
    </Layout>
  );
};

const WebLink = styled.div``;
const LinkContainer = styled.div``;

const FieldText = styled.div`
  font-style: italic;
  font-size: 70px;
  font-weight: 800;
  letter-spacing: -0.1em;

  /* border: 1px solid yellowgreen; */

  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
`;

const FieldContainer = styled.div`
  margin-top: 30%;
  text-align: center;

  border: 0.5px solid yellow;

  @media screen and (max-width: 500px) {
    margin-top: 400px;
    text-align: center;
  }
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 3px solid purple; */
`;
export default BookerDB;
