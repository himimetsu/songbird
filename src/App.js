import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Header, Main, Footer } from './containers';
import MainApi from './context/MainContext/MainApi';

const App = () => {
  return (
    <MainApi>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </MainApi>
  );
};

export default App;
