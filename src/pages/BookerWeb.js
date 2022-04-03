import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  position: relative;
  height: 200vh;
  border: 1px solid;
  overflow: auto;
`;
const Contents = styled.div`
  position: sticky;
  top: 0;
`;

const BookerWeb = () => {
  return (
    <Layout>
      <Container>
        <Contents>abcdef</Contents>
        <Contents>abcdef</Contents>
        <Contents>abcdef</Contents>
        <Contents>abcdef</Contents>
        <Contents>abcdef</Contents>
        <Contents>abcdef</Contents>
        <Contents>abcdef</Contents>
        <Contents>abcdef</Contents>
        <Contents>abcdef</Contents>
        <Contents>abcdef</Contents>
      </Container>
    </Layout>
  );
};

export default BookerWeb;
