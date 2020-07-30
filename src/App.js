import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Header, Main, Footer } from './containers';
import MainApi from './context/MainContext/MainApi';
import GameApi from './context/GameContext/GameApi';
import SettingsApi from './context/SettingsContext/SettingsApi';

const App = () => {
  return (
    <SettingsApi>
      <MainApi>
        <GameApi>
          <Layout>
            <Header />
            <Main />
            <Footer />
          </Layout>
        </GameApi>
      </MainApi>
    </SettingsApi>
  );
};

export default App;
