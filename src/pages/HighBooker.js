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
  const importAll = img => {
    return img.keys().map(img);
  };
  const images = importAll(
    require.context("../assets/img/booker", false, /\.(png|jpeg|svg)$/)
  );
  console.log(images);

  const onClick = () => {
    window.open("https://high-booker.netlify.app", "_blank");
  };

  const cardRef = useRef([]);

  function intersectionCallback(entries, observer) {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }

  useEffect(() => {
    var intersectionOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    var io = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );
    cardRef.current.forEach(el => {
      io.observe(el);
    });
  }, []);

  useEffect(() => {
    cardRef.current.forEach((item, idx) => {
      idx % 2 === 0
        ? (item.children[1].style.left = "0%")
        : (item.children[1].style.right = "0%");
    });
  }, []);
  useEffect(() => {
    cardRef.current.forEach((item, idx) => {
      console.log(item);
      idx % 2 === 0
        ? (item.children[0].style.left = "35%")
        : (item.children[0].style.left = "20%");
    });
  }, []);

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
            <Content ref={el => (cardRef.current[0] = el)}>
              <ContentTextContainer sizeHeight>
                <ContentHeaderWrapper>
                  <ContentHeaderText>Dark Mode</ContentHeaderText>
                </ContentHeaderWrapper>
                <ContentBodyWrapper>
                  <ContantBodyText>Using Styled-Components</ContantBodyText>
                </ContentBodyWrapper>
              </ContentTextContainer>
              <ContentBodyImageWrapper sizeHeight>
                <ContentBodyImage src={images[3]} />
              </ContentBodyImageWrapper>
            </Content>
            <Content ref={el => (cardRef.current[1] = el)}>
              <ContentTextContainer>
                <ContentHeaderWrapper>
                  <ContentHeaderText>Recommnad</ContentHeaderText>
                </ContentHeaderWrapper>
              </ContentTextContainer>
              <ContentBodyImageWrapper>
                <ContentBodyImage src={images[2]} />
              </ContentBodyImageWrapper>
            </Content>
            <Content ref={el => (cardRef.current[2] = el)}>
              <ContentTextContainer sizeHeight>
                <ContentHeaderWrapper>
                  <ContentHeaderText>Follow</ContentHeaderText>
                </ContentHeaderWrapper>
              </ContentTextContainer>
              <ContentBodyImageWrapper sizeHeight id="wide">
                <ContentBodyImage src={images[4]} sizeWide />
              </ContentBodyImageWrapper>
            </Content>
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
  width: 100%;
  height: 100%;
  max-width: 1500px;
  transition: all 0.5s;
  @media screen and (max-width: 1500px) {
    max-width: 1200px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 900px;
  }
  @media screen and (max-width: 700px) {
    max-width: 500px;
  }
`;

const Contents = styled.div`
  margin-top: 200px;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .show {
    opacity: 1;
  }
  .show > div:nth-child(1) {
    opacity: 1;
  }
  .show > div:nth-child(2) {
    width: 50%;
    /* right: 10%; */
    opacity: 1;
    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }
  .show > #wide {
    width: 700px;
  }

  .show img {
    transform: scale(1);
  }
`;

const Content = styled.div`
  height: 80vh;
  width: 100%;
  position: relative;
  inset: auto;
  opacity: 0;

  transition: opacity 1000ms;
`;

const ContentTextContainer = styled.div`
  position: absolute;
  opacity: 0;
  z-index: 2;
  top: ${props => (props.sizeHeight ? "240px" : "300px")};
  width: max-content;
  transition: opacity 1500ms;
  transition-delay: 800ms;
`;
const ContentHeaderWrapper = styled.div``;
const ContentHeaderText = styled.div`
  opacity: 1;
  font-size: 24px;
  font-weight: 600;
`;
const ContentBodyWrapper = styled.div``;
const ContantBodyText = styled.div`
  opacity: 1;

  font-size: 16px;
  font-weight: 500;
`;

const ContentBodyImageWrapper = styled.div`
  position: absolute;
  top: 0%;
  width: 1px;
  height: ${props => (props.sizeHeight ? "220px" : "400px")};
  opacity: 0;
  transition: opacity 1500ms, width 1500ms;
  overflow: hidden;
`;
const ContentBodyImage = styled.img`
  width: ${props => (props.sizeWide ? "700px" : "100%")};
  height: 100%;
  object-fit: cover;
  transition: 1000ms;
  transform: scale(1.6);
  filter: grayscale(100%);
`;

export default HighMarket;
