import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import TutorialHeader from './components/TutorialHeader';

function App() {
  return (
    <BrowserRouter>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </Content>
    </BrowserRouter>
  );
}

export default App;
