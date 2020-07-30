import React from 'react';
import './Main.scss';
import { QuestionBlock, Button } from '../../components';

const Main = () => {
  return (
    <main className='site-main'>
      <QuestionBlock type='issue' element='site-main__issue' />
      <QuestionBlock type='description' element='site-main__description' />
      <Button
        classbtn='game-btn'
        type='button'
        text={status === 'game' ? 'Next Level' : 'Start game'}
      />
    </main>
  );
};

export default Main;
