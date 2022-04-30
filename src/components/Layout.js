import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  /* overflow-x: hidden; */

  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`;
const Container = styled.div`
  padding-top: 64px;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Container>{children}</Container>
    </StyledLayout>
  );
};

export default Layout;
