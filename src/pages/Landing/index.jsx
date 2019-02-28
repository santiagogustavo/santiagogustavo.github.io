import React from 'react';

import 'assets/stylesheets/App.css';
import Logo from 'components/atoms/Logo';
import {
  Container,
  Card,
  Header,
  // Tmp,
  Footer,
} from './styles';

const Landing = () => (
  <Container>
    <Card>
      <Header>
        <Logo />
      </Header>
      {/* <Tmp>
        <p id="whoops">WHOOPS!</p>
        <p>{'No posts yet, but here\'s a lorem ipsum:'}</p>
        <p id="lorem"><i>Lorem ipsum dolor sit amet </i></p>
        <p id="below">Please check my social links below!</p>
      </Tmp> */}
      <Footer>
        {/* <div id="footer-bar" /> */}
        <div id="footer-about">
          <a href="https://about.me/santiagogustavo">
            about.me/<strong>santiagogustavo</strong>
          </a>
        </div>
      </Footer>
    </Card>
  </Container>
);

export default Landing;
