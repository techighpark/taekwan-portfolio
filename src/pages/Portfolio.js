import styled from "styled-components";

import Layout from "../components/Layout";
import highBookerWeb from "../img/high-booker.JPG";
import highBookerDB from "../img/high-booker-database.png";
import highSearchBook from "../img/high-search-book.png";
import highVedio from "../img/high-booker-web-3.png";

const PortfolioContainer = styled.div`
  padding-top: 500px;
  /* border: 1px solid tomato; */
  @media screen and (max-width: 500px) {
    padding-top: 300px;
  }
`;
const FieldContainer = styled.div`
  position: absolute;
  width: 100vw;
  top: 400px;
  /* left: 50%; */
  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 500px) {
  }
`;
const FieldText = styled.div`
  font-style: italic;
  font-size: 70px;
  font-weight: 500;
  letter-spacing: -0.1em;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 50px;
    font-weight: 400;
  }
`;
const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 30rem;
  row-gap: 400px;
  padding-bottom: 400px;
  /* justify-content: center; */
  /* border: 3px solid goldenrod; */
  /* @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(1, 1100px);
    grid-template-rows: repeat(4, 900px);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 900px);
    grid-template-rows: repeat(4, 800px);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 700px);
    grid-template-rows: repeat(4, 700px);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 500px);
    grid-template-rows: repeat(4, 500px);
  }*/
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 50rem;
    row-gap: 200px;
  }
`;
const ProjectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const ProjectTitle = styled.div`
  font-size: 24px;
  /* border: 1px solid red; */
`;

const PortfolioCover = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 30rem;
  align-items: center;
  @media screen and (max-width: 900px) {
    background-position: top;
    height: 30rem;
    width: 100%;
  }

  /* border: 3px solid blue;
  box-sizing: border-box; */
`;

const Portfolio = () => {
  return (
    <Layout>
      <FieldContainer>
        <FieldText>The Work</FieldText>
      </FieldContainer>
      <PortfolioContainer>
        <PortfolioWrapper>
          <ProjectContainer>
            <PortfolioCover src={highBookerWeb}>
              <ProjectTitle>BookerWeb</ProjectTitle>
            </PortfolioCover>
          </ProjectContainer>
          <ProjectContainer>
            <PortfolioCover src={highBookerDB}>
              <ProjectTitle>BookerDB</ProjectTitle>
            </PortfolioCover>
          </ProjectContainer>
          <ProjectContainer>
            <PortfolioCover src={highSearchBook}>
              <ProjectTitle>SearchBook</ProjectTitle>
            </PortfolioCover>
          </ProjectContainer>
          <ProjectContainer last>
            <PortfolioCover src={highVedio}>
              <ProjectTitle>VedioCall</ProjectTitle>
            </PortfolioCover>
          </ProjectContainer>
        </PortfolioWrapper>
      </PortfolioContainer>
    </Layout>
  );
};

export default Portfolio;
