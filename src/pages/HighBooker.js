import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import one from "../assets/img/portfolio/1.png";
// import two from "../assets/img/portfolio/2.png";
import three from "../assets/img/portfolio/3.png";
import four from "../assets/img/portfolio/4.png";
import five from "../assets/img/portfolio/5.png";
import six from "../assets/img/portfolio/6.png";
import seven from "../assets/img/portfolio/7.png";
import eight from "../assets/img/portfolio/8.png";
import video from "../assets/img/portfolio/highmarket.mp4";
import {
  AboutContainer,
  BodyTitle,
  DetailBody,
  DetailBodyText,
  DetailBodyTextContainer,
  DetailBodyTitle,
  Title,
  TitleContainer,
  Container,
  Wrapper,
} from "./HighMarket";

const Portfolio = () => {
  const itemDatas = [
    { src: one },
    { vsrc: video },
    { src: three },
    { src: four },
    { src: five },
    { src: six },
    { src: seven },
    { src: eight },
  ];

  const onClick = () => {
    window.open("https://high-market.vercel.app/enter", "_blank");
  };

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | TAE KWAN</title>
      </Helmet>

      <AboutContainer>
        <TitleContainer>
          <Title onClick={onClick}>Portfolio</Title>
        </TitleContainer>
        <Container>
          <DetailBodyPort>
            <BodyTitle>Front-end</BodyTitle>
            <DetailBodyTextConatinerPort>
              <Wrapper>
                <DetailBodyTitle>Language</DetailBodyTitle>
                <DetailBodyText>Javascript</DetailBodyText>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>Framework</DetailBodyTitle>
                <DetailBodyText>React JS</DetailBodyText>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>CSS</DetailBodyTitle>
                <DetailBodyText>Styled-Components</DetailBodyText>
              </Wrapper>
              <Wrapper>
                <DetailBodyTitle>Deploy</DetailBodyTitle>
                <DetailBodyText>Netlify</DetailBodyText>
              </Wrapper>
            </DetailBodyTextConatinerPort>
          </DetailBodyPort>
        </Container>
        <Slider>
          {itemDatas.map((item, idx) => (
            <Item key={idx}>
              <ImageContainer>
                {item.vsrc ? (
                  <Video
                    // width={500}
                    // onMouseOver={e => e.target.play()}
                    // onMouseOut={e => e.target.pause()}
                    autoPlay={true}
                    muted="muted"
                  >
                    <source src={video} type="video/mp4" />
                  </Video>
                ) : (
                  <Image src={item.src} />
                )}
              </ImageContainer>
              <Background id="background" />
              <Back>
                <Text>abcdef</Text>
              </Back>
            </Item>
          ))}
        </Slider>
      </AboutContainer>
    </Layout>
  );
};

const DetailBodyPort = styled(DetailBody)`
  --radius-1: 1rem;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 130px;
  background-color: #1e1e1e;
  border-radius: var(--radius-1);
  /* border: 1px solid blue; */
  @media screen and (max-width: 1000px) {
    height: 270px;
  }

  @media screen and (max-width: 700px) {
    margin: 0px 20px 130px;
    height: 440px;
  }
`;
const DetailBodyTextConatinerPort = styled(DetailBodyTextContainer)`
  max-width: 1000px;
  /* bottom: 180px; */

  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Slider = styled.div`
  margin-bottom: 200px;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Item = styled.div`
  --radius-1: 1rem;
  --bgColor-back: #1e1e1e;
  width: 280px;
  height: 280px;
  /* transition: 300ms; */
  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
  display: flex;
  justify-content: center;
  position: relative;

  :hover {
    /* overflow: unset; */
    z-index: 10;
    box-shadow: none;
    div {
      transition: transform 200ms linear;
      transform: translateY(-20%);
      border-radius: var(--radius-1);

      video {
        width: 560px;
        /* height: 290px; */
        transition: transform 200ms linear;
        transform: scale(1.1);
        border-radius: var(--radius-1);
        border: 2px solid gray;
      }
      img {
        width: 560px;
        /* height: 290px; */
        transition: transform 200ms linear;
        transform: scale(1.1);
        border-radius: var(--radius-1);
        border: 2px solid gray;
      }
    }
    #background {
      /* transition: transform 300ms cubic-bezier(0.21, 1.06, 0.81, 1.01),
        opacity 100ms linear;
      transform: scale(2, 1.68);
      opacity: 1; */
    }
  }

  @media screen and (max-width: 1200px) {
    :hover {
      div {
        video {
          width: 480px;
          height: 260px;
        }
        img {
          width: 480px;
          height: 260px;
        }
      }
      #background {
        /* transform: scale(1.4, 1.5); */
      }
    }
  }
  @media screen and (max-width: 900px) {
    :hover {
      transform: translateY(15%);
      div {
        video {
          width: 440px;
          height: 230px;
        }
        img {
          width: 440px;
          height: 230px;
        }
      }
      #background {
        /* transform: scale(1.4, 1.5); */
      }
    }
  }
`;
const ImageContainer = styled.div`
  height: max-content;
  transition-property: transform;
  transition-duration: 100ms;
  /* border: 1px solid green; */

  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
`;

const Video = styled.video`
  width: 280px;
  height: 280px;

  object-fit: cover;
`;
const Image = styled.img`
  --ratio: 1.89;

  width: 280px;
  height: 280px;
  /* border-radius: var(--radius-1); */
  object-fit: cover;
`;
const Background = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--bgColor-back);
  z-index: -1;
  transform: scale(0.5);
  border-radius: 10px;
  opacity: 0;
  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
`;
const Back = styled.div`
  display: none;
`;
const Text = styled.div``;

export default Portfolio;
