import styled from "styled-components";

import Layout from "../components/Layout";
import highBookerWeb from "../img/high-booker.JPG";
import highBookerDB from "../img/high-booker-database.png";
import highSearchBook from "../img/high-search-book.png";
import highVedio from "../img/high-booker-web-3.png";
import { Link } from "react-router-dom";

const PortfolioContainer = styled.div`
  padding-top: 600px;
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
  ::first-letter {
    /* font-weight: 800; */
  }
`;
const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
  padding-bottom: 400px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
`;
const ProjectTitle = styled.div`
  font-size: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: 800;
  color: ${props => props.theme.fontColor};
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1000;

  /* border: 1px solid red; */
`;
const Subtitle = styled.div`
  font-size: 20px;
  position: absolute;
  right: 10%;
  top: 10%;
  font-weight: 200;
  color: black;
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1000;
  background-color: white;

  /* border: 1px solid red; */
`;
const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  /* border: 3px solid tomato; */
  &::before {
    content: "";
    background-color: rgb(0, 0, 0);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    /* border: 2px solid orange; */
    display: block;
    opacity: 0;
    transition: opacity 1s;
    z-index: 999;
  }
  :hover {
    &::before {
      opacity: 0.8;
    }
    ${ProjectTitle} {
      opacity: 1;
    }
    ${Subtitle} {
      opacity: 1;
    }
  }
`;

const PortfolioCover = styled.img`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;

  /* height: 300px; */
  /* border: 3px solid blue; */
`;

const Portfolio = () => {
  return (
    <Layout>
      <FieldContainer>
        <FieldText>The Work</FieldText>
      </FieldContainer>
      <PortfolioContainer>
        <PortfolioWrapper>
          <ProjectContainer content={"Booker:Web"}>
            <Link to={"booker-web"}>
              <PortfolioCover src={highBookerWeb} />
            </Link>
            <ProjectTitle>Booker</ProjectTitle>
            <Subtitle>Web</Subtitle>
          </ProjectContainer>
          <ProjectContainer>
            <Link to={"booker-db"}>
              <PortfolioCover src={highBookerDB} />
            </Link>
            <ProjectTitle>Booker</ProjectTitle>
            <Subtitle>Database</Subtitle>
          </ProjectContainer>
          <ProjectContainer>
            <Link to={"search-book"}>
              <PortfolioCover src={highSearchBook} />
            </Link>
            <ProjectTitle>Search-Books</ProjectTitle>
            <Subtitle>Web</Subtitle>
          </ProjectContainer>
          <ProjectContainer>
            <Link to={"high-video"}>
              <PortfolioCover src={highVedio} />
            </Link>
            <ProjectTitle>High-Video</ProjectTitle>
            <Subtitle>Web</Subtitle>
          </ProjectContainer>
        </PortfolioWrapper>
      </PortfolioContainer>
    </Layout>
  );
};

export default Portfolio;
