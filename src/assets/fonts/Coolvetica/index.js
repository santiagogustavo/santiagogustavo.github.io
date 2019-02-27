import { createGlobalStyle } from 'styled-components';

import Woff from './CoolveticaRg-Regular.woff';
import Woff2 from './CoolveticaRg-Regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Coolvetica';
    src: url(${Woff}) format('woff2'),
        url(${Woff2}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
