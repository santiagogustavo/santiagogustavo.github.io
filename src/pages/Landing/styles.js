import styled from 'styled-components';

import CardRaw from 'components/atoms/Card';
import { FadeIn, StretchIn } from 'utils/animations';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  background-color: var(--color-background);
  color: var(--color-foreground);
`;

export const Card = styled(CardRaw)`
  width: 512px;
`;

export const Header = styled.header`
  height: auto;
  width: 362px;
  margin: 10px auto;
`;

export const Tmp = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;
  font-family: 'Oxygen', sans-serif;
  text-align: center;
  #whoops {
    font-family: 'I Pixel U', sans-serif;
    font-size: 46px;
  }
  #lorem {
    font-family: serif;
  }
`;

export const Footer = styled.footer`
  height: auto;
  width: 362px;
  font-family: 'Oxygen', sans-serif;
  margin: 20px auto;
  text-align: center;
  > #footer-bar {
    animation: ${StretchIn} 1s ease forwards;
    background: var(--color-foreground);
    height: 5px;
    margin: auto;
  }
  > #footer-about {
    animation: ${FadeIn} 1s ease forwards;
    margin-top: 5px;
    opacity: 0;
    > a {
      color: var(--color-foreground);
      text-decoration: none;
    }
  }
`;
