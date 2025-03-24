import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { BookmarkContext } from '../../context/BookmarkContext';
import {
  BookmarksContainer,
  BookmarksList,
  BookmarkItem,
  BookmarkWord,
  BookmarkDefinition,
  BookmarkTimestamp,
  BookmarkActions,
  RemoveButton,
  EmptyBookmarks,
  BookmarkIcon
} from './Bookmarks.styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Bookmarks = ({ onWordClick }) => {
  const { bookmarks, removeBookmark } = useContext(BookmarkContext);
  
  if (bookmarks.length === 0) {
    return (
      <EmptyBookmarks>
        <BookmarkIcon />
        <h3>No bookmarks yet</h3>
        <p>Search for words and bookmark them to see them here.</p>
      </EmptyBookmarks>
    );
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <BookmarksContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Your Bookmarks</h2>
      <BookmarksList>
        {bookmarks.map((bookmark) => (
          <BookmarkItem 
            key={bookmark.id}
            as={motion.div}
            variants={itemVariants}
          >
            <div>
              <BookmarkWord onClick={() => onWordClick(bookmark.word)}>
                {bookmark.word}
              </BookmarkWord>
              <BookmarkDefinition>
                {bookmark.definition[0]?.meanings[0]?.definitions[0]?.definition || 'No definition available'}
              </BookmarkDefinition>
              <BookmarkTimestamp>
                {formatDate(bookmark.timestamp)}
              </BookmarkTimestamp>
            </div>
            <BookmarkActions>
              <RemoveButton 
                onClick={() => removeBookmark(bookmark.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Remove
              </RemoveButton>
            </BookmarkActions>
          </BookmarkItem>
        ))}
      </BookmarksList>
    </BookmarksContainer>
  );
};

export default Bookmarks;

