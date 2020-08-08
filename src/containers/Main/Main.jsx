import React, { useContext } from 'react';
import { QuestionBlock, AnswersList, Results } from '../../components';
import { Button, DefaultText } from '../../UI';
import { GameContext } from '../../context/GameContext';
import { MainContext } from '../../context/MainContext';
import { navbarItems } from '../../consts/navbarItems';
import { getRandomInRange } from '../../utils/getRandomInRange';
import './Main.scss';

const Main = () => {
  const { status, changeStatus, changeSelectedBird, changeCurrentSection, selectedBird } = useContext(MainContext);
  const { count, isRight, changeCount, changeCurrentId, changeWrong, changeIsRight, rightAnswers, score } = useContext(GameContext);

  const controlGame = () => {
    if (rightAnswers === 6) {
      changeStatus('finish');
    } else {
      if (isRight) {
        changeCurrentSection(navbarItems[count + 1].section);
        changeCurrentId(getRandomInRange(0, 5));
        changeCount(count + 1);
        changeWrong([]);
        changeIsRight(false);
        changeSelectedBird();
      }
    }
  };

  return (
    <main className='site-main'>
      {status !== 'finish' && <QuestionBlock type='issue' element='site-main__issue' />}
      {status !== 'finish' && <AnswersList element='site-main__answers' />}
      {status !== 'finish' && selectedBird && <QuestionBlock type='description' element='site-main__description' />}
      {status !== 'finish' && !selectedBird && <DefaultText />}
      {status !== 'finish' &&
        <Button
          classbtn='game-btn'
          type='button'
          text={rightAnswers === 6 ? 'Finish' : 'Next Level'}
          condition={status === 'game' ? !isRight : false}
          onClick={() => controlGame()}
        />
      }
      {status === 'finish' && <Results score={score} />}
    </main>
  );
};

export default Main;
