import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getSupportedLanguages } from '../../utils/api';
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
  LanguageSelector,
  LanguageOption,
  SearchHistoryContainer,
  HistoryItem,
  HistoryWord,
  HistoryLanguage,
  HistoryTimestamp,
  HistoryActions,
  ClearHistoryButton,
  ErrorMessage
} from './SearchBar.styles';

const SearchBar = ({ 
  onSearch, 
  language, 
  setLanguage, 
  searchHistory, 
  clearHistory, 
  error 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const inputRef = useRef(null);
  const historyRef = useRef(null);
  const languages = getSupportedLanguages();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (historyRef.current && !historyRef.current.contains(event.target) && 
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowHistory(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleHistoryItemClick = (item) => {
    setInputValue(item.word);
    setLanguage(item.language);
    onSearch(item.word);
    setShowHistory(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <LanguageSelector 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map(lang => (
            <LanguageOption key={lang.code} value={lang.code}>
              {lang.name}
            </LanguageOption>
          ))}
        </LanguageSelector>
        
        <SearchInput
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setShowHistory(true)}
          placeholder="Search for a word..."
          aria-label="Search for a word"
        />
        
        <SearchButton 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Search
        </SearchButton>
      </SearchForm>
      
      {error && (
        <ErrorMessage 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {error}
        </ErrorMessage>
      )}
      
      {showHistory && searchHistory.length > 0 && (
        <SearchHistoryContainer ref={historyRef}>
          <div className="history-header">
            <h3>Recent Searches</h3>
            <ClearHistoryButton onClick={clearHistory}>
              Clear All
            </ClearHistoryButton>
          </div>
          
          {searchHistory.map((item, index) => (
            <HistoryItem 
              key={index}
              onClick={() => handleHistoryItemClick(item)}
              whileHover={{ backgroundColor: 'rgba(107, 70, 193, 0.1)' }}
            >
              <HistoryWord>{item.word}</HistoryWord>
              <HistoryActions>
                <HistoryLanguage>{languages.find(lang => lang.code === item.language)?.name}</HistoryLanguage>
                <HistoryTimestamp>{formatDate(item.timestamp)}</HistoryTimestamp>
              </HistoryActions>
            </HistoryItem>
          ))}
        </SearchHistoryContainer>
      )}
    </SearchContainer>
  );
};

export default SearchBar;

