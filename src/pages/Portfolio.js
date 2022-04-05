import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import useScroll from "../hooks/useScroll";
import PortfoliosItems from "../components/PortfoliosItems";
import TopArrow from "../components/TopArrow";
import PortfolioStickList from "../components/PortfolioStickList";
import { useRef } from "react";

const Portfolio = () => {
  const portfolioRef = useRef([]);
  const { currentTab, onClickList } = useScroll("");

  return (
    <Layout>
      <Helmet>
        <title>TAE KWAN | PORTFOLIO</title>
      </Helmet>
      <PortfolioContainer>
        <FieldContainer>
          <FieldText>Works</FieldText>
        </FieldContainer>
        <PortfolioStickList ref={portfolioRef} />
        <Placeholder />
        <BottomArrow
          onClick={() => onClickList(0, portfolioRef)}
          selected={portfolioRef.current[0] === currentTab}
        />
        <PortfoliosItems ref={portfolioRef} />
      </PortfolioContainer>
      <TopArrow />
    </Layout>
  );
};

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 3px solid purple; */
`;
const FieldContainer = styled.div`
  margin-top: 400px;
  text-align: center;
  z-index: 30;

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

const Placeholder = styled.div`
  height: 189.06px;
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

const BottomArrow = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 600px;
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
