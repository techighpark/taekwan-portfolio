import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div`
  background-color: ${props => props.theme.bgColor};
  width: 100%;
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
