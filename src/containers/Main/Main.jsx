import React, { useContext } from 'react';
import { QuestionBlock, AnswersList } from '../../components';
import { Button } from '../../UI';
import { GameContext } from '../../context/GameContext';
import { MainContext } from '../../context/MainContext';
import './Main.scss';

const Main = () => {
  const { status, changeStatus, currentBirds, changeSelectedBird } = useContext(MainContext);
  const { count, isRight, changeCount, changeCurrentId, changeWrong, changeIsRight } = useContext(GameContext);

  const controlGame = () => {
    switch (status) {
      case 'warmup':
        changeStatus('game');
        console.log(currentBirds[count].name, currentBirds[count].id);
        changeCurrentId(currentBirds[count].id);
        break;
      case 'game':
        {
          if (isRight) {
            console.log(currentBirds[count + 1].name, currentBirds[count + 1].id);
            changeCurrentId(currentBirds[count + 1].id);
            changeCount(count + 1);
            changeWrong([]);
            changeIsRight(false);
            changeSelectedBird({});
          }
        };
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
        text={status === 'game' ? 'Next Level' : 'Start game'}
        onClick={() => controlGame()}
      />
    </main>
  );
};

export default Main;
