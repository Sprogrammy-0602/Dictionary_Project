import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 0 3px ${(props) => props.theme.primary}33;
  }

  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
    opacity: 0.7;
  }
`;

export const LanguageSelector = styled.select`
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 0 3px ${(props) => props.theme.primary}33;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LanguageOption = styled.option`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
`;

export const SearchButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchHistoryContainer = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.card};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 10;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid ${(props) => props.theme.border};

  .history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.divider};

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.text};
      margin: 0;
    }
  }
`;

export const HistoryItem = styled(motion.div)`
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.divider};
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }
`;

export const HistoryWord = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.25rem;
`;

export const HistoryActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

export const HistoryLanguage = styled.span`
  color: ${(props) => props.theme.primary};
  font-weight: 500;
`;

export const HistoryTimestamp = styled.span`
  color: ${(props) => props.theme.textSecondary};
`;

export const ClearHistoryButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.primary};
  font-size: 0.85rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.primaryHover};
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled(motion.div)`
  color: ${(props) => props.theme.error};
  margin-top: 0.75rem;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.error}22;
  border-radius: 4px;
  font-size: 0.9rem;
`;
