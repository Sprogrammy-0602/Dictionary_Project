import styled from "styled-components";

export const SynonymsContainer = styled.div`
  margin-top: 1.5rem;
`;

export const SynonymsLabel = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.75rem;
`;

export const SynonymsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SynonymItem = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => `${props.theme.primary}15`};
  color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;
