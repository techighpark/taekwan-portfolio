import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div`
  background-color: ${props => props.theme.bgColor};
  width: 100%;
  padding: 1vh 1vw;
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
