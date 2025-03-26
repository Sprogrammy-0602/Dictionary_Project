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
  border: 1px solid
    ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};
  border-radius: 8px;
  background: ${(props) =>
    props.theme.background === "#1A202C"
      ? "rgba(70, 70, 90, 0.3)"
      : "rgba(255, 255, 255, 0.5)"};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease;
  outline: none;
  box-shadow: ${(props) =>
    props.theme.background === "#1A202C"
      ? "0px 4px 12px rgba(0, 0, 0, 0.2)"
      : "0px 4px 12px rgba(0, 0, 0, 0.05)"};

  &:focus {
    border: 2px solid ${(props) => props.theme.primary};
    box-shadow: 0px 0px 8px ${(props) => props.theme.primary}50;
    transform: translateY(-2px);
  }
`;

export const LanguageSelector = styled.select`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};
  background: ${(props) =>
    props.theme.background === "#1A202C"
      ? "rgba(70, 70, 90, 0.3)"
      : "rgba(255, 255, 255, 0.5)"};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.theme.background === "#1A202C"
      ? "0px 4px 12px rgba(0, 0, 0, 0.2)"
      : "0px 4px 12px rgba(0, 0, 0, 0.05)"};

  &:hover {
    background: ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(80, 80, 100, 0.4)"
        : "rgba(245, 245, 250, 0.6)"};
    transform: translateY(-2px);
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
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.primaryHover}
  );
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px ${(props) => props.theme.primary}50;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 15px ${(props) => props.theme.primary}70;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SearchHistoryContainer = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(70, 70, 90, 0.8)"
        : "rgba(255, 255, 255, 0.8)"},
    ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(45, 45, 60, 0.6)"
        : "rgba(240, 240, 245, 0.6)"}
  );
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.theme.background === "#1A202C"
      ? "0px 10px 30px rgba(0, 0, 0, 0.5)"
      : "0px 10px 30px rgba(0, 0, 0, 0.1)"};
  z-index: 10;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid
    ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(255, 255, 255, 0.7)"};
  animation: dropDown 0.3s ease-out forwards;

  @keyframes dropDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

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
  transition: all 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(80, 80, 100, 0.3)"
        : "rgba(245, 245, 250, 0.5)"};
    transform: translateX(5px);
  }
`;

export const HistoryWord = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
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
  font-size: 0.9rem;
`;

export const HistoryTimestamp = styled.span`
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.8rem;
`;

export const ClearHistoryButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.primary};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;

  &:hover {
    color: ${(props) => props.theme.primaryHover};
    background: ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(107, 70, 193, 0.1)"
        : "rgba(107, 70, 193, 0.05)"};
  }
`;

export const ErrorMessage = styled(motion.div)`
  color: ${(props) => props.theme.error};
  margin-top: 0.75rem;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.error}22;
  border-radius: 8px;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
  border: 1px solid ${(props) => props.theme.error}33;
  animation: shake 0.5s ease-in-out;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    20%,
    60% {
      transform: translateX(-5px);
    }
    40%,
    80% {
      transform: translateX(5px);
    }
  }
`;
