import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import {
  ToggleContainer,
  ToggleTrack,
  ToggleThumb,
  MoonIcon,
  SunIcon
} from './ThemeToggle.styles';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleContainer onClick={toggleTheme}>
      <ToggleTrack isDarkMode={isDarkMode}>
        <SunIcon isDarkMode={isDarkMode} />
        <MoonIcon isDarkMode={isDarkMode} />
        <ToggleThumb 
          as={motion.div}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          isDarkMode={isDarkMode} 
        />
      </ToggleTrack>
    </ToggleContainer>
  );
};

export default ThemeToggle;
