import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  PronunciationContainer,
  AudioButton,
  AudioIcon,
  RegionTag
} from './Pronunciation.styles';

const Pronunciation = ({ phonetics }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const audioPhonetics = phonetics.filter(phonetic => phonetic.audio && phonetic.audio.trim() !== '');

  if (audioPhonetics.length === 0) {
    return null;
  }

  const playAudio = (audioUrl) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = audioUrl;
      audioRef.current.play();
      setPlaying(true);

      audioRef.current.onended = () => {
        setPlaying(false);
      };
    }
  };

  const getRegion = (audioUrl) => {
    const url = audioUrl.toLowerCase();
    if (url.includes('us') || url.includes('american')) return 'US';
    if (url.includes('uk') || url.includes('british')) return 'UK';
    return null;
  };

  return (
    <PronunciationContainer>
      <audio ref={audioRef} />

      {audioPhonetics.map((phonetic, index) => (
        <AudioButton
          key={index}
          onClick={() => playAudio(phonetic.audio)}
          disabled={playing}
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AudioIcon playing={playing} />
          {phonetic.text && <span>{phonetic.text}</span>}
          {getRegion(phonetic.audio) && (
            <RegionTag>{getRegion(phonetic.audio)}</RegionTag>
          )}
        </AudioButton>
      ))}
    </PronunciationContainer>
  );
};

export default Pronunciation;
