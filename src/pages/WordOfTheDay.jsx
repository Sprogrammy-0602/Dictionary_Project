import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import WordDetails from '../components/WordDetails/WordDetails';
import useDictionary from '../hooks/useDictionary';

const glow = keyframes`
  from {
    text-shadow: 0 0 5px ${props => props.theme.primary}33,
                 0 0 10px ${props => props.theme.primary}33,
                 0 0 20px ${props => props.theme.primary}33,
                 0 0 40px ${props => props.theme.primary}33;
  }
  to {
    text-shadow: 0 0 10px ${props => props.theme.primary}55,
                 0 0 20px ${props => props.theme.primary}55,
                 0 0 30px ${props => props.theme.primary}55,
                 0 0 50px ${props => props.theme.primary}55;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const underline = keyframes`
  to {
    width: 100%;
  }
`;

const WordOfTheDayContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const AnimatedTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
  position: relative;
  display: inline-block;
  
  animation: ${glow} 2s ease-in-out infinite alternate,
             ${slideDown} 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
  
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -10px;
    left: 0;
    background: linear-gradient(
      to right,
      transparent,
      ${props => props.theme.primary},
      transparent
    );
    animation: ${underline} 1.5s ease forwards 0.8s;
  }
`;

const DateDisplay = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.textSecondary};
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


const wordList = [
  'serendipity', 'ephemeral', 'mellifluous', 'ineffable', 'luminous',
  'eloquent', 'resplendent', 'ethereal', 'surreptitious', 'melancholy',
  'quintessential', 'pernicious', 'esoteric', 'ubiquitous', 'paradigm',
  'perspicacious', 'obfuscate', 'sagacious', 'loquacious', 'vociferous',
  'tenacious', 'magnanimous', 'idiosyncratic', 'fastidious', 'capricious',
  'gregarious', 'nefarious', 'propitious', 'audacious', 'vivacious',
  'voracious', 'mendacious', 'efficacious', 'salacious'
];


const getWordOfTheDay = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
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
        <AnimatedTitle>Word of the Day</AnimatedTitle>
        <DateDisplay>{formatDate()}</DateDisplay>
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
          onSynonymClick={() => { }}
        />
      )}
    </WordOfTheDayContainer>
  );
};

export default WordOfTheDay;
