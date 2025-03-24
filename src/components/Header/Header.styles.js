import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.card};
  box-shadow: ${(props) => props.theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const Logo = styled(motion.div).attrs({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
})`
  font-size: 1.8rem;
  font-weight: 700;

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.primaryHover};
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const NavLink = styled(RouterNavLink)`
  color: ${(props) => props.theme.textSecondary};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: ${(props) => props.theme.primary};
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FontSelector = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary}33;
  }
`;

export const FontOption = styled.option`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
`;
