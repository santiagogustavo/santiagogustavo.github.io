import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import 'assets/stylesheets/variables.css';
import 'assets/stylesheets/index.css';
import FontCoolvetica from 'assets/fonts/Coolvetica';
import FontIPixelU from 'assets/fonts/IPixelU';

import Landing from 'pages/Landing';

const App = () => (
  <Fragment>
    <FontCoolvetica />
    <FontIPixelU />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
