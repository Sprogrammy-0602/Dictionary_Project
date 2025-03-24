import React, { createContext, useState, useEffect } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (word, definition) => {
    const newBookmark = {
      id: Date.now(),
      word,
      definition,
      timestamp: new Date().toISOString(),
    };
    setBookmarks([newBookmark, ...bookmarks]);
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  const isBookmarked = (word) => {
    return bookmarks.some(bookmark => bookmark.word.toLowerCase() === word.toLowerCase());
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};
