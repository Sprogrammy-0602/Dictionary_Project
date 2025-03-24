import styled, { keyframes } from "styled-components";

const audioWave = keyframes`
  0% { height: 3px; }
  50% { height: 12px; }
  100% { height: 3px; }
`;

export const PronunciationContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
`;

export const AudioButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  background-color: ${(props) => `${props.theme.primary}15`};
  color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => `${props.theme.primary}25`};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  span {
    font-weight: 500;
  }
`;

export const AudioIcon = styled.div`
  position: relative;
  width: 20px;
  height: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.primary};
    border-radius: 2px;
  }

  &::before {
    width: 3px;
    height: 100%;
    left: 0;
  }

  &::after {
    width: 3px;
    height: 60%;
    left: 6px;
    top: 20%;
    animation: ${(props) => (props.playing ? audioWave : "none")} 0.8s infinite;
  }

  &::before {
    width: 3px;
    height: 100%;
    left: 12px;
  }
`;

export const RegionTag = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  background-color: ${(props) => props.theme.primary};
  color: white;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
`;
