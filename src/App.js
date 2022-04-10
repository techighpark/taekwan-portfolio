import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { darkMode, GlobalStyles, lightMode } from "./themeStyles";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ExWeb from "./pages/ExWeb";
import Skill from "./pages/Skill";

function App() {
  const themeDarkMode = false;
  return (
    <ThemeProvider theme={themeDarkMode ? lightMode : darkMode}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/about" element={<About />} />
          <Route path="/ex/:url" element={<ExWeb />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
