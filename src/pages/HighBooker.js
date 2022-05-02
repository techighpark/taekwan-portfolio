import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const HighMarket = () => {
  // const onClick = () => {
  //   window.open("https://high-market.vercel.app/enter", "_blank");
  // };

  return (
    <Layout>
      <Helmet>
        <title>High-Market | TAE KWAN</title>
      </Helmet>

      <AboutContainer>
        <Container>
          <Card>
            <Front>Front</Front>
            <Back>Back</Back>
          </Card>
        </Container>
      </AboutContainer>
    </Layout>
  );
};

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

const Container = styled.div`
  position: relative;
  width: 250px;
  height: 320px;
`;

const cardFlip = keyframes`
0% {
  transform: rotateY(0deg);
}
50% {
  transform: rotateY(180deg);
}
100% {
  transform: rotateY(0deg);
}
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  transition: all 0.5s ease;
  /* animation: ${cardFlip} 2s linear infinite; */
  :hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background-color: goldenrod;
  color: black;
`;
const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background-color: green;
  color: white;

  transform: rotateY(180deg);
`;

export default HighMarket;
