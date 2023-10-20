import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import RepoPage from './content/RepoPage';
import TutorialHeader from './components/TutorialHeader';
import './App.css'


import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="background-container">
        <Theme theme='g100'>
        <TutorialHeader />
        </Theme>
        <Content>
          <Login/>
          <Switch>
            <Route path="/" component={RepoPage} />
          </Switch>
        </Content>
      </div>
    </BrowserRouter>
  );
}

export default App;
