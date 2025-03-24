import React from 'react';
import { motion } from 'framer-motion';
import {
  SynonymsContainer,
  SynonymsLabel,
  SynonymsList,
  SynonymItem
} from './Synonyms.styles';

const Synonyms = ({ synonyms, onSynonymClick }) => {
  if (!synonyms || synonyms.length === 0) return null;
  
  return (
    <SynonymsContainer>
      <SynonymsLabel>Synonyms:</SynonymsLabel>
      <SynonymsList>
        {synonyms.map((synonym, index) => (
          <SynonymItem 
            key={index}
            onClick={() => onSynonymClick(synonym)}
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {synonym}
          </SynonymItem>
        ))}
      </SynonymsList>
    </SynonymsContainer>
  );
};

export default Synonyms;
