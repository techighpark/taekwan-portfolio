import styled from "styled-components";

import Layout from "../components/Layout";

const PortfolioContainer = styled.div`
  height: 95vh;

  border: 1px solid tomato;
  box-sizing: border-box;
`;

const Portfolio = () => {
  return (
    <Layout>
      <PortfolioContainer></PortfolioContainer>
    </Layout>
  );
};

export default Portfolio;
