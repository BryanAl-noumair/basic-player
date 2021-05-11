import styled from 'styled-components';

import { TEXT_COLOR } from 'common/constants/colors';

export const Wrapper = styled.div`
  > svg {
    width: 50px;
    height: 50px;
    fill: ${TEXT_COLOR};
    cursor: pointer;
  }
`;
