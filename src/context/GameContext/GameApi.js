import React, { useState } from 'react';
import { GameContext } from './index';

const GameApi = ({ children }) => {
  const [count, setCount] = useState(0);
  const [wrong, setWrong] = useState([]);
  const [score, setScore] = useState(0);
  const [isRight, setIsRight] = useState(false);
  const [currentId, setCurrentId] = useState();

  const changeCurrentId = (value) => setCurrentId(value);
  const changeCount = (value) => setCount(value);
  const changeScore = (value) => setScore(value);
  const changeWrong = (value) => setWrong(value);
  const changeIsRight = (value) => setIsRight(value);

  return (
    <GameContext.Provider
      value={{ score, changeScore, wrong, isRight, currentId, changeCurrentId, count, changeCount, changeWrong, changeIsRight }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameApi;
