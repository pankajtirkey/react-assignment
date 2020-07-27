import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import FormPage from './containers/FormPage/FormPage';
import ViewPage from './containers/ViewPage/ViewPage';

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/form' component={FormPage}></Route>
          <Route path='/view' component={ViewPage}></Route>
        </Switch>
      </Layout>
    </>
  );
};

export default App;
