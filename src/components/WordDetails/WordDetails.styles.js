import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const WordDetailsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${(props) => props.theme.card};
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const WordHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const WordTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};
  margin: 0;
`;

export const WordPhonetic = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
  margin-top: 0.5rem;
`;

export const BookmarkButton = styled(motion.button)`
  padding: 0.6rem 1.2rem;
  background-color: ${(props) =>
    props.bookmarked ? props.theme.primary : "transparent"};
  color: ${(props) => (props.bookmarked ? "white" : props.theme.primary)};
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.bookmarked ? props.theme.primaryHover : `${props.theme.primary}22`};
  }
`;

export const PartOfSpeechSection = styled.section`
  margin-bottom: 2rem;
`;

export const PartOfSpeechLabel = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  font-style: italic;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: ${(props) => props.theme.divider};
    width: 200px;
    left: calc(100% + 1rem);
    top: 50%;
  }
`;

export const DefinitionList = styled.ol`
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const DefinitionItem = styled.li`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DefinitionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.5rem;
`;

export const NoDefinitionsMessage = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 1.1rem;
  text-align: center;
  margin: 2rem 0;
`;

export const SourceSection = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.divider};
  font-size: 0.9rem;
  color: ${(props) => props.theme.textSecondary};
`;

export const SourceTitle = styled.span`
  margin-right: 0.5rem;
`;

export const SourceLink = styled.a`
  color: ${(props) => props.theme.primary};
  text-decoration: underline;
  word-break: break-all;

  &:hover {
    color: ${(props) => props.theme.primaryHover};
  }
`;

export const LoadingIndicator = styled.div`
  width: 40px;
  height: 40px;
  margin: 3rem auto;
  border: 4px solid ${(props) => props.theme.backgroundSecondary};
  border-top: 4px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  animation: ${loadingAnimation} 1s linear infinite;
`;
