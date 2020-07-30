import React, { useState, useEffect } from 'react';
import { birdsData } from '../../consts/birdsData';
import { MainContext } from './index';

const MainApi = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [showFooter, setShowFooter] = useState(false);
  const [status, setStatus] = useState('warmup');
  const [currentSection, setCurrentSection] = useState('forest');
  const [currentBirds, setCurrentBirds] = useState(birdsData.forest);
  const [selectedBird, setSelectedBird] = useState({});

  const changeTheme = (value) => setTheme(value);
  const changeShowFooter = (value) => setShowFooter(value);
  const changeStatus = (value) => setStatus(value);
  const changeCurrentSection = (value) => setCurrentSection(value);
  const changeSelectedBird = (value) => setSelectedBird(value);

  const updateCurrentBirds = () => {
    switch (currentSection) {
      case 'forest':
        setCurrentBirds(birdsData.forest);
        break;
      case 'marine':
        setCurrentBirds(birdsData.marine);
        break;
      case 'predatory':
        setCurrentBirds(birdsData.predatory);
        break;
      case 'sparrow':
        setCurrentBirds(birdsData.sparrow);
        break;
      case 'migratory':
        setCurrentBirds(birdsData.migratory);
        break;
      case 'songbirds':
        setCurrentBirds(birdsData.songbirds);
        break;
    }
  };

  useEffect(() => updateCurrentBirds(), [currentSection]);

  return (
    <MainContext.Provider value={{ theme, showFooter, changeTheme, changeShowFooter, status, changeStatus, currentSection, changeCurrentSection, currentBirds, selectedBird, changeSelectedBird }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainApi;
