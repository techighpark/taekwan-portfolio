import styled from "styled-components";
import { keyframes } from "styled-components";
import smoothscroll from "smoothscroll-polyfill";

const TopArrow = () => {
  const onClickTopArrow = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    smoothscroll.polyfill();
  };
  return (
    <TopArrowP onClick={onClickTopArrow}>
      <TopArrowCA />
      <TopArrowCB />
      <TopArrowCC />
    </TopArrowP>
  );
};

const TopArrowAnimation = keyframes`
0%{
  opacity:0;
  transform:rotate(45deg) translate(10px,10px);
}
50%{
  opacity:1 ;
}
100%{
  opacity: 0;
  transform: rotate(45deg) translate(-10px,-10px);
}
`;

const TopArrowP = styled.div`
  position: absolute;
  bottom: 210px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  /* border: 1px solid white; */
  & span {
    display: block;
    width: 12px;
    height: 12px;
    border-top: 2px solid ${props => props.theme.accentColor};
    border-left: 2px solid ${props => props.theme.accentColor};
    transform: rotate(45deg);
    margin: -5px;
    animation: ${TopArrowAnimation} 2s infinite;
  }
  & span:nth-child(2) {
    animation-delay: -0.2s;
  }
  & span:nth-child(1) {
    animation-delay: -0.4s;
  }
  @media screen and(max-width: 500px) {
    /* bottom: 120px; */
  }
`;
const TopArrowCA = styled.span``;
const TopArrowCB = styled.span``;
const TopArrowCC = styled.span``;

export default TopArrow;
