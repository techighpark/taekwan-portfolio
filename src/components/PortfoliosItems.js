import React from "react";
import styled from "styled-components";
import { ArrowUpRight } from "@styled-icons/bootstrap/ArrowUpRight";
import { Check } from "@styled-icons/feather/Check";
import { portfolioDatas } from "../assets/portfolioDatas";
import { Link } from "react-router-dom";

const PortfoliosItems = React.forwardRef((props, ref) => {
  return (
    <PortfolioItemsContainer>
      {portfolioDatas.map((data, index) => (
        <ProjectContainer ref={el => (ref.current[index] = el)} key={index}>
          <PortfolioPhoto src={data.src} />
          <TitleContainer>
            <PortfolioTitle>
              {data.imgTitle}
              <PortfolioSubtitle>{data.imgSubtitle}</PortfolioSubtitle>
              <StackContainer>
                {data.stacks.map((stack, index) => (
                  <div key={index}>
                    <Stack>
                      <StckCheck />
                      {stack}
                    </Stack>
                  </div>
                ))}
              </StackContainer>
            </PortfolioTitle>
          </TitleContainer>
          <StyledLink to={`/ex/${data.url}`} target="_blank">
            <LinkText>Visit Website</LinkText>
            <LinkArrowUpRight />
          </StyledLink>
        </ProjectContainer>
      ))}
    </PortfolioItemsContainer>
  );
});

const StckCheck = styled(Check)`
  width: 25px;
  padding-right: 10px;
  padding-bottom: 2px;
`;

const LinkArrowUpRight = styled(ArrowUpRight)`
  color: ${props => props.theme.accentColor};
  width: 15px;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    color: ${props => props.theme.accentColor};
  }
`;
const LinkText = styled.span`
  color: ${props => props.theme.lightWhiteColor};
  font-weight: 500;
  @media screen and (max-width: 500px) {
    color: ${props => props.theme.whiteColor};
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 0%;
  right: 0%;

  :hover {
    span {
      color: ${props => props.theme.fontColor};
    }
    ${LinkArrowUpRight} {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Stack = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
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

  /* border: 1px solid white; */
  @media screen and (max-width: 500px) {
    left: 50%;
    top: 310px;
    transform: translateX(-50%);
    /* margin-top: 200px; */
  }
`;
const PortfolioSubtitle = styled.div`
  position: absolute;
  bottom: 101%;
  right: 0;
  font-size: 20px;
  font-weight: 300;
  color: ${props => props.theme.bgColor};
  background-color: white;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const PortfolioTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
  font-size: 70px;
  font-weight: 800;
  white-space: nowrap;
  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 500px) {
    white-space: nowrap;
    font-size: 35px;
    top: 0px;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  /* border: 0.5px solid red; */

  cursor: pointer;
  :hover {
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
`;

const PortfolioPhoto = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  width: 50%;
  /* border: 1px solid blue; */
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ProjectContainer = styled.div`
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

const PortfolioItemsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 400px;
  margin-top: 500px;
  margin-bottom: 200px;

  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 200px;
  }
`;

export default PortfoliosItems;
