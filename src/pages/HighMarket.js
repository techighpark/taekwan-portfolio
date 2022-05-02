import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import main from "../assets/img/highmarket/main.png";
import commentLike from "../assets/img/highmarket/commentLike.png";
import community from "../assets/img/highmarket/community.png";
import reserve from "../assets/img/highmarket/reserve.png";
import selling from "../assets/img/highmarket/selling.png";
import chat from "../assets/img/highmarket/chat.png";
import recommand from "../assets/img/highmarket/recommand.png";
import upload from "../assets/img/highmarket/upload.png";
import { useEffect } from "react";

const HighMarket = () => {
  const onClick = () => {
    window.open("https://high-market.vercel.app/enter", "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>High-Market | TAE KWAN</title>
      </Helmet>

      <AboutContainer>
        <TitleContainer>
          <Title onClick={onClick}>High Market</Title>
        </TitleContainer>
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
                <Image src={main} />
              </ImageContainer>
              <DetailContent>
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
              </DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailContent>
                <BodyTitle>Upload</BodyTitle>
                <BodyTextContainer>
                  <Text>
                    <Accent>Cloudflare</Accent> for store, resize, optimize
                    <br />
                    and deliver images
                  </Text>
                </BodyTextContainer>
              </DetailContent>
              <ImageContainer>
                <Image src={upload} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailContent>
                <BodyTitle>Comment, Like</BodyTitle>
                <BodyTextContainer>
                  <Text>
                    <Accent>Incremental Static Regeneration </Accent>
                    <br />
                    for Comment and Like
                  </Text>
                </BodyTextContainer>
              </DetailContent>
              <ImageContainer>
                <Image src={commentLike} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailContent>
                <BodyTitle>Recommand</BodyTitle>
                <BodyTextContainer>
                  <Text>Recommand based on Product Name</Text>
                  <Text></Text>
                  <Text></Text>
                </BodyTextContainer>
              </DetailContent>
              <ImageContainer>
                <Image src={recommand} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailContent>
                <BodyTitle>Chat</BodyTitle>
                <BodyTextContainer>
                  <Text>
                    <Accent>Incremental Static Regeneration </Accent>
                    <br /> for Chat
                  </Text>
                </BodyTextContainer>
              </DetailContent>
              <ImageContainer>
                <Image src={chat}></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailContent>
                <BodyTitle>Reserve</BodyTitle>
                <BodyTextContainer>
                  <Text>Reservation to avoid double booking</Text>
                  <Text>
                    <Accent>Server Side Props + SWR - Bound Mutate</Accent>
                    <br /> for Reserve
                  </Text>
                </BodyTextContainer>
              </DetailContent>
              <ImageContainer>
                <Image src={reserve}></Image>
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailContent>
                <BodyTitle>List</BodyTitle>
                <BodyTextContainer>
                  <Text>Selling List</Text>
                  <Text>WishList</Text>
                  <Text>Purchased List</Text>
                </BodyTextContainer>
              </DetailContent>
              <ImageContainer>
                <Image src={selling} />
              </ImageContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailContent>
                <BodyTitle>Community</BodyTitle>
                <BodyTextContainer>
                  <Text>
                    Community based on <Accent>coordinates</Accent>
                  </Text>
                  <Text>
                    <Accent>Server Side Props + SWR - Bound Mutate</Accent>
                    <br /> for Comment
                  </Text>
                </BodyTextContainer>
              </DetailContent>
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

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const TitleContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  max-width: 1500px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
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
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
  padding: 15px;
  box-sizing: border-box;
  min-width: 350px;
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 35px;
  row-gap: 200px;
  width: 100%;
  transition: ease all 2s;
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

const DetailContainer = styled.div`
  --bgColor-back: #1e1e1e;
  width: 100%;
  height: 600px;
  background-color: var(--bgColor-back);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3),
    8px 4px 6px -4px rgb(0 0 0 / 0.3);
`;

const DetailContainerMain = styled(DetailContainer)`
  height: 270px;
  width: 100%;
  grid-column: span 4 / span 4;
  transition: 0.5s;
  margin-bottom: 100px;
  @media screen and (max-width: 1500px) {
    grid-column: span 3 / span 3;
  }
  @media screen and (max-width: 1200px) {
    grid-column: span 2 / span 2;
    height: 340px;
  }
  @media screen and (max-width: 700px) {
    grid-column: span 1 / span 1;
  }
`;

const DetailContent = styled.div`
  position: absolute;
  bottom: 0px;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 25px;
  /* border: 1px solid green; */
`;
export const DetailBody = styled(DetailContent)`
  /* border: 1px solid green; */
  height: 270px;
  position: unset;
  padding-top: 30px;
  @media screen and (max-width: 1200px) {
    height: 340px;
  }
`;

export const BodyTitle = styled.div`
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
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  line-height: 2.5;
  text-align: center;
`;
const Accent = styled.span`
  font-weight: 500;
  color: #cccccc;
`;

const ImageContainer = styled.div`
  width: 300px;
  /* height: 530px; */
  overflow: hidden;
  position: absolute;
  top: -150px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 5px 20px 25px -5px rgb(0 0 0 / 1), 0 8px 10px -6px rgb(0 0 0 / 1);
  transition-property: transform;
  transition-duration: 100ms;

  :hover {
    transform: scale(1.05);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top;
  filter: brightness(90%) contrast(110%);

  /* border-radius: 1rem; */

  /* filter: brightness(80%) contrast(110%) grayscale(30%) saturate(110%)
    sepia(10%); */
  /* filter: grayscale(100%); */
`;

export const DetailBodyTextContainer = styled.div`
  /* border: 1px solid yellow; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 20px;
  transition: 0.5s;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #e5e5e5;
  /* margin-left: 40px;
  margin-right: 40px; */
  padding: 10px 0;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 1), 0 4px 6px -4px rgb(0 0 0 / 1);
  transition-property: transform;
  transition-duration: 100ms;
  :hover {
    transform: scale(1.05);
  }
`;
export const DetailBodyTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: black;
  /* padding-top: 5px; */
  padding-bottom: 10px;
`;
export const DetailBodyText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #5d5d5d;
`;

export default HighMarket;
