import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: var(--color-background);
  border: var(--color-foreground) 4px solid;
  width: fit-content;
  top: ${props => props.posY}px;
  left: ${props => props.posX}px;
  padding: 16px;

  ${props => (
    !props.showBar
      ? css`padding-top: calc(16px + 20px);`
      : null
  )}
`;

export const Bar = styled.div`
  ${props => (
    !props.visible
      ? css`display: none;`
      : null
  )}
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 100%;
  background: #424242;
  transition: all 200ms ease;

  &:hover {
    background: #616161;
  }
`;
