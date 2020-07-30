import React, { useState } from 'react';
import { SettingsContext } from './index';
import correctAudio from '../../assets/audio/correct.mp3';
import errorAudio from '../../assets/audio/error.mp3';

const SettingsApi = ({ children }) => {
  const [saveStatistics, setSaveStatistics] = useState(true);
  const [playCorrectSound, setPlayCorrectSound] = useState(true);
  const [playErrorSound, setPlayErrorSound] = useState(true);
  const [errorSoundVolume, setErrorSoundVolume] = useState(1);
  const [correctSoundVolume, setCorrectSoundVolume] = useState(1);

  const toggleSaveStatistics = (value) => setSaveStatistics(value);
  const togglePlayCorrectSound = (value) => setPlayCorrectSound(value);
  const togglePlayErrorSound = (value) => setPlayErrorSound(value);
  const changeErrorSoundVolume = (value) => setErrorSoundVolume(value);
  const changeCorrectSoundVolume = (value) => setCorrectSoundVolume(value);

  const playSoundIndication = (result) => {
    const audio = new Audio();
    result ? audio.src = correctAudio : audio.src = errorAudio;

    switch (result) {
      case true:
        audio.volume = correctSoundVolume;
        playCorrectSound && audio.play();
        break;
      case false:
        audio.volume = errorSoundVolume;
        playErrorSound && audio.play();
        break;
    }
  };

  return (
    <SettingsContext.Provider
      value={{ playSoundIndication }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsApi;
