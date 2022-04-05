import React from "react";
import styled from "styled-components";

import { portfolioDatas } from "./portfolioDatas";
import PageArrowSVG from "../components/PageArrow";

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
                    <Stack>{stack}</Stack>
                  </div>
                ))}
              </StackContainer>
            </PortfolioTitle>
            <PageArrowSVG fill="pink" width={30} height={30} />
          </TitleContainer>
        </ProjectContainer>
      ))}
    </PortfolioItemsContainer>
  );
});

const Stack = styled.div`
  font-size: 14px;
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

  /* border: 1px solid white; */
  @media screen and (max-width: 500px) {
    left: 50%;
    top: 280px;
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
`;

const PortfolioTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
  font-size: 70px;
  font-weight: 800;
  border: 0.5px solid yellow;
  @media screen and (max-width: 500px) {
    white-space: nowrap;
    font-size: 40px;
    top: 10px;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  /* border: 0.5px solid yellow; */

  cursor: pointer;
  :hover {
    opacity: 1;
  }
  @media screen and (max-width: 500px) {
    background-color: rgba(0, 0, 0, 0.5);
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
    width: 80%;
    margin-top: 200px;
  }
`;

export default PortfoliosItems;
