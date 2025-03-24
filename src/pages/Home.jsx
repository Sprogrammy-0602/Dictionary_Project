import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar/SearchBar';
import WordDetails from '../components/WordDetails/WordDetails';
import useDictionary from '../hooks/useDictionary';

const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const WelcomeMessage = styled(motion.div)`
  text-align: center;
  margin: 4rem 0;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.text};
  }
  
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const Home = () => {
  const { 
    word,
    language,
    setLanguage,
    definition,
    loading,
    error,
    searchWord,
    searchHistory,
    clearHistory
  } = useDictionary();
  
  const handleSearch = (searchTerm) => {
    searchWord(searchTerm);
  };
  
  const handleSynonymClick = (synonym) => {
    searchWord(synonym);
  };
  
  return (
    <HomeContainer>
      <SearchBar 
        onSearch={handleSearch}
        language={language}
        setLanguage={setLanguage}
        searchHistory={searchHistory}
        clearHistory={clearHistory}
        error={error}
      />
      
      {!word && !loading && !error && (
        <WelcomeMessage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Welcome to WordHunt</h1>
          <p>
            Search for any word to get its definition, pronunciation, examples, and more.
            We support multiple languages to help you expand your vocabulary.
          </p>
        </WelcomeMessage>
      )}
      
      {(word || loading) && (
        <WordDetails 
          word={word}
          definition={definition}
          loading={loading}
          onSynonymClick={handleSynonymClick}
        />
      )}
    </HomeContainer>
  );
};

export default Home;
