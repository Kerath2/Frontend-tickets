import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import TutorialHeader from './components/TutorialHeader';
import OpenCases from './components/OpenCases';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="background-container">
        <TutorialHeader />  
        <Content>
            <OpenCases/>
          <Switch>
            {/* <Route exact path="/" component={LandingPage} /> */}
            {/* <Route path="/repos" component={RepoPage} /> */}
            <Route path="/" component={RepoPage} />
          </Switch>
        </Content>
      </div>
    </BrowserRouter>
  );
}

export default App;
