import React, { useContext } from 'react';
import { Button } from '../../UI';
import { MainContext } from '../../context/MainContext';
import { getRandomInRange } from '../../utils/getRandomInRange';
import { GameContext } from '../../context/GameContext';
import resultsImage from '../../assets/images/back.jpg';
import './Results.scss';

const Results = ({ score }) => {
  const { changeStatus, changeSelectedBird, changeCurrentSection } = useContext(MainContext);
  const { changeCount, changeCurrentId, changeWrong, changeIsRight, changeRightAnswers, changeScore } = useContext(GameContext);

  const resultsHandler = () => {
    changeScore(0);
    changeCount(0);
    changeWrong([]);
    changeRightAnswers(0);
    changeIsRight(false);
    changeSelectedBird();
    changeCurrentSection('migratory');
    changeCurrentId(getRandomInRange(0, 5));
    changeStatus('game');
  };

  return (
    <div className='results-modal'>
      <div className='results-modal__title'>Поздравляем!</div>
      <div className='results-modal__description'>

        {score < 30
          ? (<div>Вы прошли викторину и набрали {score} из 30 возможных баллов</div>)
          : (<div>Вы набрали максимум баллов, вам явно интересны птицы! <br/> Чирики приняли вас в птичью банду!</div>)
        }

        {score === 30 &&
          <div className='results-modal__image'>
            <img src={resultsImage} alt="background results" />
          </div>
        }

      </div>
      <div className='results-modal__button'>
        <Button
          classbtn='resultsbtn'
          text='Попробовать ещё раз'
          type='button'
          onClick={() => resultsHandler()}
        />
      </div>
    </div>
  );
};

export default Results;
