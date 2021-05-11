import styled, { css } from 'styled-components';

import { TEXT_COLOR } from 'common/constants/colors';

export const PlayerContainer = styled.div`
  margin-top: 50px;
`;

export const PrevAndNextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const buttonStyles = css`
  cursor: pointer;
  fill: ${TEXT_COLOR};
  width: 30px;
  height: 30px;
  margin: 0 15px;
`;

const disableStyles = css`
  opacity: 0.5;
  pointer-events: none;
`;

interface buttonProps {
  isActive: string;
}

export const PrevButton = styled.div<buttonProps>`
  > svg {
    ${buttonStyles};
    ${({ isActive }) => !isActive && disableStyles};
    transform: rotate(180deg);
  }
`;

export const NextButton = styled.div<buttonProps>`
  > svg {
    ${buttonStyles};
    ${({ isActive }) => !isActive && disableStyles};
  }
`;
