import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: var(--color-background);
  border: var(--color-foreground) 4px solid;
  width: fit-content;
  top: ${props => props.posY}px;
  left: ${props => props.posX}px;
  padding: 16px;
  overflow: hidden;

  ${props => (
    !props.isDragging
      ? css`transition: all 200ms ease;`
      : null
  )}

  ${props => (
    !props.showBar && !props.isMaximized
      ? css`padding-top: calc(16px + 20px);`
      : null
  )}

  ${props => (
    props.isMaximized
      ? css`
        top: 0 !important;
        left: 0 !important;
        height: calc(100vh - 32px - 8px) !important;
        width: calc(100vw - 32px - 8px) !important;
      `
      : null
  )}
`;

export const BarContainer = styled.div`
  ${props => (
    !props.visible
      ? css`display: none;`
      : null
  )}
  cursor: pointer;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  height: 20px;
  width: 100%;
  overflow: hidden;
`;

export const Bar = styled.div`
  height: 100%;
  width: 100%;
  background: #424242;
  transition: all 200ms ease;

  &:hover {
    background: #616161;
  }
`;

export const Controls = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  float: right;
`;

export const Icon = styled.i`
  background: #424242;
  padding: 4px 8px;
  fill: #212121;
  font-size: 12px;
  transition: all 200ms ease;
  &:hover {
    background: #757575;
  }
`;
