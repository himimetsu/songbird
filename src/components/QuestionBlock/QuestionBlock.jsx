import React, { useContext } from 'react';
import { birdsData } from '../../consts/birdsData';
import { GameContext } from '../../context/GameContext';
import { MainContext } from '../../context/MainContext';
import './QuestionBlock.scss';

const QuestionBlock = ({ element, type }) => {
  const { currentId, isRight } = useContext(GameContext);
  const { selectedBird, currentSection, status } = useContext(MainContext);

  return (
    <div className={`${element} player-wrapper`}>
      <div className='player-wrapper__photo'>
        <img
          className='player-wrapper__img'
          alt="bird"
          src={type === 'description'
            ? selectedBird.image
            : isRight && birdsData[currentSection][currentId].image
          }
        />
      </div>
      <div className='player-wrapper__content content-info'>
        <div className='content-info__name'>
          {type === 'description'
            ? selectedBird.name ? selectedBird.name : 'Название птицы'
            : isRight ? birdsData[currentSection][currentId].name : '***'
          }
        </div>
        {type === 'description' && 
          <div className='content-info__latin'>
            {selectedBird.species ? selectedBird.species : 'Латинское название'}
          </div>
        }
        <div className='content-info__audioplayer'>
          <audio controls className='react-audio-player'
          src={type === 'description'
            ? selectedBird.audio
            : status === 'game' && birdsData[currentSection][currentId].audio}
          />
        </div>
      </div>

      {type === 'description' &&
        <div className='player-wrapper__description'>
          {selectedBird.description}
        </div>
      }
    </div>
  );
};

export default QuestionBlock;
