import styled, { css } from "styled-components";

import Layout from "../components/Layout";
import highBookerWeb from "../img/high-booker.JPG";
import highBookerDB from "../img/high-booker-database.png";
import highSearchBook from "../img/high-search-book.png";
import highVedio from "../img/high-booker-web-3.png";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";
import useScroll from "../hooks/useScroll";
import useSticky from "../hooks/useSticky";

const Portfolio = () => {
  const { portfolioRef, currentTab, onClickList } = useScroll(null);
  const { fixedPosition, stickyRef } = useSticky();
  return (
    <Layout>
      <PortfolioContainer>
        <FieldContainer>
          <FieldText>Works</FieldText>
        </FieldContainer>
        <PortfolioList fixed={fixedPosition} ref={stickyRef}>
          {portfolioData.map((data, index) => {
            return (
              <Portfolios
                onClick={() => onClickList(index)}
                selected={portfolioRef.current[index] === currentTab}
                key={index}
                last={Boolean(index === portfolioData.length - 1)}
              >
                {data.title}
              </Portfolios>
            );
          })}
        </PortfolioList>
        <Arrow
          onClick={() => onClickList(0)}
          selected={portfolioRef.current[0] === currentTab}
        />
        <PortfolioWrapper>
          {portfolioData.map((data, index) => (
            <Link to={`${data.url}`} key={index}>
              <ProjectContainer ref={el => (portfolioRef.current[index] = el)}>
                <PortfolioCover src={data.src} />
                <ProjectTitle>{data.imgTitle}</ProjectTitle>
                <Subtitle>{data.subtitle}</Subtitle>
              </ProjectContainer>
            </Link>
          ))}
        </PortfolioWrapper>
      </PortfolioContainer>
    </Layout>
  );
};

const portfolioData = [
  {
    title: "#1 High-Booker: Web",
    url: "booker-web",
    imgTitle: "High-Booker",
    subtitle: "Web",
    src: highBookerWeb,
  },
  {
    title: "#2 High-Booker: Database / Server",
    url: "booker-db",
    imgTitle: "High-Booker",
    subtitle: "Database",
    src: highBookerDB,
  },
  {
    title: "#3 Search-Books: Web",
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
  font-weight: 800;
  letter-spacing: -0.1em;
  @media screen and (max-width: 500px) {
    font-size: 50px;
    font-weight: 800;
  }
`;
const PortfolioList = styled.div`
  position: absolute;
  top: 110vh;
  right: 0%;
  text-align: right;
  overflow: hidden;
  z-index: 9999;
  ${props =>
    props.fixed &&
    `
      position: fixed;
      top: 200px;
      right: 1vw;
    `}
  /* border:1px solid red; */
  @media screen and (max-width: 500px) {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px 5px;
    border: 0.5px solid;
    ${props =>
      props.fixed &&
      css`
        top: 100px;
        right: 3vw;
      `}
  }
`;

const LineEccent = keyframes`
0%{
  width: 0;
}

100%{
  width: 100%;
}`;

const Portfolios = styled.div`
  position: relative;
  padding-left: 20px;
  font-weight: 200;
  /* border: 1px solid yellowgreen; */

  padding-bottom: ${props => (props.last ? "0px" : "20px")};
  color: ${props => (props.selected ? "white" : "rgba(255, 255, 255, 0.5)")};
  ::first-letter {
    color: rgba(255, 255, 255, 0.9);
  }
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    top: 7px;
    height: 5px;
    width: 100%;
    z-index: -1;
    /* background-color: ${props =>
      props.selected ? "rgba(254, 23, 162, 0.8)" : "none"}; */
    /* z-index: -1; */
  }
  :hover {
    color: white;
    font-weight: 300;
    ::before {
      content: "";
      background-color: rgba(254, 23, 162, 0.8);
      animation: ${LineEccent} 0.5s 1 ease-in forwards;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
    font-weight: 400;
    padding-left: 0px;
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
  padding-right: 2px;
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
  position: relative;
  padding-top: 30vh;
  overflow: hidden;
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
		transform: scale(0.9)rotate(45deg);
	}

	70% {
		transform: scale(1) rotate(45deg);
    border-bottom: 1px solid rgba(254, 23, 162, 1);
    border-right: 1px solid rgba(254, 23, 162, 1);
	}

	100% {
		transform: scale(0.9) rotate(45deg);
	}
`;

const Arrow = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 80vh;
  left: 49vw;
  cursor: pointer;
  box-shadow: 0 0 0 0 ${props => props.theme.accentColor};
  transform: scale(1);
  &::after {
    content: "";
    position: absolute;
    top: 25px;
    left: -10px;
    width: 20px;
    height: 20px;
    border-bottom: 1px solid ${props => props.theme.lightAccentColor};
    border-right: 1px solid ${props => props.theme.lightAccentColor};
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
    border: 2px solid ${props => props.theme.lightWhiteColor};
    box-sizing: border-box;
  }
  :hover {
    ::before {
      border: 2px solid ${props => props.theme.whiteColor};
      transform: translateX(-50%) scale(1.05);
    }
    ::after {
      animation: none;
      border-bottom: 1px solid ${props => props.theme.accentColor};
      border-right: 1px solid ${props => props.theme.accentColor};
    }
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default Portfolio;
