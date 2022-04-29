import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { portfolioDatas } from "../assets/portfolioDatas";
import { Link, useNavigate } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import { keyframes } from "styled-components";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";
// import HighMarketDetail from "./HighMarketDetail";

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
  const getBgColor = subtitle => {
    if (subtitle === "Web" || subtitle === "App") {
      return true;
    } else {
      return false;
    }
  };
  const navigate = useNavigate();
  const onClickLink = link => {
    navigate(link, { replace: true });
  };

  return (
    <PortfolioContainer>
      {portfolioDatas.map((data, index) => {
        return (
          <ProjectItemContainer
            ref={el => (ref.current[index] = el)}
            key={index}
          >
            <BottomArrow
              onClick={() => onClickList(index + 1, ref)}
              selected={ref.current[index] === currentTab}
              last={ref.current.length - 1 === index}
            />
            <PortfolioPhoto src={data.imgSrc} />
            <TitleContainer onClick={() => onClickLink(data.link)}>
              {data.coding ? (
                <CodingContainer>
                  <Coding>Developed Soon</Coding>
                </CodingContainer>
              ) : null}
              <PortfolioTitle>
                {data.imgTitle}
                <PortfolioSubtitle bgColor={getBgColor(data.imgSubtitle)}>
                  {data.imgSubtitle}
                </PortfolioSubtitle>
                <StackContainer>
                  {screenWidth
                    ? data.stacks.stacksIcon.map((icon, index) => (
                        <StackWrapper key={index}>{icon}</StackWrapper>
                      ))
                    : data.stacks.text.map((text, index) => (
                        <StackWrapper key={index}>
                          <Stack>{text}</Stack>
                        </StackWrapper>
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
        );
      })}
    </PortfolioContainer>
  );
});

const Coding = styled.div`
  position: absolute;
  top: 35px;
  left: -43px;
  /* width: 200px; */
  padding: 5px 40px;
  font-weight: 700;
  text-align: center;
  background-color: ${props => props.theme.whiteColor};
  color: ${props => props.theme.accentColor};
  transform: rotate(-45deg);
  /* border: 1px solid white; */
  @media screen and (max-width: 500px) {
    transform: rotate(0deg);
    width: 100%;
    padding: 5px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border: 1px solid; */
    background-color: white;

    /* width: ; */
  }
`;
const CodingContainer = styled.div``;
const ArrowPulse = keyframes`
0% {
		transform: scale(0.9)rotate(45deg);
	}

	70% {
		transform: scale(1) rotate(45deg);
    border-bottom: 1px solid #FE16A2;
    border-right: 1px solid #FE16A2;
	}

	100% {
		transform: scale(0.9) rotate(45deg);
	}
`;

export const BottomArrow = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 510px;
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

// const StackCheck = styled(Check)`
//   width: 20px;
//   color: ${props => props.theme.lightWhiteColor};
//   padding-right: 10px;
//   padding-bottom: 2px;
// `;

const LinkIcon = styled(LinkExternal)`
  width: 15px;
  color: ${props => props.theme.lightAccentColor};

  @media screen and (max-width: 500px) {
    color: ${props => props.theme.fontColor};
    font-weight: 400;
    opacity: 0.6;
    /* border: 1px solid white; */
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
  top: 103%;
  left: 50%;
  transform: translateX(-50%);
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
    top: -10%;
    left: unset;
    right: 5%;
    transform: translateX(0%);
  }
`;

const Stack = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 10px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    font-weight: 400;
  }
`;
const StackWrapper = styled.div`
  color: ${props => props.theme.WhiteColor};

  @media screen and (max-width: 500px) {
    padding: 0 10px;
  }
`;
const StackContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 200%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  /* border: 1px solid red; */
  /* padding: 5px; */
  /* background-color: rgba(255, 255, 255, 0.2); */

  @media screen and (max-width: 500px) {
    left: 0%;
    top: 300px;
    transform: translateX(0%);
    flex-direction: row;
    justify-content: flex-start;
    /* justify-content: center;
    align-items: center; */

    /* margin-top: 200px; */
  }
`;
const PortfolioSubtitle = styled.div`
  position: absolute;
  top: 5%;
  left: 100%;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.bgColor};
  /* border: 1px solid white; */
  background-color: white;
  border-radius: 20px;
  padding: 3px 5px;
  @media screen and (max-width: 500px) {
    left: 102%;
    font-size: 8px;
  }
`;

const PortfolioTitle = styled.div`
  position: absolute;
  top: 20%;
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
    left: 5px;
    transform: translateX(0%);
  }
`;

const TitleContainer = styled.div`
  cursor: pointer;
  position: absolute;
  width: 700px;
  height: 400px;
  background-color: ${props => props.theme.bgColor};
  opacity: 0;
  overflow: hidden;
  border-radius: 14px;
  :hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 500px) {
    width: 90vw;
    height: 250px;
    background-color: rgba(0, 0, 0, 0);
    opacity: 1;
    overflow: visible;
    /* border: 0.5px solid red; */
  }
`;

const PortfolioPhoto = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  width: 700px;
  border-radius: 15px;
  box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.3),
    10px 10px 5px 5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 500px) {
    width: 90vw;
    height: 250px;
    /* border-radius: 20px; */
    border: none;
    box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.3),
      10px 10px 5px 5px rgba(0, 0, 0, 0.2);

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
  margin-bottom: 300px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 400px;

  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    margin-top: 500px;
    margin-bottom: 300px;
    row-gap: 400px;
  }
`;

export default PortfoliosItems;
