import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1vw;
  /* overflow: hidden; */

  border: 1px solid blue;
  @media screen and (max-width: 500px) {
    margin: 2vh 3vw;
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
