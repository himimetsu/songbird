import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Header, Main, Footer } from './containers';

const App = () => {
  return (
    <Layout>
      <Header/>
      <Main />
      <Footer />
    </Layout>
  );
};

export default App;
