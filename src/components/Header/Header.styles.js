import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  background: linear-gradient(
    to right,
    ${(props) =>
      props.theme.background === "#1A202C" ? "#2A2A2A" : "#EFEFEF"},
    ${(props) => (props.theme.background === "#1A202C" ? "#3A3A3A" : "#EAEAEA")}
  );
  box-shadow: ${(props) => props.theme.shadow};
  position: relative;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.background === "#1A202C"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.8rem;
    gap: 0.8rem;
  }
`;

export const Logo = styled(motion.div).attrs({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
})`
  font-size: 1.6rem;
  font-weight: bold;

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.primaryHover};
      text-shadow: 0px 2px ${(props) => props.theme.primaryHover}33;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const NavLink = styled(RouterNavLink)`
  color: ${(props) => props.theme.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
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
    bottom: -2px;
    left: 0;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.primaryHover}
    );
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
  gap: 0.8rem;
`;

export const FontSelector = styled.select`
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus,
  &:hover {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

export const FontOption = styled.option`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
`;
