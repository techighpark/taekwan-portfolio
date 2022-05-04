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
  IconWrapper,
} from "./HighMarket";
import { useRef, useEffect } from "react";
import {
  HerokuIcon,
  JavascriptIcon,
  NetlifyIcon,
  PostgresqlIcon,
  PrismaIcon,
  ReactLogoIcon,
  StyledcomponentsIcon,
} from "../assets/Icons";

const HighMarket = () => {
  const importAll = img => {
    return img.keys().map(img);
  };
  const images = importAll(
    require.context("../assets/img/booker", false, /\.(png|jpeg|svg)$/)
  );

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
      threshold: 0.3,
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
        ? (item.children[0].style.left = "0%")
        : (item.children[0].style.right = "0%");
    });
  }, []);
  useEffect(() => {
    cardRef.current.forEach((item, idx) => {
      idx % 2 === 0
        ? (item.children[0].style.top = "20%")
        : (item.children[0].style.top = "10%");
    });
  }, []);

  useEffect(() => {
    cardRef.current.forEach((item, idx) => {
      idx % 2 === 0
        ? (item.children[1].style.left = "70%")
        : (item.children[1].style.left = "12%");
    });
  }, []);
  useEffect(() => {
    cardRef.current.forEach((item, idx) => {
      console.log(item);
      idx % 2 === 0
        ? (item.children[1].style.top = "25%")
        : (item.children[1].style.top = "40%");
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
                <IconWrapper>
                  <JavascriptIcon />
                </IconWrapper>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>Framework</DetailBodyTitle>
                <DetailBodyText>React JS</DetailBodyText>
                <IconWrapper>
                  <ReactLogoIcon />
                </IconWrapper>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>DataBase</DetailBodyTitle>
                <DetailBodyText>Postgresql</DetailBodyText>
                <IconWrapper>
                  <PostgresqlIcon />
                </IconWrapper>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>ORM</DetailBodyTitle>
                <DetailBodyText>Prisma</DetailBodyText>
                <IconWrapper>
                  <PrismaIcon />
                </IconWrapper>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>CSS</DetailBodyTitle>
                <DetailBodyText>Styled-Components</DetailBodyText>
                <IconWrapper>
                  <StyledcomponentsIcon />
                </IconWrapper>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>Deploy</DetailBodyTitle>
                <DetailBodyText>Netlify &amp; Heroku</DetailBodyText>
                <IconWrapper>
                  <NetlifyIcon />
                  <HerokuIcon />
                </IconWrapper>
              </Wrapper>
            </DetailBodyTextContainer>
          </DetailBodyBooker>
        </Container>
        <ContentContainer>
          <Contents>
            <Content ref={el => (cardRef.current[0] = el)}>
              <ContentImageContainer>
                <ContentBodyImage src={images[5]} />
              </ContentImageContainer>
              <ContentTextContainer>
                <ContentHeaderWrapper>
                  <ContentHeaderText>Reader's Social Network</ContentHeaderText>
                </ContentHeaderWrapper>
                <ContentBodyTextWrapper>
                  <ContantBodyText>Follow Authors and Books</ContantBodyText>
                </ContentBodyTextWrapper>
                <ContentBodyTextWrapper>
                  <ContantBodyText>
                    Authentication & Authorization - jwt
                  </ContantBodyText>
                </ContentBodyTextWrapper>
              </ContentTextContainer>
            </Content>
            <Content ref={el => (cardRef.current[1] = el)}>
              <ContentImageContainer>
                <ContentBodyImage src={images[4]} />
              </ContentImageContainer>
              <ContentTextContainer>
                <ContentHeaderWrapper>
                  <ContentHeaderText>Dark Mode</ContentHeaderText>
                </ContentHeaderWrapper>
                <ContentBodyTextWrapper>
                  <ContantBodyText>Using Styled-Components</ContantBodyText>
                </ContentBodyTextWrapper>
              </ContentTextContainer>
            </Content>
            <Content ref={el => (cardRef.current[2] = el)}>
              <ContentImageContainer long>
                <ContentBodyImage src={images[2]} />
              </ContentImageContainer>
              <ContentTextContainer>
                <ContentHeaderWrapper>
                  <ContentHeaderText>Recommand</ContentHeaderText>
                </ContentHeaderWrapper>
                <ContentBodyTextWrapper>
                  <ContantBodyText>
                    Based on your following list
                  </ContantBodyText>
                </ContentBodyTextWrapper>
              </ContentTextContainer>
            </Content>
            <Content ref={el => (cardRef.current[3] = el)}>
              <ContentImageContainer>
                <ContentBodyImage src={images[7]} />
              </ContentImageContainer>
              <ContentTextContainer>
                <ContentHeaderWrapper>
                  <ContentHeaderText>Profile</ContentHeaderText>
                </ContentHeaderWrapper>
                <ContentBodyTextWrapper>
                  <ContantBodyText>
                    You can see post, following authors
                    <br /> and following books in profile
                  </ContantBodyText>
                </ContentBodyTextWrapper>
              </ContentTextContainer>
            </Content>
            <Content ref={el => (cardRef.current[4] = el)}>
              <ContentImageContainer shortImg>
                <ContentBodyImage src={images[3]} />
              </ContentImageContainer>
              <ContentTextContainer>
                <ContentHeaderWrapper>
                  <ContentHeaderText>Follow</ContentHeaderText>
                </ContentHeaderWrapper>
                <ContentBodyTextWrapper>
                  <ContantBodyText>
                    You can follow users who you want
                    <br /> Also authors and books you can follow
                  </ContantBodyText>
                </ContentBodyTextWrapper>
              </ContentTextContainer>
            </Content>
            <Content ref={el => (cardRef.current[5] = el)} last>
              <ContentImageContainer>
                <ContentBodyImage src={images[8]} bottom />
              </ContentImageContainer>
              <ContentTextContainer>
                <ContentHeaderWrapper>
                  <ContentHeaderText>Upload Post</ContentHeaderText>
                </ContentHeaderWrapper>
                <ContentBodyTextWrapper>
                  <ContantBodyText>
                    Upload post related to authors or books
                  </ContantBodyText>
                  <ContantBodyText>
                    Post related to a book can be uploaded only once
                  </ContantBodyText>
                </ContentBodyTextWrapper>
              </ContentTextContainer>
            </Content>
          </Contents>
        </ContentContainer>
      </AboutContainer>
    </Layout>
  );
};

const DetailBodyBooker = styled(DetailBody)`
  --radius-1: 1rem;
  /* width: 100%; */
  margin-bottom: 50px;
  background-color: #1e1e1e;
  border-radius: var(--radius-1);
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1500px;
  transition: all 0.5s;
  @media screen and (max-width: 1500px) {
    max-width: 1400px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 1000px;
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
    width: 50vw;
    opacity: 1;
    transition: opacity 0s, width 1000ms, shadow 1000ms;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
  }
  .show > div:nth-child(2) {
    opacity: 1;
    transition: 3s;
  }

  .show img {
    transform: scale(1);
    transition: 1s ease-out;
  }

  @media screen and (max-width: 700px) {
    .show > div:nth-child(1) {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  height: ${props => (props.last ? "60vh" : "100vh")};
  width: 100%;
  position: relative;
  inset: auto;
  opacity: 0;
  transition: opacity 500ms;

  @media screen and (max-width: 700px) {
  }
`;

const ContentTextContainer = styled.div`
  position: absolute;
  opacity: 0;
  z-index: 2;
  top: 70%;
  width: max-content;
  transition: 0.5s;
  transition-delay: 300ms;
  @media screen and (max-width: 700px) {
    position: initial;
    margin-top: 30px;
  }
`;
const ContentHeaderWrapper = styled.div`
  margin-bottom: 20px;
`;
const ContentHeaderText = styled.div`
  opacity: 1;
  font-size: 20px;
  font-weight: 600;
`;
const ContentBodyTextWrapper = styled.div``;
const ContantBodyText = styled.div`
  opacity: 1;
  font-size: 14px;
  color: ${props => props.theme.lightWhiteColor};
  font-weight: 400;
  line-height: 2;
`;

const ContentImageContainer = styled.div`
  position: absolute;
  top: 40%;
  height: ${props => (props.shortImg ? "30%" : "60%")};

  width: 1px;
  opacity: 0;
  /* max-width: 800px; */
  overflow: hidden;
  border-radius: 10px;
  /* border: 1px solid white; */

  @media screen and (max-width: 1200px) {
    height: 50%;
  }
  @media screen and (max-width: 900px) {
    height: 40%;
  }
  @media screen and (max-width: 700px) {
    height: 30%;
    position: initial;
  }
`;

const ContentBodyImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100%;
  object-fit: cover;
  object-position: ${props => (props.bottom ? "bottom" : "top")};
  transition: 1500ms;
  transform: scale(1.6);
  filter: brightness(1);

  @media screen and (max-width: 700px) {
    width: 100%;
    position: initial;
  }
`;

export default HighMarket;
