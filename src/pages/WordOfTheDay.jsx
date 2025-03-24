import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import WordDetails from '../components/WordDetails/WordDetails';
import useDictionary from '../hooks/useDictionary';

const WordOfTheDayContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.text};
  }
  
  p {
    font-size: 1.1rem;
    color: ${props => props.theme.textSecondary};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.error};
`;

// List of interesting words for Word of the Day
const wordList = [
  'serendipity', 'ephemeral', 'mellifluous', 'ineffable', 'luminous',
  'eloquent', 'resplendent', 'ethereal', 'surreptitious', 'melancholy',
  'quintessential', 'pernicious', 'esoteric', 'ubiquitous', 'paradigm',
  'perspicacious', 'obfuscate', 'sagacious', 'loquacious', 'vociferous',
  'tenacious', 'magnanimous', 'idiosyncratic', 'fastidious', 'capricious',
  'gregarious', 'nefarious', 'propitious', 'audacious', 'vivacious',
  'voracious', 'mendacious', 'efficacious', 'salacious'
];

// Function to get a word based on the day
const getWordOfTheDay = () => {
  // Create a date object for today and set hours to 0 to ensure consistency throughout the day
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Use the date as a seed for selecting a word
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const wordIndex = dayOfYear % wordList.length;
  
  return wordList[wordIndex];
};

const WordOfTheDay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchWord, definition, loading, error: searchError } = useDictionary();
  
  useEffect(() => {
    const fetchWordOfTheDay = async () => {
      try {
        setIsLoading(true);
        const wordOfTheDay = getWordOfTheDay();
        await searchWord(wordOfTheDay);
      } catch (err) {
        setError('Failed to load word of the day. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchWordOfTheDay();
  }, [searchWord]);
  
  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };
  
  return (
    <WordOfTheDayContainer>
      <Header>
        <h1>Word of the Day</h1>
        <p>{formatDate()}</p>
      </Header>
      
      {isLoading || loading ? (
        <LoadingContainer>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{
              width: 50,
              height: 50,
              border: '4px solid #e0e0e0',
              borderTop: '4px solid #6B46C1',
              borderRadius: '50%'
            }}
          />
        </LoadingContainer>
      ) : error || searchError ? (
        <ErrorContainer>
          <p>{error || searchError}</p>
        </ErrorContainer>
      ) : (
        <WordDetails 
          word={definition && definition[0] ? definition[0].word : ''}
          definition={definition}
          loading={false}
          onSynonymClick={() => {}}
        />
      )}
    </WordOfTheDayContainer>
  );
};

export default WordOfTheDay;
