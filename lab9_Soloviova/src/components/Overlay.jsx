import styled from 'styled-components';

import { fadeIn } from 'utils/keyframes';

export const Overlay = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.6);

  animation: ${fadeIn} 250ms forwards;
`;
