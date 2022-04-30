import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import highmarket from "../assets/img/high-market-min.png";
import commentLike from "../assets/img/highmarket/commentLike.png";
import community from "../assets/img/highmarket/community.png";
import reserve from "../assets/img/highmarket/reserve.png";
import selling from "../assets/img/highmarket/selling.png";
import chat from "../assets/img/highmarket/chat.png";
import recommand from "../assets/img/highmarket/recommand.png";
import upload from "../assets/img/highmarket/upload.png";

const HighMarket = () => {
  const onClick = () => {
    window.open("https://high-market.vercel.app/enter", "_blank");
  };
  return (
    <Layout>
      <Helmet>
        <title>High-Market | TAE KWAN</title>
      </Helmet>

      <TitleContainer onClick={onClick}>
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
                  <Text>
                    <Accent>Twilio</Accent> for Phone Login
                    <Accent> Token</Accent>
                  </Text>
                  <Text>
                    <Accent>NodeMailer</Accent> for Email Login
                    <Accent> Token</Accent>
                  </Text>
                  <Text>
                    <Accent>Iron-Session</Accent> for
                    <Accent> Session</Accent>
                  </Text>
                </BodyTextContainer>
              </Body>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Upload</BodyTitle>
                <BodyTextContainer>
                  <Text>
                    <Accent>Cloudflare</Accent> for store, resize, optimize
                    <br />
                    and deliver images
                  </Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={upload} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Comment, Like</BodyTitle>
                <BodyTextContainer>
                  <Text>
                    <Accent>Incremental Static Regeneration </Accent>
                    <br />
                    for Comment and Like
                  </Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={commentLike} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Recommand</BodyTitle>
                <BodyTextContainer>
                  <Text>Recommand based on Product Name</Text>
                  <Text></Text>
                  <Text></Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={recommand} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Chat</BodyTitle>
                <BodyTextContainer>
                  <Text>
                    <Accent>Incremental Static Regeneration </Accent>
                    <br /> for Chat
                  </Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={chat}></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Reserve</BodyTitle>
                <BodyTextContainer>
                  <Text>Reservation to avoid double booking</Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={reserve}></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>List</BodyTitle>
                <BodyTextContainer>
                  <Text>Selling List</Text>
                  <Text>WishList</Text>
                  <Text>Purchased List</Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={selling} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <Body>
                <BodyTitle>Community</BodyTitle>
                <BodyTextContainer>
                  <Text>
                    Community based on <Accent>coordinates</Accent>
                  </Text>
                </BodyTextContainer>
              </Body>
              <ImageContainer>
                <Image src={community} />
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
  position: relative;
  font-size: 56px;
  font-weight: 700;
  cursor: pointer;

  &::after {
    content: "View Site";
    position: absolute;
    text-align: center;
    bottom: 100%;
    right: 0%;
    width: 60px;
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 2px;
    color: #cccccc;
    border-bottom: 1px solid ${props => props.theme.bgColor};
    box-sizing: border-box;
    transition: all 300ms;
  }
  :hover {
    &::after {
      color: white;
      border-bottom: 1px solid ${props => props.theme.accentColor};
    }
  }
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
  background-color: #1e1e1e;
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
`;
const BodyTextContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid yellow; */
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  line-height: 3;
  text-align: center;
`;
const Accent = styled.span`
  font-weight: 500;
  color: #cccccc;
`;

const ImageContainer = styled.div`
  width: 75%;
  height: 400px;
  overflow: hidden;
  position: absolute;
  top: -70px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
  transition-property: transform;
  transition-duration: 100ms;

  :hover {
    transform: scale(1.02);
  }
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
