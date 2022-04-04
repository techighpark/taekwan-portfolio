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
          <ListTitle>LIST</ListTitle>
          {portfolioData.map((data, index) => (
            <Portfolios
              onClick={() => onClickList(index)}
              selected={portfolioRef.current[index] === currentTab}
              key={index}
              last={Boolean(index === portfolioData.length - 1)}
            >
              {data.title}
            </Portfolios>
          ))}
        </PortfolioList>
        <Placeholder />
        <Arrow
          onClick={() => onClickList(0)}
          selected={portfolioRef.current[0] === currentTab}
        />
        <PortfolioItemsContainer>
          {portfolioData.map((data, index) => (
            <Link to={`${data.url}`} key={index}>
              <ProjectContainer ref={el => (portfolioRef.current[index] = el)}>
                <PortfolioCover src={data.src} />
                <ProjectTitle>{data.imgTitle}</ProjectTitle>
                <Subtitle>{data.subtitle}</Subtitle>
                <PortfolioDate>{data.date}</PortfolioDate>
              </ProjectContainer>
            </Link>
          ))}
        </PortfolioItemsContainer>
      </PortfolioContainer>
    </Layout>
  );
};

const portfolioData = [
  {
    title: "High-Booker: Web",
    url: "booker-web",
    imgTitle: "High-Booker",
    subtitle: "Web",
    src: highBookerWeb,
    date: "Mar. 2022",
  },
  {
    title: "High-Booker: Database / Server",
    url: "booker-db",
    imgTitle: "High-Booker",
    subtitle: "Database",
    src: highBookerDB,
    date: "Mar. 2022",
  },
  {
    title: "Search-Books: Web",
    url: "search-book",
    imgTitle: "Search-Books",
    subtitle: "Web",
    src: highSearchBook,
    date: "Mar. 2022",
  },
  {
    title: "High-Video: Web",
    url: "booker-web",
    imgTitle: "High-Video",
    subtitle: "Web",
    src: highVedio,
    date: "Mar. 2022",
  },
];

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 3px solid purple; */
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

const PortfolioItemsContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 300px;
  margin-top: 500px;
  margin-bottom: 500px;

  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    width: 80%;
    margin-top: 200px;
  }
`;

const ProjectTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  font-weight: 800;
  color: ${props => props.theme.fontColor};
  opacity: 0;
  transition: opacity 0.5s;

  /* border: 1px solid red; */
`;
const Subtitle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding-left: 30px;
  padding-right: 2px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  color: black;
  opacity: 0;
  transition: opacity 0.5s;
  background-color: white;

  /* border: 1px solid red; */
`;
const ProjectContainer = styled.div`
  position: relative;
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
    display: block;
    opacity: 0;
    transition: opacity 1s;

    /* border: 2px solid orange; */
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

  /* border: 3px solid blue; */
`;

const PortfolioDate = styled.div`
  color: ${props => props.theme.superLightWhiteColor};
`;

const PortfolioList = styled.div`
  position: absolute;
  top: 800px;
  right: 0;
  text-align: right;
  padding: 20px 0px 20px 5px;
  overflow: hidden;
  /* border: 2px solid red; */

  ${props =>
    props.fixed &&
    css`
      position: fixed;
      top: 100px;
      right: 1vw;
    `}
  @media screen and (max-width: 500px) {
    top: 600px;

    background-color: rgba(255, 255, 255, 0.1);
    ${props =>
      props.fixed &&
      css`
        top: 100px;
        right: 3vw;
      `}
  }
`;
const ListTitle = styled.div`
  letter-spacing: 0.5em;
  font-weight: 400;
  padding: 3px;
  border-bottom: 0.5px solid;
  margin-bottom: 20px;
  /* border: 1px solid yellow; */
`;

const LineAccent = keyframes`
0%{
  width: 0;
}

100%{
  width: 100%;
}`;

const Portfolios = styled.div`
  position: relative;
  font-weight: 200;
  color: ${props => (props.selected ? "white" : "rgba(255, 255, 255, 0.5)")};
  padding-bottom: ${props => (props.last ? "0px" : "20px")};
  cursor: pointer;

  /* border: 1px solid yellowgreen; */

  ::first-letter {
    color: ${props => props.theme.fontColor};
  }

  ::before {
    content: "";
    position: absolute;
    top: 7px;
    height: 5px;
    width: 100%;
    z-index: -1;
    background-color: ${props =>
      props.selected ? "rgba(254, 23, 162, 0.8)" : "none"};
  }
  :hover {
    color: white;
    font-weight: 300;
    ::before {
      content: "";
      background-color: rgba(254, 23, 162, 0.8);
      animation: ${LineAccent} 0.5s 1 ease-in forwards;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
    font-weight: 400;
    padding-left: 0px;
  }
`;

const Placeholder = styled.div`
  height: 184.05px;
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
  top: 15%;
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
