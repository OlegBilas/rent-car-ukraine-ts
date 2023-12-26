import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(35, 38, 42, 0.5);
  z-index: 100;
  /* opacity: 0;
  transition: opacity 2500ms ease-in-out;

  &.opened {
    opacity: 0.5;
    transition: opacity 2500ms ease-in-out;
  } */
`;
