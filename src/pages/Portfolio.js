import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { useEffect, useRef } from "react";

const Portfolio = () => {
  const onClick = () => {
    window.open("https://high-market.vercel.app/enter", "_blank");
  };

  const onScroll = event => {
    console.log(event.target);
    if (event.deltaY > 0) event.target.scrollLeft += 100;
    else event.target.scrollLeft -= 100;
  };

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | TAE KWAN</title>
      </Helmet>
      <DetailContainer onWheel={onScroll}>
        <Wrapper>
          <DetailSection>
            <DetailTitle>1</DetailTitle>
          </DetailSection>
          <DetailSection>
            <DetailTitle>2</DetailTitle>
          </DetailSection>
          <DetailSection>
            <DetailTitle>3</DetailTitle>
          </DetailSection>
          <DetailSection>
            <DetailTitle>4</DetailTitle>
          </DetailSection>
        </Wrapper>
      </DetailContainer>
    </Layout>
  );
};
const DetailContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  /* display: flex; */
  /* section:nth-child(even) {
      color: white;
    } */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: auto;
`;
const DetailSection = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4ch;
`;
const DetailTitle = styled.div`
  margin: 0;
`;
export default Portfolio;
