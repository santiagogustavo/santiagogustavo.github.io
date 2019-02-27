import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const SlideFadeIn = keyframes`
  0% { opacity: 0; transform: translateY(15px); }
  100% { opacity: 1; transform: translateY(0px); }
`;

export const StretchIn = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;
