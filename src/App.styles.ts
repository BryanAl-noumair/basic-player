import styled from 'styled-components';

import { CONTAINER_BACKGROUND } from 'common/constants/colors';

export const Container = styled.div`
  background: ${CONTAINER_BACKGROUND};
  flex: 1;
  min-height: 500px;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  padding: 30px;
  box-sizing: border-box;
`;
