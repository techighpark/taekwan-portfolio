import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const HighMarket = () => {
  return (
    <Layout>
      <Helmet>
        <title>High-Market | TAE KWAN</title>
      </Helmet>
      <AboutContainer></AboutContainer>
    </Layout>
  );
};

const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 2000px;

  /* border: 1px solid orange; */
`;

export default HighMarket;
