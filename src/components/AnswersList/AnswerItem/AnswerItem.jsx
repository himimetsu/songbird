import React, { useContext } from 'react';
import { birdsData } from '../../../consts/birdsData';
import { GameContext } from '../../../context/GameContext';
import { MainContext } from '../../../context/MainContext';
import { SettingsContext } from '../../../context/SettingsContext';
import './AnswerItem.scss';

const AnswerItem = ({ name, id }) => {
  const { wrong, currentId, isRight, count, changeWrong, changeIsRight, score, changeScore } = useContext(GameContext);
  const { currentSection, status, changeSelectedBird } = useContext(MainContext);
  const { playSoundIndication } = useContext(SettingsContext);

  const answerItemHandler = () => {
    const currentSelectedBird = birdsData[currentSection][id];
    changeSelectedBird(currentSelectedBird);

    if (status === 'game') {
      if (!isRight) {
        if (id !== currentId) {
          const copyWrong = wrong.slice();
          copyWrong.push(id);
          changeWrong(copyWrong);
          playSoundIndication(false);
        } else {
          if (score + 5 - wrong.length === 30 || count === 5 && isRight) {
            console.log('end game');
          }
          changeScore(score + 5 - wrong.length);
          changeIsRight(true);
          playSoundIndication(true);
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
      style={{ order: id }}
    >
      <span>
        {name}
      </span>
    </li>
  );
};

export default AnswerItem;
