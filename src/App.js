import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import BookmarksPage from "./pages/BookmarksPage";
import WordOfTheDay from "./pages/WordOfTheDay";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <BookmarkProvider>
        <Router>
          <Header />
          <Layout>
            {" "}
            {}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bookmarks" element={<BookmarksPage />} />
              <Route path="/word-of-the-day" element={<WordOfTheDay />} />
            </Routes>
          </Layout>
          <Footer />
        </Router>
      </BookmarkProvider>
    </ThemeProvider>
  );
};

export default App;
