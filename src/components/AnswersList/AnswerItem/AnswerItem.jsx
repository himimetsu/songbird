import React, { useContext } from 'react';
import { data } from '../../../consts/data';
import { GameContext } from '../../../context/GameContext';
import { MainContext } from '../../../context/MainContext';
import correctAudio from '../../../assets/audio/correct.mp3';
import errorAudio from '../../../assets/audio/error.mp3';
import './AnswerItem.scss';

const AnswerItem = ({ name, id }) => {
  const { wrong, currentId, isRight, changeWrong, changeIsRight, score, changeScore, rightAnswers, changeRightAnswers, changeForcedPause } = useContext(GameContext);
  const { currentSection, status, changeSelectedBird } = useContext(MainContext);

  const playSoundIndication = (result) => {
    const audio = new Audio();
    result ? audio.src = correctAudio : audio.src = errorAudio;
    audio.play();
  };

  const answerItemHandler = () => {
    const currentSelectedBird = data[currentSection][id];
    changeSelectedBird(currentSelectedBird);

    if (status === 'game') {
      if (!isRight) {
        if (id !== currentId) {
          if (!wrong.includes(id)) {
            const copyWrong = wrong.slice();
            copyWrong.push(id);
            changeWrong(copyWrong);
            playSoundIndication(false);
          }
        } else {
          changeForcedPause(true);
          changeScore(score + 5 - wrong.length);
          changeIsRight(true);
          playSoundIndication(true);
          changeRightAnswers(rightAnswers + 1);
        }
      }
    }
  };

  return (
    <li
      className='answers-list__item'
      onClick={() => answerItemHandler(id)}
      data-id={id}
      data-wrong={wrong.includes(id) ? 'true' : id === currentId && isRight ? 'false' : 'default'}
    >
      <span>
        {name}
      </span>
    </li>
  );
};

export default AnswerItem;
