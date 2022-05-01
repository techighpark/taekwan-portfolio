import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const Portfolio = () => {
  return (
    <Layout>
      <Helmet>
        <title>Portfolio | TAE KWAN</title>
      </Helmet>
      <DetailContainer>
        <MediaScroller>
          <MediaElement>
            <Image />
            <DetailTitle>1</DetailTitle>
          </MediaElement>
          <MediaElement>
            <Image />
            <DetailTitle>2</DetailTitle>
          </MediaElement>
          <MediaElement>
            <Image />
            <DetailTitle>3</DetailTitle>
          </MediaElement>
          <MediaElement>
            <Image />
            <DetailTitle>4</DetailTitle>
          </MediaElement>
          <MediaElement>
            <Image />
            <DetailTitle>5</DetailTitle>
          </MediaElement>
          <MediaElement>
            <Image />
            <DetailTitle>6</DetailTitle>
          </MediaElement>
          <MediaElement>
            <Image />
            <DetailTitle>7</DetailTitle>
          </MediaElement>
          <MediaElement>
            <Image />
            <DetailTitle>8</DetailTitle>
          </MediaElement>
        </MediaScroller>
      </DetailContainer>
    </Layout>
  );
};
const DetailContainer = styled.div`
  border: 1px solid orange;
`;
const MediaScroller = styled.div`
  border: 1px solid yellow;

  --_spacer: 1rem;
  display: grid;
  gap: var(--_spacer);
  grid-auto-flow: row;
  grid-auto-columns: 30%;

  padding: 0 var(--_spacer) var(--_spacer);

  overscroll-behavior-inline: contain;

  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer, 1rem);
  * {
    scroll-snap-align: start;
  }
`;
const MediaElement = styled.div`
  display: grid;
  grid-template-rows: min-content;
  gap: var(--_spacer);
  padding: var(--_spacer);
  background: darkgray;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5);
`;
const Image = styled.div`
  background-color: gray;
  border: 1px solid orange;
  box-sizing: border-box;

  aspect-ratio: 16/9;
  inline-size: 100%;
  object-fit: cover;
`;
const DetailTitle = styled.div`
  font-weight: 500;
  font-size: 32px;
`;

export default Portfolio;
