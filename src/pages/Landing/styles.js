import styled from 'styled-components';
import { SlideFadeIn, FadeIn, StretchIn } from 'utils/animations';

export const Header = styled.header`
  height: auto;
  width: 362px;
  margin: 10px auto;
`;

export const Logo = styled.div`
  font-family: 'Coolvetica', sans-serif;
  text-align: center;
  #logo-container {
    height: 50px;
    margin: 0 auto 5px auto;
    overflow: hidden;
    white-space: nowrap;
    #logo-text-container {
      animation: ${SlideFadeIn} 1s ease forwards;
      opacity: 0;
      #logo-text {
        color: var(--color-logo);
        text-decoration: none;
        #logo-big {
          font-size: 42px;
        }
        #logo-small {
          font-size: 36px;
        }
      }
    }
  }
`;

export const Description = styled.div`
  animation: ${FadeIn} 1s ease forwards;
  font-family: 'Coolvetica', sans-serif;
  font-size: 20px;
  margin-top: 5px;
  text-align: center;
  opacity: 0;
`;

export const LogoBar = styled.div`
  animation: ${StretchIn} 1s ease forwards;
  background: linear-gradient(to right, var(--color-hint-A), var(--color-hint-B));
  height: 5px;
  margin: auto;
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
