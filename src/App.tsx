import React from 'react';
import { Router } from '@reach/router';
import Main from './Main'
import Other from './SomeOtherPath';
import Nav from './Nav'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Other path="/somepath" />
        <Main default />
      </Router>
    </React.Fragment>
  );
}

export default App;
