import React, { createContext, useState, useEffect } from "react";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const savedBookmarks = localStorage.getItem("bookmarks");
      return savedBookmarks ? JSON.parse(savedBookmarks) : [];
    } catch (error) {
      console.error("Error loading bookmarks from storage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } catch (error) {
      console.error("Error saving bookmarks:", error);
    }
  }, [bookmarks]);

  const addBookmark = (word, definition) => {
    if (isBookmarked(word)) return;

    const newBookmark = {
      id: Date.now(),
      word,
      definition,
      timestamp: new Date().toISOString(),
    };

    setBookmarks((prev) => [newBookmark, ...prev]);
  };

  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== id));
  };

  const isBookmarked = (word) => {
    return bookmarks.some(
      (bookmark) => bookmark.word.toLowerCase() === word.toLowerCase()
    );
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
