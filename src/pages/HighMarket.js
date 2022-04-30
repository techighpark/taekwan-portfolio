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
      <TitleContainer>
        <Title>High Market</Title>
      </TitleContainer>
      <AboutContainer>
        <Container>
          <Grid>
            <DetailContainerMain>
              {/* <ImageContainer>
                <Image src={highmarket} />
              </ImageContainer> */}
              <DetailBody>
                <BodyTitle>FullStack</BodyTitle>
                <DetailBodyTextContainer>
                  <Wrapper>
                    <DetailBodyTitle>Language</DetailBodyTitle>
                    <DetailBodyText>Typescript</DetailBodyText>
                  </Wrapper>
                  <Wrapper>
                    <DetailBodyTitle>Framework</DetailBodyTitle>
                    <DetailBodyText>Next JS</DetailBodyText>
                  </Wrapper>
                  <Wrapper>
                    <DetailBodyTitle>DataBase</DetailBodyTitle>
                    <DetailBodyText>PlanetScale</DetailBodyText>
                  </Wrapper>
                  <Wrapper>
                    <DetailBodyTitle>ORM</DetailBodyTitle>
                    <DetailBodyText>Prisma</DetailBodyText>
                  </Wrapper>
                  <Wrapper>
                    <DetailBodyTitle>CSS</DetailBodyTitle>
                    <DetailBodyText>Tailwindcss</DetailBodyText>
                  </Wrapper>
                  <Wrapper>
                    <DetailBodyTitle>Deploy</DetailBodyTitle>
                    <DetailBodyText>Vercel</DetailBodyText>
                  </Wrapper>
                </DetailBodyTextContainer>
              </DetailBody>
            </DetailContainerMain>
            <DetailContainer>
              <ImageContainer>
                <Image src={highmarket} />
              </ImageContainer>
              <Body>
                <BodyTitle>Authentication</BodyTitle>
                <BodyTextContainer>
                  <Text>Twilio / NodeMailer </Text>
                  <Text>Email or Phone number login</Text>
                  <Text>Using &rarr; Token &rarr; Session</Text>
                </BodyTextContainer>
              </Body>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Main Page</BodyTitle>
                <BodyTextContainer>
                  <Text></Text>
                  <Text></Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={main} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Upload Page</BodyTitle>
                <Text>Product / Upload</Text>
                <BodyTextContainer>
                  <Text></Text>
                  <Text></Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Product Page</BodyTitle>
                <Text>Like / Comment / Chat / Recommand</Text>
                <BodyTextContainer>
                  <Text></Text>
                  <Text></Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={product} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Community</BodyTitle>
                <BodyTextContainer>
                  <Text>Coords based / Answer</Text>
                  <Text></Text>
                  <Text></Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Chat Page</BodyTitle>
                <BodyTextContainer>
                  <Text>Chat / Reserve / Done</Text>
                  <Text></Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={chat}></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Profile Page</BodyTitle>
                <BodyTextContainer>
                  <Text>Sold / Purchased / Watchlist</Text>
                  <Text></Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Profile Eidt Page</BodyTitle>
                <BodyTextContainer>
                  <Text>Change</Text>
                  <Text></Text>
                  <Text></Text>
                </BodyTextContainer>
              </Body>
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
  width: 900px;
  height: 100%;
  max-width: 2000px;
  margin-top: 100px;

  /* border: 1px solid orange; */
  @media screen and (max-width: 500px) {
    /* width: 100%; */
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  margin-top: 150px;

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
  padding: 15px;
  /* border: 1px solid blue; */
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 30px;
  row-gap: 130px;
  /* margin-top: 50px; */
  width: 100%;
  /* border: 1px solid orange; */
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 130px;
    /* background-color: red; */
  }
`;

const DetailContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: #323232;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3),
    8px 4px 6px -4px rgb(0 0 0 / 0.3);
  /* border: 1px solid orange; */
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const DetailContainerMain = styled(DetailContainer)`
  height: 270px;
  grid-column: span 2 / span 2;
  @media screen and (max-width: 500px) {
    grid-column: span 1 / span 1;
    height: 360px;
  }
`;

const Body = styled.div`
  position: absolute;
  bottom: 0px;
  height: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 25px;
  /* border: 1px solid green; */
`;
const DetailBody = styled(Body)`
  /* border: 1px solid green; */
  height: 270px;
  position: unset;
  padding-top: 30px;
  @media screen and (max-width: 500px) {
    height: 360px;
  }
`;

const BodyTitle = styled.div`
  /* width: 100%; */
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  /* border: 1px solid yellow; */
`;
const BodyTextContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Text = styled.div``;

const ImageContainer = styled.div`
  width: 85%;
  height: 400px;
  overflow: hidden;
  position: absolute;
  top: -70px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: brightness(90%) contrast(110%);

  /* border-radius: 1rem; */

  /* filter: brightness(80%) contrast(110%) grayscale(30%) saturate(110%)
    sepia(10%); */
  /* filter: grayscale(100%); */
`;

const DetailBodyTextContainer = styled.div`
  /* border: 1px solid yellow; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 0 20px 0 20px;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrapper = styled.div`
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #e5e5e5;
  padding: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 1), 0 4px 6px -4px rgb(0 0 0 / 1);
  transition-property: transform;
  transition-duration: 100ms;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
  }
`;
const DetailBodyTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: black;
  padding-top: 5px;
  padding-bottom: 10px;
`;
const DetailBodyText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #5d5d5d;
`;

export default HighMarket;
