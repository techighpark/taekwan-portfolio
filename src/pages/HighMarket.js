import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import highmarket from "../assets/img/high-market.png";
import main from "../assets/img/main.png";
import chat from "../assets/img/chat.png";
import product from "../assets/img/product.png";

const HighMarket = () => {
  return (
    <Layout>
      <Helmet>
        <title>High-Market | TAE KWAN</title>
      </Helmet>
      <AboutContainer>
        <TitleContainer>
          <Title>High Market</Title>
        </TitleContainer>
        <Container>
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

const TitleContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: start;
  margin-bottom: 50px;
  /* border: 1px solid white; */
`;
const Title = styled.div`
  font-size: 56px;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  /* border: 1px solid green; */
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* margin-top: 50px; */
  /* border: 1px solid blue; */
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
`;

const Text = styled.div``;
const TextContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 25px;
  /* border: 1px solid yellow; */
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
const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
  /* border: 0.5px solid green; */
  overflow: hidden;
  border: none;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;
const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 2000px;
  margin-top: 150px;

  /* border: 1px solid orange; */
`;

export default HighMarket;
