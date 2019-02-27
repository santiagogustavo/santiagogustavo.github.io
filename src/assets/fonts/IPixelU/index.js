import { createGlobalStyle } from 'styled-components';

import Woff from './I-pixel-u.woff';
import Woff2 from './I-pixel-u.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'I Pixel U';
    src: url(${Woff}) format('woff2'),
        url(${Woff2}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
