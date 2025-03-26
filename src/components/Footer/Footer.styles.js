import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(
    to right,
    ${(props) =>
      props.theme.background === "#1A202C" ? "#2A2A2A" : "#EFEFEF"},
    ${(props) => (props.theme.background === "#1A202C" ? "#3A3A3A" : "#EAEAEA")}
  );
  padding: 1rem 0; /* Reduced from 2rem to 1rem */
  color: ${(props) => props.theme.text};
  border-top: 1px solid
    ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};
  position: relative;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  margin: 0 1rem;

  h4 {
    color: ${(props) => props.theme.primary};
    margin-bottom: 0.5rem; /* Reduced from 1rem */
    font-size: 0.9rem; /* Smaller heading */
  }

  p {
    font-size: 0.8rem; /* Reduced from 0.9rem */
    line-height: 1.3; /* Reduced from 1.5 */
    margin-bottom: 0.5rem; /* Reduced from 1rem */
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem; /* Reduced from 2rem */
  }
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.textSecondary};
  text-decoration: none;
  display: block;
  margin-bottom: 0.3rem; /* Reduced from 0.5rem */
  font-size: 0.8rem; /* Added smaller font size */
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export const CopyrightText = styled.p`
  text-align: center;
  margin-top: 0.8rem; /* Reduced from 2rem */
  font-size: 0.7rem; /* Reduced from 0.8rem */
  color: ${(props) => props.theme.textSecondary};
`;
