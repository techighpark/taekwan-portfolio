import styled from "styled-components";

import Layout from "../components/Layout";
import highBookerWeb from "../img/high-booker.JPG";
import highBookerDB from "../img/high-booker-database.png";
import highSearchBook from "../img/high-search-book.png";
import highVedio from "../img/high-booker-web-3.png";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";
import { useRef, useState } from "react";

const portfolioData = [
  {
    title: "#1 Booker: Web",
    url: "booker-web",
    imgTitle: "Booker",
    subtitle: "Web",
    src: highBookerWeb,
  },
  {
    title: "#2 Booker: Database / Server",
    url: "booker-db",
    imgTitle: "Booker",
    subtitle: "Database",
    src: highBookerDB,
  },
  {
    title: "# #3 Search-Books: Web",
    url: "search-book",
    imgTitle: "Search-Books",
    subtitle: "Web",
    src: highSearchBook,
  },
  {
    title: "#4 High-Video: Web",
    url: "booker-web",
    imgTitle: "High-Video",
    subtitle: "Web",
    src: highVedio,
  },
];

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
  top: 50vh;
  z-index: 11;
  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 500px) {
    top: 70vh;
  }
`;
const FieldText = styled.div`
  font-style: italic;
  font-size: 70px;
  font-weight: 500;
  letter-spacing: -0.1em;
  @media screen and (max-width: 500px) {
    font-size: 50px;
    font-weight: 400;
  }
`;
const PortfolioList = styled.div`
  position: fixed;
  top: 60vh;
  right: 1vw;
  width: 100%;
  padding-bottom: 150px;
  text-align: right;

  @media screen and (max-width: 500px) {
    position: absolute;
    top: 100vh;
    text-align: center;
  }
`;
const Portfolios = styled.div`
  padding-bottom: 10px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
  ::first-letter {
    color: rgba(255, 255, 255, 0.9);
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
    font-weight: 300;
  }
`;

const PortfolioWrapper = styled.div`
  position: relative;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 200px;
  padding-bottom: 400px;
  /* align-items: center;
  border: 1px solid red; */

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const ProjectTitle = styled.div`
  font-size: 80px;
  position: absolute;
  left: 50%;
  top: 70%;
  font-weight: 800;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.fontColor};
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1000;

  /* border: 1px solid red; */
`;
const Subtitle = styled.div`
  padding-left: 30px;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  right: 0;
  top: 30vh;
  color: black;
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1000;
  background-color: white;
  text-align: left;

  /* border: 1px solid red; */
`;
const ProjectContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 30vh;
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

const ArrowPulse = keyframes`
0% {
		transform: scale(0.95)rotate(45deg);
	}

	70% {
		transform: scale(1) rotate(45deg);
    border-bottom:3px solid ;
    border-right:3px solid
	}

	100% {
		transform: scale(0.95) rotate(45deg);
	}
`;

const Arrow = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 80vh;
  left: 49vw;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  &::after {
    content: "";
    position: absolute;
    top: 25px;
    left: -10px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;
    transform: rotate(45deg);
    animation: ${ArrowPulse} 2s infinite alternate;

    /* &:hover {
      transition-delay: 0s;
      transform: rotate(45deg) scale(1.5);
    } */
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background: transparent;
    border-radius: 40px;
    border: 2px solid gray;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Portfolio = () => {
  const portfolioRef = useRef([]);
  console.log(portfolioRef);

  const [currentTab, setCurrentTab] = useState();
  const onClickList = index => {
    portfolioRef.current[index].scrollIntoView({ behavior: "smooth" });
    setCurrentTab(portfolioRef.current[index]);
  };

  return (
    <Layout>
      <PortfolioContainer>
        <FieldContainer>
          <FieldText>The Work</FieldText>
        </FieldContainer>
        <PortfolioList>
          {portfolioData.map((data, index) => (
            <Portfolios
              onClick={() => onClickList(index)}
              selected={portfolioRef.current[index] === currentTab}
              key={index}
            >
              {data.title}
            </Portfolios>
          ))}
        </PortfolioList>
        <Arrow />
        <PortfolioWrapper>
          {portfolioData.map((data, index) => (
            <ProjectContainer
              ref={el => (portfolioRef.current[index] = el)}
              key={index}
            >
              <Link to={`${data.url}`}>
                <PortfolioCover src={data.src} />
              </Link>
              <ProjectTitle>{data.imgTitle}</ProjectTitle>
              <Subtitle>{data.subtitle}</Subtitle>
            </ProjectContainer>
          ))}
        </PortfolioWrapper>
      </PortfolioContainer>
    </Layout>
  );
};

export default Portfolio;
