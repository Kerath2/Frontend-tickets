import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import RepoPage from './content/RepoPage';
import TutorialHeader from './components/TutorialHeader';
import OpenCases from './components/OpenCases';
import './App.css'

import TablaSeveridad from './components/TablaSeveridad';
import InfoQuarter from './components/InfoQuarter';

function App() {
  return (
    <BrowserRouter>
      <div className="background-container">
        <TutorialHeader />  
        <Content>
          <Switch>
            <Route path="/" component={RepoPage} />
          </Switch>
        </Content>
      </div>
    </BrowserRouter>
  );
}

export default App;
