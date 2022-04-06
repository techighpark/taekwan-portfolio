import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import useScroll from "../hooks/useScroll";
import useSticky from "../hooks/useSticky";
import { portfolioDatas } from "../assets/portfolioDatas";
import { EmojiSmileUpsideDown } from "@styled-icons/bootstrap/EmojiSmileUpsideDown";

const PortfolioStickList = React.forwardRef((props, ref) => {
  const { currentTab, onClickList } = useScroll("");
  const [listItem, setListItem] = useState(window.innerWidth < 500);
  const { fixedPosition, stickyRef } = useSticky(false, listItem);
  useEffect(() => {
    const sizeDetect = () => {
      if (window.innerWidth < 500) {
        setListItem(true);
      } else {
        setListItem(false);
      }
    };
    window.onresize = sizeDetect;
  });

  const onClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PortfolioList fixed={fixedPosition} ref={stickyRef}>
      <ListTitle>LIST</ListTitle>
      {portfolioDatas.map((data, index) => (
        <Portfolios
          onClick={() => onClickList(index, ref)}
          selected={ref.current[index] === currentTab}
          key={index}
          last={Boolean(index === portfolioDatas.length - 1)}
        >
          {listItem ? <PortfolioDotList /> : data.listTitle}
        </Portfolios>
      ))}
      <ListTopBtn onClick={onClickTop}>Top</ListTopBtn>
    </PortfolioList>
  );
});

const PortfolioDotList = styled(EmojiSmileUpsideDown)`
  width: 15px;
`;

const LineAccent = keyframes`
0%{
  width: 0;
}

100%{
  width: 100%;
}`;

const ListTopBtn = styled.div`
  position: relative;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
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
    /* background-color: ${props =>
      props.selected ? "rgba(254, 23, 162, 0.8)" : "none"}; */
  }
  :hover {
    color: white;
    font-weight: 300;
    ::before {
      content: "";
      background-color: rgba(254, 23, 162, 0.8);
      animation: ${LineAccent} 0.3s 1 ease-in forwards;
    }
  }
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const Portfolios = styled.div`
  position: relative;
  font-weight: 200;
  color: ${props => (props.selected ? "white" : "rgba(255, 255, 255, 0.5)")};
  padding-bottom: 20px;
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
      animation: ${LineAccent} 0.3s 1 ease-in forwards;
    }
  }
  @media screen and (max-width: 500px) {
    padding-left: 0px;
    text-align: center;
    padding: 5px 0px;
  }
`;

const ListTitle = styled.div`
  letter-spacing: 0.5em;
  font-weight: 400;
  padding: 3px;
  border-bottom: 0.5px solid;
  margin-bottom: 20px;
  text-align: left;
  /* border: 1px solid yellow; */
  @media screen and (max-width: 500px) {
    /* font-size: 10px; */
    /* font-weight: 400; */
    padding-left: 0px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const PortfolioList = styled.div`
  position: relative;
  top: 750px;
  left: -500px;
  padding: 20px;
  text-align: right;
  overflow: hidden;
  z-index: 999;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  /* border-radius: 10px; */

  /* border-top: 0.5px solid ${props => props.theme.lightWhiteColor};
  border-bottom: 0.5px solid ${props => props.theme.lightWhiteColor}; */
  ${props =>
    props.fixed &&
    css`
      position: fixed;
      top: 190px;
      left: 20px;
      /* padding: 0px 20px; */
    `}
  @media screen and (max-width: 500px) {
    position: relative;
    top: 350px;
    left: 0;
    width: 300px;
    padding: 5px 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    /* border: 1px solid red; */
    ${props =>
      props.fixed &&
      css`
        position: fixed;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        /* left: 50%;
        transform: translateX(-50%); */
      `}
  }
`;
export default PortfolioStickList;
