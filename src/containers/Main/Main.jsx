import React, { useContext } from 'react';
import { QuestionBlock, AnswersList } from '../../components';
import { Button } from '../../UI';
import { GameContext } from '../../context/GameContext';
import { MainContext } from '../../context/MainContext';
import { navbarItems } from '../../consts/navbarItems';
import { getRandomInRange } from '../../utils/getRandomInRange';
import './Main.scss';

const Main = () => {
  const { status, changeStatus, changeSelectedBird, changeCurrentSection } = useContext(MainContext);
  const { count, isRight, changeCount, changeCurrentId, changeWrong, changeIsRight } = useContext(GameContext);

  const startGame = () => {
    changeCurrentSection('migratory');
    changeStatus('game');
    changeCurrentId(getRandomInRange(0, 5));
  };

  const goToNextLevel = () => {
    if (isRight) {
      changeCurrentSection(navbarItems[count + 1].section);
      changeCurrentId(getRandomInRange(0, 5));
      changeCount(count + 1);
      changeWrong([]);
      changeIsRight(false);
      changeSelectedBird({});
    }
  };

  const controlGame = () => {
    switch (status) {
      case 'warmup':
        startGame();
        break;
      case 'game':
        goToNextLevel();
        break;
      case 'finish':
        break;
    }
  };

  return (
    <main className='site-main'>
      <QuestionBlock type='issue' element='site-main__issue' />
      <AnswersList element='site-main__answers' />
      <QuestionBlock type='description' element='site-main__description' />
      <Button
        classbtn='game-btn'
        type='button'
        text={status === 'game'
          ? 'Next Level'
          : 'Start game'
        }
        condition={status === 'game' ? !isRight : false}
        onClick={() => controlGame()}
      />
    </main>
  );
};

export default Main;
