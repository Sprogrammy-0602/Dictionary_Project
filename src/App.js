import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import BookmarksPage from "./pages/BookmarksPage";
import WordOfTheDay from "./pages/WordOfTheDay";

const App = () => {
  return (
    <ThemeProvider>
      <BookmarkProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/word-of-the-day" element={<WordOfTheDay />} />
          </Routes>
        </Router>
      </BookmarkProvider>
    </ThemeProvider>
  );
};

export default App;
