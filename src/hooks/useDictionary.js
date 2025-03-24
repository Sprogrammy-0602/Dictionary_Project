import { useState, useEffect, useCallback } from "react";
import { fetchWordDefinition } from "../utils/api";

const useDictionary = (initialLanguage = "en") => {
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState(initialLanguage);
  const [definition, setDefinition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const searchWord = useCallback(
    async (wordToSearch) => {
      if (!wordToSearch.trim()) {
        setError("Please enter a word to search");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await fetchWordDefinition(language, wordToSearch);
        setDefinition(data);

        // Add to search history
        const historyItem = {
          word: wordToSearch,
          language,
          timestamp: new Date().toISOString(),
        };

        setSearchHistory((prev) => {
          const filtered = prev.filter(
            (item) =>
              !(
                item.word.toLowerCase() === wordToSearch.toLowerCase() &&
                item.language === language
              )
          );
          return [historyItem, ...filtered].slice(0, 20); // Keep last 20 searches
        });

        setWord(wordToSearch);
      } catch (err) {
        setError(err.message);
        setDefinition(null);
      } finally {
        setLoading(false);
      }
    },
    [language]
  );

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  return {
    word,
    setWord,
    language,
    setLanguage,
    definition,
    loading,
    error,
    searchWord,
    searchHistory,
    clearHistory,
  };
};

export default useDictionary;
