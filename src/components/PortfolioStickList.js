import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import useScroll from "../hooks/useScroll";
import useSticky from "../hooks/useSticky";
import { portfolioDatas } from "../assets/portfolioDatas";
import smoothscroll from "smoothscroll-polyfill";

// import { EmojiSmileUpsideDown } from "@styled-icons/bootstrap/EmojiSmileUpsideDown";

const PortfolioStickList = React.forwardRef((props, ref) => {
  const { currentTab, onClickList } = useScroll("");
  const [listItem, setListItem] = useState(window.innerWidth < 500);
  const { fixedPosition, stickyRef } = useSticky(false, listItem);
  useEffect(() => {
    const sizeDetect = () => {
      if (window.innerWidth < 700) {
        setListItem(true);
      } else {
        setListItem(false);
      }
    };
    window.onresize = sizeDetect;
  });

  const onClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    smoothscroll.polyfill();
  };

  return (
    <PortfolioList fixed={fixedPosition} ref={stickyRef}>
      <ListTitle>LIST</ListTitle>
      {portfolioDatas.map((data, index) => (
        <Portfolios
          onClick={() => onClickList(index, ref)}
          selected={ref.current[index] === currentTab}
          key={index}
          // last={Boolean(index === ref.current.length - 1)}
        >
          {listItem ? index + 1 : data.listTitle}
        </Portfolios>
      ))}
      <PortfoliosTitle onClick={onClickTop}>Top</PortfoliosTitle>
    </PortfolioList>
  );
});

const Portfolios = styled.div`
  position: relative;
  font-weight: 300;
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

  :hover {
    ::first-letter {
      color: ${props => props.theme.accentColor};
    }
    color: white;
    /* font-weight: 300; */
  }
  @media screen and (max-width: 1200px) {
    padding-left: 0px;
    text-align: center;
    padding: 5px 0px;
    width: 150px;
    font-weight: 500;

    ::first-letter {
      color: ${props =>
        props.selected ? "white" : "rgba(255, 255, 255, 0.5)"};
    }
    /* ::before {
      height: 3px;
    } */
  }
  @media screen and (max-width: 1000px) {
    width: 150px;
    /* border: 1px solid red; */
  }
  @media screen and (max-width: 700px) {
    width: 20px;
  }
`;
const PortfoliosTitle = styled(Portfolios)`
  width: 100%;
  /* border: 1px solid yellow; */
  @media screen and (max-width: 1000px) {
    width: 50px;
  }
`;

const ListTitle = styled.div`
  letter-spacing: 0.5em;
  font-weight: 600;
  padding: 3px;
  border-bottom: 0.5px solid;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  /* border: 1px solid yellow; */

  @media screen and (max-width: 1200px) {
    /* font-size: 10px; */
    /* font-weight: 400; */
    border: none;
    width: 100px;

    padding-left: 0px;
    letter-spacing: 0em;
    margin-bottom: 0px;
    text-align: center;
    font-weight: 500;
  }
  @media screen and (max-width: 1000px) {
    width: 50px;
  }
  @media screen and (max-width: 700px) {
    width: 20px;
  }
`;

const PortfolioList = styled.div`
  position: absolute;
  top: 970px;
  left: 0;
  padding: 20px 15px 10px 15px;
  text-align: right;
  overflow: hidden;
  z-index: 999;
  display: flex;
  flex-direction: column;
  background-color: #2f3030;
  /* opacity: 0.8; */
  border-radius: 10px;
  /* border-top: 0.5px solid ${props => props.theme.lightWhiteColor};
  border-bottom: 0.5px solid ${props => props.theme.lightWhiteColor}; */

  ${props =>
    props.fixed &&
    css`
      position: fixed;
      top: 150px;
      left: 20px;
      /* padding: 0px 20px; */
    `}
  @media
    screen
    and
    (max-width: 1200px) {
    position: relative;
    top: 400px;
    left: 0;
    width: 90vw;
    height: 40px;
    padding: 5px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #2f3030;
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
