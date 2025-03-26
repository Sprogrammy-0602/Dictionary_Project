import { useState, useEffect, useCallback } from "react";
import { fetchWordDefinition } from "../utils/api";

const STORAGE_KEY = "searchHistory";

const useDictionary = (initialLanguage = "en") => {
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState(initialLanguage);
  const [definition, setDefinition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (searchHistory.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(searchHistory));
    }
  }, [searchHistory]);

  const searchWord = useCallback(async (wordToSearch) => {
    if (!wordToSearch.trim()) {
      setError("Please enter a word to search");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWordDefinition(language, wordToSearch);
      setDefinition(data);
      setWord(wordToSearch);

      // Add to search history
      setSearchHistory((prev) => {
        const newHistory = [
          { word: wordToSearch, language, timestamp: new Date().toISOString() },
          ...prev.filter(item => item.word.toLowerCase() !== wordToSearch.toLowerCase() || item.language !== language),
        ];
        return newHistory.slice(0, 20);
      });

    } catch (err) {
      setError(err.message);
      setDefinition(null);
    } finally {
      setLoading(false);
    }
  }, [language]);

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    word,
    setWord,
    language,
    setLanguage,
    definition,
    loading,
    error,
    searchWord,  // Used in Bookmarks.jsx
    searchHistory,
    clearHistory,
  };
};

export default useDictionary;
