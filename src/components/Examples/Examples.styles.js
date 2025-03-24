import styled from "styled-components";

export const ExampleContainer = styled.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  background-color: ${(props) => `${props.theme.backgroundSecondary}`};
  border-radius: 6px;
  font-style: italic;
`;

export const ExampleLabel = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.primary};
  margin-right: 0.5rem;
  font-style: normal;
`;

export const ExampleText = styled.span`
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.5;
`;
