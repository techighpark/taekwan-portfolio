import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import useScroll from "../hooks/useScroll";
import PortfoliosItems from "../components/PortfoliosItems";
import TopArrow from "../components/TopArrow";
import PortfolioStickList from "../components/PortfolioStickList";
import { useEffect, useRef, useState } from "react";

const Portfolio = () => {
  const portfolioRef = useRef([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth < 500);
  const { currentTab, onClickList } = useScroll("", screenWidth);

  useEffect(() => {
    const sizeDetect = () => {
      if (window.innerWidth < 500) {
        setScreenWidth(true);
      } else {
        setScreenWidth(false);
      }
    };
    window.onresize = sizeDetect;
  });
  return (
    <Layout>
      <Helmet>
        <title>WORKS | TAE KWAN</title>
      </Helmet>
      <PortfolioContainer>
        <FieldContainer>
          <FieldText>SKROW</FieldText>
        </FieldContainer>
        <PortfolioStickList ref={portfolioRef} />
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 2000px;

  /* border: 1px solid orange; */
`;
const FieldContainer = styled.div`
  margin-top: 300px;
  text-align: center;
  z-index: 30;

  /* border: 0.5px solid yellow; */

  @media screen and (max-width: 500px) {
    margin-top: 100px;
    text-align: center;
  }
`;
const FieldText = styled.div`
  /* font-style: italic; */
  font-size: 70px;
  font-weight: 700;
  unicode-bidi: bidi-override;
  direction: rtl;
  letter-spacing: 0.3em;
  ::first-letter {
    letter-spacing: 0em;
  }

  /* border: 1px solid yellowgreen; */

  @media screen and (max-width: 500px) {
    font-size: 50px;
    font-weight: 700;
  }
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

export const BottomArrow = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 600px;
  left: 50%;
  cursor: pointer;
  box-shadow: 0 0 0 0 ${props => props.theme.accentColor};
  transform: scale(1);
  /* border: 1px solid; */
  &::after {
    content: "";
    position: absolute;
    top: 25px;
    left: -10px;
    width: 20px;
    height: 20px;
    border-bottom: 3px solid ${props => props.theme.lightAccentColor};
    border-right: 3px solid ${props => props.theme.lightAccentColor};
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
    border: 3px solid ${props => props.theme.lightWhiteColor};
    box-sizing: border-box;
  }
  :hover {
    ::after {
      animation: none;
      border-bottom: 1px solid ${props => props.theme.accentColor};
      border-right: 1px solid ${props => props.theme.accentColor};
    }
    ::before {
      border: 2px solid ${props => props.theme.whiteColor};
      transform: translateX(-50%) scale(1.05);
    }
  }
  @media screen and (max-width: 500px) {
    top: 260px;
    &::after {
      width: 10px;
      height: 10px;
      top: 17px;
      left: -6px;
    }
    &::before {
      width: 50px;
      height: 50px;
      border: 3px solid ${props => props.theme.lightWhiteColor};
    }
  }
`;

export default Portfolio;
