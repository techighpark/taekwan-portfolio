import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div`
  position: relative;
  padding: 1vh 1vw;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    padding: 5vh 3vw;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;
