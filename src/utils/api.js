import axios from "axios";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries";

export const fetchWordDefinition = async (language, word) => {
  try {
    const response = await axios.get(`${API_URL}/${language}/${word}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error(
        "Word not found. Please check your spelling and try again."
      );
    }
    throw new Error("Failed to fetch word definition. Please try again later.");
  }
};

export const getSupportedLanguages = () => {
  return [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "ru", name: "Russian" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "hi", name: "Hindi" },
    { code: "pt", name: "Portuguese" },
    { code: "ar", name: "Arabic" },
    { code: "tr", name: "Turkish" },
  ];
};
