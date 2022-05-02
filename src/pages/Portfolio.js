import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import one from "../assets/img/portfolio/1.png";
import two from "../assets/img/portfolio/2.png";
import three from "../assets/img/portfolio/3.png";
import four from "../assets/img/portfolio/4.png";
import five from "../assets/img/portfolio/5.png";
import six from "../assets/img/portfolio/6.png";
import seven from "../assets/img/portfolio/7.png";
import eight from "../assets/img/portfolio/8.png";
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
import { useEffect, useRef } from "react";

const Portfolio = () => {
  const itemDatas = [
    { src: one },
    { src: two },
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

  const boxref = useRef([]);

  function intersectionCallback(entries, observer) {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      // if (entry.intersectionRatio !== 0.7) observer.unobserve(entry.target);
    });
  }

  useEffect(() => {
    var intersectionOptions = {
      root: null, // .container class를 가진 엘리먼트를 root로 설정. null일 경우 브라우저 viewport
      rootMargin: "300px -200px 300px -20px", // rootMargin을 '10px 10px 10px 10px'로 설정
      threshold: 1,
    };
    var io = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

    boxref.current.forEach(el => {
      io.observe(el);
    });
  }, []);

  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   if (!boxref.current) return;
  //   const offset = window.innerWidth / 2;
  //   boxref.current.forEach(ref => {
  //     if (ref.getBoundingClientRect().left < offset) {
  //       setShow(true);
  //     }
  //     if (ref.getBoundingClientRect().right < offset) {
  //       setShow(false);
  //     }
  //   });
  // }, []);
  // console.log(show);

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
            <ItemContainer key={idx}>
              <Item ref={el => (boxref.current[idx] = el)} className="">
                <ImageContainer>
                  <Image src={item.src} />
                </ImageContainer>
              </Item>
            </ItemContainer>
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
  --spacer: 1rem;
  --radius-1: 1rem;
  /* border: 2px solid orange; */
  display: grid;
  gap: 10%;
  grid-auto-flow: column;
  grid-auto-columns: 50%;
  margin-bottom: 200px;
  width: 100%;

  padding-left: 15%;
  padding-right: 15%;

  overflow-x: auto;
  overscroll-behavior-inline: contain;

  scroll-snap-type: inline mandatory;
  /* scroll-padding-inline: 1rem;  */
  /* background-color: red; */
  div {
    border: 1px solid green;
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
  /* .show {
    border: 2px solid white;
    opacity: 1;
    transform-origin: bottom;
  } */

  @media screen and (max-width: 1000px) {
    overflow-x: scroll;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ItemContainer = styled.div`
  /* border: 1px solid white; */
  height: 700px;
  /* width: 1000px; */
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Item = styled.div`
  --bgColor-back: #1e1e1e;
  width: 50%;
  display: grid;
  grid-template-rows: min-content;
  gap: var(--spacer);
  padding: 50px 50px 100px;

  background-color: var(--bgColor-back);
  border-radius: var(--radius-1);

  transition: 200ms;
  opacity: 0.2;

  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
  @media screen and (max-width: 1000px) {
    padding: 20px 20px 100px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-1);
  overflow: hidden;
  transition-property: transform;
  transition-duration: 100ms;
  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
  /* :hover {
    transform: scale(1.02);
  } */
`;
const Image = styled.img`
  --ratio: 1.89;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Portfolio;
