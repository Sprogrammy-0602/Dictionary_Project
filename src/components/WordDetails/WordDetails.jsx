import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { BookmarkContext } from '../../context/BookmarkContext';
import Pronunciation from '../Pronunciation/Pronunciation';
import Examples from '../Examples/Examples';
import Synonyms from '../Synonyms/Synonyms';
import {
  WordDetailsContainer,
  WordHeader,
  WordTitle,
  WordPhonetic,
  BookmarkButton,
  PartOfSpeechSection,
  PartOfSpeechLabel,
  DefinitionList,
  DefinitionItem,
  DefinitionText,
  NoDefinitionsMessage,
  SourceSection,
  SourceTitle,
  SourceLink,
  LoadingIndicator
} from './WordDetails.styles';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const WordDetails = ({ word, definition, loading, onSynonymClick }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useContext(BookmarkContext);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!definition || definition.length === 0) {
    return null;
  }

  const wordData = definition[0];
  const bookmarked = isBookmarked(word);

  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(word);
    } else {
      addBookmark(word, wordData);
    }
  };

  return (
    <WordDetailsContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <WordHeader>
        <div>
          <WordTitle>{wordData.word}</WordTitle>
          {wordData.phonetic && <WordPhonetic>{wordData.phonetic}</WordPhonetic>}
        </div>
        <BookmarkButton
          onClick={toggleBookmark}
          bookmarked={bookmarked}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {bookmarked ? 'Bookmarked' : 'Bookmark'}
        </BookmarkButton>
      </WordHeader>

      {wordData.phonetics && wordData.phonetics.length > 0 && (
        <Pronunciation phonetics={wordData.phonetics} />
      )}

      {wordData.meanings && wordData.meanings.length > 0 ? (
        wordData.meanings.map((meaning, index) => (
          <PartOfSpeechSection
            key={index}
            as={motion.section}
            variants={itemVariants}
          >
            <PartOfSpeechLabel>{meaning.partOfSpeech}</PartOfSpeechLabel>

            <DefinitionList>
              {meaning.definitions.map((def, defIndex) => (
                <DefinitionItem key={defIndex}>
                  <DefinitionText>{def.definition}</DefinitionText>
                  {def.example && <Examples example={def.example} />}
                </DefinitionItem>
              ))}
            </DefinitionList>

            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <Synonyms
                synonyms={meaning.synonyms}
                onSynonymClick={onSynonymClick}
              />
            )}
          </PartOfSpeechSection>
        ))
      ) : (
        <NoDefinitionsMessage>No definitions found for this word.</NoDefinitionsMessage>
      )}

      {wordData.sourceUrls && wordData.sourceUrls.length > 0 && (
        <SourceSection>
          <SourceTitle>Source:</SourceTitle>
          {wordData.sourceUrls.map((url, index) => (
            <SourceLink
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </SourceLink>
          ))}
        </SourceSection>
      )}
    </WordDetailsContainer>
  );
};

export default WordDetails;