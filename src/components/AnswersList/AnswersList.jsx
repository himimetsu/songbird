import React, { useContext } from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import { MainContext } from '../../context/MainContext';
import './AnswersList.scss';

const AnswersList = ({ element }) => {
  const { currentBirds } = useContext(MainContext);

  const renderAnswerItems = () => {
    return (
      currentBirds.map(bird => (
        <AnswerItem {...bird} key={bird.id} />
      ))
    );
  };

  return (
    <div className={`${element} answers-wrapper`}>
      <ul className='answers-wrapper__list answers-list'>
        {renderAnswerItems()}
      </ul>
    </div>
  );
};

export default AnswersList;
