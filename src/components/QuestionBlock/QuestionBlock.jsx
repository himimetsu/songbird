import React, { useContext } from 'react';
import defaultBird from '../../assets/images/defaultBird.jpg';
import { data } from '../../consts/data';
import { GameContext } from '../../context/GameContext';
import { MainContext } from '../../context/MainContext';
import { ReactPlayer } from '../../UI';
import './QuestionBlock.scss';

const QuestionBlock = ({ element, type }) => {
  const { currentId, isRight, forcedPause } = useContext(GameContext);
  const { selectedBird, currentSection, status } = useContext(MainContext);

  return (
    <div className={`${element} player-wrapper`} data-type={type}>
      <div className='player-wrapper__photo'>
        <img
          className='player-wrapper__img'
          alt="bird"
          src={type === 'description'
            ? selectedBird.image ? selectedBird.image : defaultBird
            : isRight ? data[currentSection][currentId].image : defaultBird
          }
        />
      </div>
      <div className='player-wrapper__content content-info'>
        <div className='content-info__name'>

          {type === 'description'
            ? selectedBird.name && selectedBird.name
            : isRight ? data[currentSection][currentId].name : '*****'
          }
        </div>

        {type === 'description' && 
          <div className='content-info__latin'>
            {selectedBird.species && selectedBird.species}
          </div>
        }

        <div className='content-info__audioplayer'>
          <ReactPlayer
            forcedPause={forcedPause}
            birdsData={data}
            type={type}
            selectedBird={selectedBird}
            status={status}
            currentId={currentId}
            currentSection={currentSection}
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
