import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const root = document.documentElement;
root.style.setProperty("--animation-duration", "0.5s");

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  60% {
    transform: translateY(2px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
`;

export const WordDetailsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${(props) =>
    props.theme.background === "#1A202C"
      ? "rgba(70, 70, 90, 0.85)"
      : "rgba(255, 255, 255, 0.85)"};
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid
    ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(255, 255, 255, 0.12)"
        : "rgba(0, 0, 0, 0.08)"};
  animation: ${slideDown} var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1);
`;

export const WordHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const WordTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: ${(props) => props.theme.text};
  margin: 0;
`;

export const WordPhonetic = styled.div`
  font-size: 1.3rem;
  color: ${(props) => props.theme.primary};
  margin-top: 0.5rem;
  font-style: italic;
`;

export const BookmarkButton = styled(motion.button)`
  padding: 0.7rem 1.4rem;
  background: ${(props) =>
    props.bookmarked
      ? `linear-gradient(135deg, ${props.theme.primary}, ${props.theme.primaryHover})`
      : "transparent"};
  color: ${(props) => (props.bookmarked ? "white" : props.theme.primary)};
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  backdrop-filter: ${(props) => (props.bookmarked ? "none" : "blur(5px)")};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${(props) =>
      props.bookmarked
        ? `linear-gradient(135deg, ${props.theme.primaryHover}, ${props.theme.primary})`
        : `linear-gradient(135deg, ${props.theme.primary}22, ${props.theme.primary}44)`};
    transform: scale(1.08);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const PartOfSpeechSection = styled.section`
  margin-bottom: 2rem;
  animation: ${slideDown} var(--animation-duration) ease-in-out;
`;

export const PartOfSpeechLabel = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  font-style: italic;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.divider},
      transparent
    );
    width: 220px;
    left: calc(100% + 1rem);
    top: 50%;
  }
`;

export const DefinitionList = styled.ol`
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  list-style-type: none;
  counter-reset: definition-counter;

  & > li {
    counter-increment: definition-counter;
    position: relative;
    padding-left: 2rem;

    &::before {
      content: counter(definition-counter) ".";
      position: absolute;
      left: 0;
      color: ${(props) => props.theme.primary};
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

export const DefinitionItem = styled.li`
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DefinitionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.5rem;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const NoDefinitionsMessage = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 1.2rem;
  text-align: center;
  margin: 2rem 0;
  animation: ${slideDown} var(--animation-duration) ease-in-out;
`;

export const SourceSection = styled.div`
  margin-top: 2.5rem;
  padding-top: 1.2rem;
  border-top: 1px solid ${(props) => props.theme.divider};
  font-size: 1rem;
  color: ${(props) => props.theme.textSecondary};
  animation: ${slideDown} var(--animation-duration) ease-in-out;
`;

export const SourceTitle = styled.span`
  margin-right: 0.5rem;
  font-weight: 600;
`;

export const SourceLink = styled.a`
  color: ${(props) => props.theme.primary};
  text-decoration: underline;
  word-break: break-all;
  font-weight: 600;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.primaryHover};
    text-decoration: none;
  }
`;

export const LoadingIndicator = styled.div`
  width: 50px;
  height: 50px;
  margin: 3rem auto;
  border: 5px solid ${(props) => props.theme.backgroundSecondary};
  border-top: 5px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  animation: ${loadingAnimation} 1s linear infinite;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;
