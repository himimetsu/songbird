import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Header, Main, Footer } from './containers';
import MainApi from './context/MainContext/MainApi';
import GameApi from './context/GameContext/GameApi';

const App = () => {
  return (
    <MainApi>
      <GameApi>
        <Layout>
          <Header />
          <Main />
          <Footer />
        </Layout>
      </GameApi>
    </MainApi>
  );
};

export default App;
