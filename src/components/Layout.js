import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  overflow: hidden;

  /* border: 1px solid blue; */
  @media screen and (max-width: 500px) {
    padding: 0px;
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
