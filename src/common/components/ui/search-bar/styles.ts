import styled from 'styled-components';

import { TEXT_COLOR } from 'common/constants/colors';

export const Input = styled.input`
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 5px;
  padding: 5px 20px;
  box-sizing: border-box;
  font-size: 25px;
  font-weight: bold;
  color: ${TEXT_COLOR};
  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 0.5;
  }
`;
