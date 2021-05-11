import styled from 'styled-components';
import { TEXT_COLOR } from 'common/constants/colors';

export const PreviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${TEXT_COLOR};
`;

export const ShareWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 30px;

  > button {
    margin-left: 10px;
    > svg {
      width: 30px;
      height: 30px;
      border-radius: 5px;
    }
  }
`;
