import React from "react";
import styled from "styled-components";
import { ArrowUpRight } from "@styled-icons/bootstrap/ArrowUpRight";
import { Check } from "@styled-icons/fa-solid/Check";
import { portfolioDatas } from "../assets/portfolioDatas";
import { Link } from "react-router-dom";

const PortfoliosItems = React.forwardRef((props, ref) => {
  return (
    <PortfolioContainer>
      {portfolioDatas.map((data, index) => (
        <ProjectItemContainer ref={el => (ref.current[index] = el)} key={index}>
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
          <StyledLink to={`/ex/${data.url}`} target="_blank">
            <LinkText>Visit Website</LinkText>
            <LinkArrowUpRight />
          </StyledLink>
        </ProjectItemContainer>
      ))}
    </PortfolioContainer>
  );
});

const StackCheck = styled(Check)`
  width: 20px;
  color: ${props => props.theme.lightWhiteColor};
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
  font-weight: 300;
  @media screen and (max-width: 500px) {
    color: ${props => props.theme.lightWhiteColor};
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: -10px;
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
  font-weight: 300;
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
  /* font-style: italic; */
  font-size: 70px;
  font-weight: 100;
  white-space: nowrap;
  /* border: 0.5px solid yellow; */
  @media screen and (max-width: 500px) {
    white-space: nowrap;
    font-size: 35px;
    top: -10px;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: ${props => props.theme.bgColor};
  opacity: 0;
  /* border: 0.5px solid red; */
  /* border-radius: 1px; */

  /* cursor: pointer; */
  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 500px) {
    /* width: 100%; */
    height: 250px;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
    /* border: 0.5px solid red; */
  }
`;

const PortfolioPhoto = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  width: 700px;
  border: 1px solid ${props => props.theme.superLightWhiteColor};
  @media screen and (max-width: 500px) {
    width: 100vw;
    border: none;
    object-fit: contain;

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
  margin-top: 500px;
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 400px;

  /* border: 2px solid tomato; */
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 500px;
    margin-bottom: 300px;
    row-gap: 500px;
  }
`;

export default PortfoliosItems;
