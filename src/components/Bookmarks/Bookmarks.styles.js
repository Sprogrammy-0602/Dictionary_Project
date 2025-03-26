import styled from "styled-components";
import { motion } from "framer-motion";

export const BookmarksContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme.background};
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.shadow};

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.text};
    text-align: center;
  }
`;

export const BookmarksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BookmarkItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.card};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadow};
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: ${(props) => props.theme.hover};
  }
`;

export const BookmarkWord = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  color: ${(props) => props.theme.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const BookmarkDefinition = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  margin: 0.5rem 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BookmarkTimestamp = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.textSecondary};
  margin: 0;
`;

export const BookmarkActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const RemoveButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.error};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.dangerHover};
  }
`;

export const ClearBookmarksButton = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background: ${(props) => props.theme.accent};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.accentHover};
  }
`;

export const EmptyBookmarks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
    color: ${(props) => props.theme.text};
  }

  p {
    color: ${(props) => props.theme.textSecondary};
    max-width: 300px;
  }
`;

export const BookmarkIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => `${props.theme.primary}22`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;

  &::before {
    content: "";
    width: 20px;
    height: 30px;
    border: 2px solid ${(props) => props.theme.primary};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
  }

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 15px;
    background-color: ${(props) => props.theme.primary};
    transform: translateY(-15px) rotate(45deg);
    border-top-right-radius: 5px;
  }
`;
