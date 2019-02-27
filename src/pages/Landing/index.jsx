import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import 'assets/stylesheets/App.css';
import {
  Header,
  Logo,
  Description,
  LogoBar,
  Tmp,
  Footer,
} from './styles';

const Landing = () => (
  <Fragment>
    <Header>
      <Logo>
        <div id="logo-container">
          <div id="logo-text-container">
            <Link to="/" id="logo-text">
              <span id="logo-big">SANTIAGO,</span><span id="logo-small"> GUSTAVO</span>
            </Link>
          </div>
        </div>
        <LogoBar />
      </Logo>
      <Description>front-end . ui/ux . design</Description>
    </Header>
    <Tmp>
      <p id="whoops">WHOOPS!</p>
      <p>{'No posts yet, but here\'s a lorem ipsum:'}</p>
      <p id="lorem"><i>Lorem ipsum dolor sit amet </i></p>
      <p id="below">Please check my social links below!</p>
    </Tmp>
    <Footer>
      <div id="footer-bar" />
      <div id="footer-about">
        <a href="https://about.me/santiagogustavo">
          about.me/<strong>santiagogustavo</strong>
        </a>
      </div>
    </Footer>
  </Fragment>
);

export default Landing;
