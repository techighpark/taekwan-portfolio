import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Check } from "@styled-icons/fa-solid/Check";
import { portfolioDatas } from "../assets/portfolioDatas";
import { Link } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import { keyframes } from "styled-components";
import { ExternalLinkAlt } from "@styled-icons/fa-solid/ExternalLinkAlt";

const PortfoliosItems = React.forwardRef((props, ref) => {
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
    <PortfolioContainer>
      {portfolioDatas.map((data, index) => (
        <ProjectItemContainer ref={el => (ref.current[index] = el)} key={index}>
          <BottomArrow
            onClick={() => onClickList(index + 1, ref)}
            selected={ref.current[index] === currentTab}
            last={ref.current.length - 1 === index}
          />
          <PortfolioPhoto src={data.src} />
          <TitleContainer>
            <PortfolioTitle>
              {data.imgTitle}
              <PortfolioSubtitle>{data.imgSubtitle}</PortfolioSubtitle>
              <StackContainer>
                {data.stacks.map((stack, index) => (
                  <div key={index}>
                    <Stack>
                      <StackCheck />
                      {stack}
                    </Stack>
                  </div>
                ))}
              </StackContainer>
            </PortfolioTitle>
          </TitleContainer>
          <StyledLink
            to={`/ex/${data.url}`}
            target={screenWidth ? "_self" : "_blank"}
          >
            {screenWidth ? null : <LinkText>Visit Website</LinkText>}
            <LinkIcon />
          </StyledLink>
        </ProjectItemContainer>
      ))}
    </PortfolioContainer>
  );
});
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
  top: 500px;
  left: 50%;
  cursor: pointer;
  box-shadow: 0 0 0 0 ${props => props.theme.accentColor};
  transform: scale(1);
  display: ${props => (props.last ? "none" : "")};
  /* border: 1px solid; */
  &::after {
    content: "";
    position: absolute;
    top: 16px;
    left: -5.5px;
    width: 10px;
    height: 10px;
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
    width: 50px;
    height: 50px;
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
    top: 370px;
    &::before {
      width: 35px;
      height: 35px;
    }
    &::after {
      top: 10px;
    }
    /* right: 0px; */
  }
`;

const StackCheck = styled(Check)`
  width: 20px;
  color: ${props => props.theme.lightWhiteColor};
  padding-right: 10px;
  padding-bottom: 2px;
`;

const LinkIcon = styled(ExternalLinkAlt)`
  width: 15px;
  color: ${props => props.theme.lightAccentColor};

  @media screen and (max-width: 500px) {
    color: ${props => props.theme.accentColor};
    font-weight: 400;
    opacity: 0.6;
  }
`;

const LinkText = styled.span`
  color: ${props => props.theme.lightWhiteColor};
  font-weight: 400;
  padding-right: 5px;
  @media screen and (max-width: 500px) {
    /* color: ${props => props.theme.lightWhiteColor}; */
    font-weight: 400;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: -10px;
  right: 0%;
  display: flex;
  align-items: center;
  :hover {
    span {
      color: ${props => props.theme.fontColor};
    }
    ${LinkIcon} {
      color: ${props => props.theme.accentColor};
    }
  }
  @media screen and (max-width: 500px) {
    bottom: 60px;
    right: 6vw;
  }
`;

const Stack = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    font-weight: 400;
  }
`;
const StackContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 200%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  /* border: 1px solid red; */
  @media screen and (max-width: 500px) {
    left: 50%;
    top: 320px;
    transform: translateX(-50%);
    /* margin-top: 200px; */
  }
`;
const PortfolioSubtitle = styled.div`
  position: absolute;
  bottom: 101%;
  right: 0;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.bgColor};
  background-color: white;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

const PortfolioTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* font-style: italic; */
  font-size: 60px;
  font-weight: 500;
  white-space: nowrap;
  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 500px) {
    white-space: nowrap;
    font-size: 25px;
    top: -40px;
    font-weight: 500;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 700px;
  height: 400px;
  background-color: ${props => props.theme.bgColor};
  opacity: 0;
  border-radius: 30px;

  /* border: 0.5px solid red; */
  /* border-radius: 1px; */
  /* cursor: pointer; */
  :hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 500px) {
    /* width: 100%; */
    height: 250px;
    background-color: rgba(0, 0, 0, 0);
    opacity: 1;
    /* border: 0.5px solid red; */
  }
`;

const PortfolioPhoto = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  width: 700px;
  border-radius: 30px;
  box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.3),
    10px 10px 5px 5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 500px) {
    width: 94vw;
    height: 250px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    /* border: none; */
    /* object-fit: contain; */

    /* margin: 5px; */
  }
`;

const ProjectItemContainer = styled.div`
  /* overflow: hidden; */
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  /* border: 1px solid yellow; */

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

const PortfolioContainer = styled.div`
  width: 100%;
  margin-top: 600px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 400px;

  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 500px;
    margin-bottom: 220px;
    row-gap: 500px;
  }
`;

export default PortfoliosItems;
