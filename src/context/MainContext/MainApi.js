import React, { useState, useEffect } from 'react';
import { data } from '../../consts/data';
import { MainContext } from './index';

const MainApi = ({ children }) => {
  const [showResults, setResults] = useState(false);
  const [status, setStatus] = useState('game');
  const [currentSection, setCurrentSection] = useState('migratory');
  const [currentBirds, setCurrentBirds] = useState(data.migratory);
  const [selectedBird, setSelectedBird] = useState();

  const changeStatus = (value) => setStatus(value);
  const changeCurrentSection = (value) => setCurrentSection(value);
  const changeSelectedBird = (value) => setSelectedBird(value);
  const toggleShowResults = (value) => setResults(value);

  const updateCurrentBirds = () => {
    switch (currentSection) {
      case 'migratory':
        setCurrentBirds(data.migratory);
        break;
      case 'predatory':
        setCurrentBirds(data.predatory);
        break;
      case 'wintering':
        setCurrentBirds(data.wintering);
        break;
      case 'domestic':
        setCurrentBirds(data.domestic);
        break;
      case 'sparrow':
        setCurrentBirds(data.sparrow);
        break;
      case 'marine':
        setCurrentBirds(data.marine);
        break;
    }
  };

  useEffect(() => updateCurrentBirds(), [currentSection]);

  return (
    <MainContext.Provider value={{ status, changeStatus, currentSection, changeCurrentSection, currentBirds, selectedBird, changeSelectedBird, showResults, toggleShowResults }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainApi;
