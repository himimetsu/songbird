import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import { birdsData } from '../../../consts/birdsData';
import { MainContext } from '../../../context/MainContext';
import './AnswerItem.scss';

const AnswerItem = ({ name, id }) => {
  const { wrong, currentId, isRight, count, changeWrong, changeIsRight, score, changeScore } = useContext(GameContext);
  const { currentSection, status, changeSelectedBird } = useContext(MainContext);

  const answerItemHandler = () => {
    const currentSelectedBird = birdsData[currentSection][id];
    changeSelectedBird(currentSelectedBird);

    if (status === 'game') {
      if (!isRight) {
        if (id !== currentId) {
          const copyWrong = wrong.slice();
          copyWrong.push(id);
          changeWrong(copyWrong);
        } else {
          if (score + 5 - wrong.length === 30 || count === 5 && isRight) {
            console.log('end game');
          }
          changeScore(score + 5 - wrong.length);
          changeIsRight(true);
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
