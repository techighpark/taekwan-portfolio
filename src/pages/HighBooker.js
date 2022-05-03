import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import {
  AboutContainer,
  BodyTitle,
  DetailBodyText,
  DetailBodyTextContainer,
  DetailBodyTitle,
  Title,
  TitleContainer,
  Container,
  Wrapper,
  DetailBody,
} from "./HighMarket";
import { useRef, useEffect } from "react";

const HighMarket = () => {
  // const contents = [
  //   { name: "name", body: "body" },
  //   { name: "A", body: "lorem is sidklfs" },
  //   { name: "C", body: "react react react " },
  //   { name: "D", body: "next next next" },
  //   { name: "E", body: "useref useref useref" },
  // ];

  const onClick = () => {
    window.open("https://high-booker.netlify.app", "_blank");
  };

  const cardRef = useRef([]);

  function intersectionCallback(entries, observer) {
    console.log(entries);
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }

  useEffect(() => {
    var intersectionOptions = {
      root: null,
      threshold: 1,
    };
    var io = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

    cardRef.current.forEach(el => {
      io.observe(el);
    });
  }, []);

  console.log(cardRef);

  return (
    <Layout>
      <Helmet>
        <title>High-Booker | TAE KWAN</title>
      </Helmet>
      <AboutContainer>
        <TitleContainer>
          <Title onClick={onClick}>High-Booker</Title>
        </TitleContainer>
        <Container>
          <DetailBodyBooker>
            <BodyTitle>Full Stack</BodyTitle>
            <DetailBodyTextContainer>
              <Wrapper>
                <DetailBodyTitle>Language</DetailBodyTitle>
                <DetailBodyText>Javascript</DetailBodyText>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>Framework</DetailBodyTitle>
                <DetailBodyText>React JS</DetailBodyText>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>DataBase</DetailBodyTitle>
                <DetailBodyText>Postgresql</DetailBodyText>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>ORM</DetailBodyTitle>
                <DetailBodyText>Prisma</DetailBodyText>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>CSS</DetailBodyTitle>
                <DetailBodyText>Styled-Components</DetailBodyText>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>Deploy</DetailBodyTitle>
                <DetailBodyText>Netlify</DetailBodyText>
              </Wrapper>
            </DetailBodyTextContainer>
          </DetailBodyBooker>
        </Container>
        <ContentContainer>
          <Contents>
            {[1, 2, 3, 4, 5].map((_, i) => {
              return (
                <CardContainer ref={el => (cardRef.current[i] = el)} key={i}>
                  <Card>
                    <Front>abcdefg</Front>
                    <Back>ㄱㄴㄷㄹㅁ</Back>
                  </Card>
                </CardContainer>
              );
            })}
            <CardContainer ref={el => (cardRef.current[5] = el)}>
              askflja;slkfj;askfj
            </CardContainer>
          </Contents>
        </ContentContainer>
      </AboutContainer>
    </Layout>
  );
};

const DetailBodyBooker = styled(DetailBody)`
  --radius-1: 1rem;
  width: 100%;
  margin-bottom: 130px;
  background-color: #1e1e1e;
  border-radius: var(--radius-1);
`;

const ContentContainer = styled.div`
  border: 0.5px solid white;
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  border: 0.5px solid blue;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .show {
    transform: translateX(0);
    opacity: 1;
    div {
      transform: rotateY(180deg);
    }
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 320px;
  transform: translateX(500px);
  opacity: 0;
  transition: all 1s;
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  transition: all 0.5s ease;
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
