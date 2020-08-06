import React, { useRef, useEffect, useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { GameContext } from '../../context/GameContext';
import './ReactPlayer.scss';

const ReactPlayer = ({ type, selectedBird, currentSection, currentId, birdsData, forcedPause }) => {
  const { changeForcedPause } = useContext(GameContext);
  const refPlayer = useRef();

  useEffect(() => {
    if (forcedPause) {
      refPlayer.current.audio.current.pause();
    }
    changeForcedPause(false);
  }, [forcedPause]);

  return (
    <div className='audio-player' data-type={type}>
      <AudioPlayer
        ref={refPlayer}
        autoPlayAfterSrcChange={false}
        layout='horizontal-reverse'
        defaultCurrentTime='00:00'
        defaultDuration='00:00'
        autoPlay={false}
        showJumpControls={false}
        src={type === 'description'
          ? selectedBird ? selectedBird.audio : undefined
          : currentId ? birdsData[currentSection][currentId].audio : undefined}
      />
    </div>
  );
};

export default ReactPlayer;
