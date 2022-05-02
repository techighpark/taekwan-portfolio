import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import homei from "../assets/img/portfolio/porthome.png";
import homev from "../assets/img/portfolio/porthome.mp4";
import worksi from "../assets/img/portfolio/portwokrs.png";
import worksv from "../assets/img/portfolio/portwokrs.mp4";
import abouti from "../assets/img/portfolio/portabout.png";
import aboutv from "../assets/img/portfolio/portabout.mp4";
import skillsi from "../assets/img/portfolio/portskills.png";
import skillsv from "../assets/img/portfolio/portskills.mp4";
import highmarketi from "../assets/img/portfolio/porthighmarket.png";
import highmarketv from "../assets/img/portfolio/porthighmarket.mp4";
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
    { src: homei, vsrc: homev },
    { src: worksi, vsrc: worksv },
    { src: abouti, vsrc: aboutv },
    { src: skillsi, vsrc: skillsv },
    { src: highmarketi, vsrc: highmarketv },
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
                <Video loop autoPlay={true} muted="muted" playsInline>
                  <source src={item.vsrc} type="video/mp4" />
                </Video>
                {/* <Image src={item.src} /> */}
              </ImageContainer>
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
  @media screen and (max-width: 1200px) {
    height: 270px;
  }
  @media screen and (max-width: 700px) {
    height: 420px;
  }
`;
const DetailBodyTextConatinerPort = styled(DetailBodyTextContainer)`
  max-width: 1000px;

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
  width: 300px;
  height: 300px;
  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
  display: flex;
  justify-content: center;
  :hover {
    z-index: 10;
    box-shadow: none;
    div {
      transition: transform 300ms linear;
      transform: translateY(-20%);

      video {
        width: 560px;
        transition: transform 300ms linear;
        transform: scale(1.1);
      }

      img {
        width: 560px;
        transition: transform 300ms linear;
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    :hover {
      transform: translateY(10%);
      div {
        video {
          width: 500px;
          height: 260px;
        }
        img {
          width: 500px;
          height: 260px;
        }
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
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin-bottom: 40px;

    :hover {
      box-shadow: none;
      transform: none;
      div {
        transition: none;
        transform: none;
        border-radius: none;

        video {
          width: 350px;
          height: 100%;
          transition: none;
          transform: none;
          border-radius: none;
          border: 2px solid gray;
        }

        img {
          width: 350px;
          height: 100%;

          transition: none;
          transform: none;
          border-radius: none;
          border: 2px solid gray;
        }
      }
    }
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  height: max-content;
  transition-property: transform;
  transition-duration: 100ms;
  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
`;

const Video = styled.video`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid gray;

  @media screen and (max-width: 600px) {
    width: 350px;
    height: 100%;
    border: 1px solid gray;
  }
`;
// const Image = styled.img`
//   width: 300px;
//   height: 300px;
//   object-fit: cover;
//   border: 2px solid gray;

//   @media screen and (max-width: 600px) {
//     width: 350px;
//     height: 100%;
//     border: 2px solid gray;
//   }
// `;

export default Portfolio;
