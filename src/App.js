import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { darkMode, GlobalStyles, lightMode } from "./themeStyles";
import About from "./pages/About";
import ExWeb from "./pages/ExWeb";
import Works from "./pages/Works";
import Skills from "./pages/Skills";
import HighMarket from "./pages/HighMarket";
import Portfolio from "./pages/Portfolio";
import HighBooker from "./pages/HighBooker";

function App() {
  const themeDarkMode = false;
  return (
    <ThemeProvider theme={themeDarkMode ? lightMode : darkMode}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/highmarket" element={<HighMarket />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/highbooker" element={<HighBooker />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/ex/:url" element={<ExWeb />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
