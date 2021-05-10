import styled, { keyframes } from 'styled-components';

import { TEXT_COLOR } from 'common/constants/colors';

const spin = keyframes`
  100% { transform:rotate(360deg); }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 125px;
  > svg {
    width: 150px;
    height: 150px;
    fill: ${TEXT_COLOR};
    animation: ${spin} 4s linear infinite;
    position: absolute;
  }
`;
