import axios from "axios";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries";

/**
 * Fetches the definition of a word from the dictionary API.
 * @param {string} language - The language code (e.g., 'en' for English).
 * @param {string} word - The word to search for.
 * @returns {Promise<Object>} The word definition data.
 * @throws {Error} If the word is not found or API request fails.
 */
export const fetchWordDefinition = async (language, word) => {
  try {
    const response = await axios.get(`${API_URL}/${language}/${word}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("Word not found. Please check your spelling and try again.");
    }
    throw new Error("Failed to fetch word definition. Please try again later.");
  }
};
