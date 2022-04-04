import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { darkMode, GlobalStyles, lightMode } from "./themeStyles";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import BookerWeb from "./pages/BookerWeb";
import BookerDB from "./pages/BookerDB";
import SearchBook from "./pages/SearchBook";
import HighVideo from "./pages/HighVideo";
import ExWeb from "./pages/ExWeb";

function App() {
  const themeDarkMode = false;
  return (
    <ThemeProvider theme={themeDarkMode ? lightMode : darkMode}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/booker-web" element={<BookerWeb />} />
          <Route path="/portfolio/booker-db" element={<BookerDB />} />
          <Route path="/portfolio/search-book" element={<SearchBook />} />
          <Route path="/portfolio/high-video" element={<HighVideo />} />
          <Route path="/about" element={<About />} />
          <Route path="/ex/:title" element={<ExWeb />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
