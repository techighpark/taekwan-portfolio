import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { darkMode, GlobalStyles, lightMode } from "./themeStyles";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

function App() {
  const themeDarkMode = false;
  return (
    <ThemeProvider theme={themeDarkMode ? lightMode : darkMode}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
