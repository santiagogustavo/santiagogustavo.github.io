import styled from 'styled-components';

import { SlideFadeIn, FadeIn, StretchIn } from 'utils/animations';

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
