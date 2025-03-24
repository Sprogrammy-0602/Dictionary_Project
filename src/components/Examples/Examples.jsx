import React from 'react';
import { motion } from 'framer-motion';
import {
  ExampleContainer,
  ExampleLabel,
  ExampleText
} from './Examples.styles';

const Examples = ({ example }) => {
  if (!example) return null;
  
  return (
    <ExampleContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ExampleLabel>Example:</ExampleLabel>
      <ExampleText>"{example}"</ExampleText>
    </ExampleContainer>
  );
};

export default Examples;
