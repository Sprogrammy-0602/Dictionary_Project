import styled from "styled-components";
import { motion } from "framer-motion";

export const BookmarksTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.text};
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  /* Neon glow effect */
  text-shadow: 0 0 5px ${(props) => props.theme.primary}33,
    0 0 10px ${(props) => props.theme.primary}33,
    0 0 20px ${(props) => props.theme.primary}33,
    0 0 40px ${(props) => props.theme.primary}33;

  /* Animation */
  animation: glow 2s ease-in-out infinite alternate,
    slideDown 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;

  @keyframes glow {
    from {
      text-shadow: 0 0 5px ${(props) => props.theme.primary}33,
        0 0 10px ${(props) => props.theme.primary}33,
        0 0 20px ${(props) => props.theme.primary}33,
        0 0 40px ${(props) => props.theme.primary}33;
    }
    to {
      text-shadow: 0 0 10px ${(props) => props.theme.primary}55,
        0 0 20px ${(props) => props.theme.primary}55,
        0 0 30px ${(props) => props.theme.primary}55,
        0 0 50px ${(props) => props.theme.primary}55;
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(-50px) translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0) translateX(-50%);
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -10px;
    left: 0;
    background: linear-gradient(
      to right,
      transparent,
      ${(props) => props.theme.primary},
      transparent
    );
    animation: underline 1.5s ease forwards 0.8s;
  }

  @keyframes underline {
    to {
      width: 100%;
    }
  }
`;

export const BookmarksContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.background},
    ${(props) => props.theme.backgroundSecondary}
  );
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.shadow};

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.text};
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    letter-spacing: 1px;
  }
`;

export const BookmarksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BookmarkItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.card},
    ${(props) => `${props.theme.card}dd`}
  );
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.shadow};
  transition: all 0.3s ease;
  border-left: 5px solid ${(props) => props.theme.primary};

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const BookmarkWord = styled.h3`
  font-size: 1.6rem;
  margin: 0;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
    transform: translateX(5px);
  }
`;

export const BookmarkDefinition = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.text};
  margin: 0.7rem 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookmarkTimestamp = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textSecondary};
  margin: 0;
  font-style: italic;
`;

export const BookmarkActions = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const RemoveButton = styled(motion.button)`
  padding: 0.6rem 1.2rem;
  background: ${(props) => props.theme.error};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${(props) => props.theme.dangerHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ClearBookmarksButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.accent},
    ${(props) => props.theme.accentHover}
  );
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const EmptyBookmarks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    ${(props) => `${props.theme.backgroundSecondary}55`},
    ${(props) => `${props.theme.background}55`}
  );
  border-radius: 12px;

  h3 {
    font-size: 1.8rem;
    margin: 1.5rem 0 1rem;
    color: ${(props) => props.theme.text};
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  p {
    color: ${(props) => props.theme.textSecondary};
    max-width: 350px;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const BookmarkIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${(props) => `${props.theme.primary}33`},
    ${(props) => `${props.theme.primary}11`}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    width: 25px;
    height: 40px;
    border: 3px solid ${(props) => props.theme.primary};
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    position: absolute;
  }

  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 20px;
    background-color: ${(props) => props.theme.primary};
    transform: translateY(-20px) rotate(45deg);
    border-top-right-radius: 6px;
  }
`;
