import styled from "styled-components";
import { keyframes } from "styled-components";

const ScrollDown = () => {
  return (
    <ScrollDownContainer>
      <ScrollDownText>Scroll Down</ScrollDownText>
      <ScrollDownWrapper>
        <ScrollDownA />
        <ScrollDownB />
        <ScrollDownC />
      </ScrollDownWrapper>
    </ScrollDownContainer>
  );
};

const MouseScroll = keyframes`
  0% { 
    opacity: 0.2; 
  }
  50%  {
     opacity: 0.5;
     }
  100% { 
    opacity: 0.8; 
    }
`;
const ScrollText = keyframes`
0% {
    /* opacity: 0.5; */
    transform: translateY(0);
  }

  100% {
    /* opacity: 0.8; */
    transform: translateY(6px);
  }
`;

const ScrollDownContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  position: relative;
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin-top: 250px;
  /* border: 1px solid red; */
  @media screen and (max-width: 500px) {
    margin-top: 80px;
  }
`;

const ScrollDownText = styled.div`
  position: block;
  top: 0;
  margin: 0px auto 20px auto;
  width: 100px;
  /* height: 20px; */
  text-align: center;
  animation: ${ScrollText} 1s infinite alternate ease-in-out;
  color: ${props => props.theme.accentColor};
  /* border: 1px solid red; */
  @media screen and (max-width: 500px) {
    font-weight: 500;
  }
`;
const ScrollDownWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: block;
    transform: rotate(45deg);
    border-right: 2px solid ${props => props.theme.lightWhiteColor};
    border-bottom: 2px solid ${props => props.theme.lightWhiteColor};
    margin: 2px;
    width: 10px;
    height: 10px;
    animation: ${MouseScroll} 1s infinite alternate ease-in-out;
    /* border: 1px solid red; */
  }
`;
const ScrollDownA = styled.span``;
const ScrollDownB = styled.span``;
const ScrollDownC = styled.span``;

export default ScrollDown;
