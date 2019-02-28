import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Logo as LogoContainer,
  Description,
  LogoBar,
} from './styles';

const Logo = () => (
  <Fragment>
    <LogoContainer>
      <div id="logo-container">
        <div id="logo-text-container">
          <Link to="/" id="logo-text">
            <span id="logo-big">SANTIAGO,</span><span id="logo-small"> GUSTAVO</span>
          </Link>
        </div>
      </div>
      <LogoBar />
    </LogoContainer>
    <Description>front-end . ui/ux . design</Description>
  </Fragment>
);

export default Logo;
