import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import RepoPage from './content/RepoPage';
import TutorialHeader from './components/TutorialHeader';
import './App.css'

import TablaSev1 from './components/TablaSev1'

function App() {
  return (
    <BrowserRouter>
      <div className="background-container">
        <TutorialHeader />  
        <TablaSev1/>
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
