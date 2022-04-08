import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import useScroll from "../hooks/useScroll";
import useSticky from "../hooks/useSticky";
import { portfolioDatas } from "../assets/portfolioDatas";
// import { EmojiSmileUpsideDown } from "@styled-icons/bootstrap/EmojiSmileUpsideDown";

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
          {listItem ? data.listNum : data.listTitle}
        </Portfolios>
      ))}
      <PortfoliosTitle onClick={onClickTop}>Top</PortfoliosTitle>
    </PortfolioList>
  );
});

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
  color: ${props =>
    props.selected ? props.theme.fontColor : props.theme.lightWhiteColor};
  padding-bottom: 30px;
  cursor: pointer;
  width: 200px;
  height: 20px;

  ::first-letter {
    color: ${props =>
      props.selected ? props.theme.accentColor : props.theme.fontColor};
  }

  /* ::before {
    content: "";
    position: absolute;
    bottom: 8px;
    right: 0px;
    height: 1px;
    width: 100%;
    z-index: -1;
    ${props =>
    props.selected &&
    css`
      background-color: ${props => props.theme.accentColor};
    `}
  } */
  /* border: 1px solid; */

  :hover {
    ::first-letter {
      color: ${props => props.theme.accentColor};
    }
    /* color: white; */
    font-weight: 300;
    /* ::before {
      content: "";
      background-color: ${props => props.theme.accentColor};
      animation: ${LineAccent} 0.3s 1 ease-in forwards;
    } */
  }
  @media screen and (max-width: 500px) {
    padding-left: 0px;
    text-align: center;
    padding: 5px 0px;
    width: 20px;

    ::first-letter {
      color: ${props =>
        props.selected ? "white" : "rgba(255, 255, 255, 0.5)"};
    }
    /* ::before {
      height: 3px;
    } */
  }
`;
const PortfoliosTitle = styled(Portfolios)``;

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
  position: absolute;
  top: 750px;
  left: 0;
  padding: 20px 15px 10px 15px;
  text-align: right;
  overflow: hidden;
  z-index: 999;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  /* border-top: 0.5px solid ${props => props.theme.lightWhiteColor}; */
  /* border-bottom: 0.5px solid ${props => props.theme.lightWhiteColor}; */

  ${props =>
    props.fixed &&
    css`
      position: fixed;
      top: 130px;
      left: 20px;
      /* padding: 0px 20px; */
    `}
  @media
    screen
    and
    (max-width: 500px) {
    position: relative;
    top: 350px;
    left: 0;
    width: 300px;
    padding: 5px 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
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
