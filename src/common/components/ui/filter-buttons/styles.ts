import styled, { css } from 'styled-components';

import { TEXT_COLOR } from 'common/constants/colors';

interface buttonProps {
  isActive: boolean;
}

const activeStyles = css`
  background: ${TEXT_COLOR};
  color: #fff;
`;

export const Button = styled.button<buttonProps>`
  margin-top: 20px;
  border: 2px solid ${TEXT_COLOR};
  cursor: pointer;
  font-size: 20px;
  color: ${TEXT_COLOR};
  &:not(:first-of-type) {
    border-left: none;
  }
  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }
  ${({ isActive }) => isActive && activeStyles};
`;
