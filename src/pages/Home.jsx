import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import WordDetails from '../components/WordDetails/WordDetails';
import useDictionary from '../hooks/useDictionary';

const HomeContainer = styled.div`
  position: relative;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
`;

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.7;
`;

const Overlay = styled.div`
  position: relative;
  z-index: 2;
`;

const WelcomeMessage = styled(motion.div)`
  text-align: center;
  margin: 4rem 0;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.text};
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.text}; 
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    font-weight: 600;
    text-shadow: ${(props) =>
    props.theme.background === "#FFFFFF"
      ? "2px 2px 10px rgba(0, 0, 0, 0.3)"
      : "2px 2px 8px rgba(255, 255, 255, 0.2)"};
    letter-spacing: 0.5px;
    padding: 10px 15px;
    border-radius: 5px;
    background: ${(props) =>
    props.theme.background === "#FFFFFF"
      ? "rgba(255, 255, 255, 0.6)"
      : "rgba(0, 0, 0, 0.2)"};
    backdrop-filter: blur(5px);
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

  const videoRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const wordParam = searchParams.get('word');

    if (wordParam) {
      searchWord(wordParam);
    }
  }, [location.search, searchWord]);

  const handleSearch = (searchTerm) => {
    searchWord(searchTerm);
  };

  const handleSynonymClick = (synonym) => {
    searchWord(synonym);
  };

  return (
    <>
      <VideoBackground ref={videoRef} autoPlay loop muted>
        <source src="/video/dictionary-bg.mp4" type="video/mp4" />
      </VideoBackground>

      <Overlay>
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
      </Overlay>
    </>
  );
};

export default Home;
