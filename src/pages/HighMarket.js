import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import highmarket from "../assets/img/high-market-min.png";
import main from "../assets/img/highmarket/main-min.png";
import chat from "../assets/img/highmarket/chat-min.png";
import product from "../assets/img/highmarket/product-min.png";

const HighMarket = () => {
  return (
    <Layout>
      <Helmet>
        <title>High-Market | TAE KWAN</title>
      </Helmet>
      <AboutContainer>
        <Container>
          <TitleContainer>
            <Title>High Market</Title>
          </TitleContainer>
          <Grid>
            <DetailContainer>
              <TextContainer>
                <Text>Login / Confirm / Token / Session</Text>
              </TextContainer>
              <ImageContainer>
                <Image src={highmarket} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <TextContainer>
                <Text>Home</Text>
              </TextContainer>
              <ImageContainer>
                <Image src={main} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <TextContainer>
                <Text>Product / Upload</Text>
              </TextContainer>
              <ImageContainer>
                <Image></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <TextContainer>
                <Text>Product / Like / Comment / Chat / Recommand</Text>
              </TextContainer>
              <ImageContainer>
                <Image src={product} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <TextContainer>
                <Text>Community / Write</Text>
              </TextContainer>
              <ImageContainer>
                <Image></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <TextContainer>
                <Text>Chat / Reserve / Done</Text>
              </TextContainer>
              <ImageContainer>
                <Image src={chat}></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <TextContainer>
                <Text>Chat / Reserve / Done</Text>
              </TextContainer>
              <ImageContainer>
                <Image></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <TextContainer>
                <Text>Chat / Reserve / Done</Text>
              </TextContainer>
              <ImageContainer>
                <Image></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <TextContainer>
                <Text>Chat / Reserve / Done</Text>
              </TextContainer>
              <ImageContainer>
                <Image></Image>
              </ImageContainer>
            </DetailContainer>
          </Grid>
        </Container>
      </AboutContainer>
    </Layout>
  );
};

const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 2000px;
  margin-top: 150px;

  border: 1px solid orange;
`;

const TitleContainer = styled.div`
  /* display: flex; */
  /* justify-content: start; */
  margin-bottom: 50px;
  /* border: 1px solid white; */
  @media screen and (max-width: 500px) {
    /* width: 100%; */
  }
`;

const Title = styled.div`
  font-size: 56px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    font-weight: 600;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 50px; */
  border: 1px solid blue;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  border: 1px solid green;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 30px;
  }
`;

const DetailContainer = styled.div`
  width: 400px;
  height: 600px;
  background-color: #202124;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 25px;
  /* border: 1px solid yellow; */
`;
const Text = styled.div``;

const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
  /* border: 0.5px solid green; */
  overflow: hidden;
  border: none;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;

  /* filter: brightness(80%) contrast(110%) grayscale(30%) saturate(110%)
    sepia(10%); */
  /* filter: grayscale(100%); */
`;

export default HighMarket;
