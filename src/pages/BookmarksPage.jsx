import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Bookmarks from '../components/Bookmarks/Bookmarks';
import useDictionary from '../hooks/useDictionary';

const BookmarksPageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BookmarksPage = () => {
  const navigate = useNavigate();
  const { searchWord } = useDictionary();

  const handleWordClick = (word) => {

    searchWord(word);

    navigate(`/?word=${word}`);
  };

  return (
    <BookmarksPageContainer>
      <Bookmarks onWordClick={handleWordClick} />
    </BookmarksPageContainer>
  );
};

export default BookmarksPage;
