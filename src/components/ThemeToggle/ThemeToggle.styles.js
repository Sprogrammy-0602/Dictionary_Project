import styled from "styled-components";

export const ToggleContainer = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export const ToggleTrack = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.primary : props.theme.backgroundSecondary};
  border-radius: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: background-color 0.3s ease;
  border: 1px solid
    ${(props) => (props.isDarkMode ? "transparent" : props.theme.border)};
`;

export const ToggleThumb = styled.div`
  position: absolute;
  left: ${(props) => (props.isDarkMode ? "calc(100% - 25px)" : "5px")};
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const SunIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #f6e05e;
  opacity: ${(props) => (props.isDarkMode ? 0.5 : 1)};
  transition: opacity 0.3s ease;
  z-index: 1;
`;

export const MoonIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #9f7aea;
  opacity: ${(props) => (props.isDarkMode ? 1 : 0.5)};
  transition: opacity 0.3s ease;
  z-index: 1;
`;
