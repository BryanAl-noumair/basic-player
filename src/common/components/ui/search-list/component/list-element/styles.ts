import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { TEXT_COLOR } from 'common/constants/colors';
import { ReactComponent as Plus } from 'common/icons/plus.svg';
import { ReactComponent as Minus } from 'common/icons/minus.svg';

export const ElementContainer = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid ${TEXT_COLOR};
`;

export const BasicDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    font-size: 20px;
    color: ${TEXT_COLOR};
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: ${TEXT_COLOR};
  text-decoration: none;
`;

export const MoreDetailsWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SortOptions = styled.div`
  display: flex;
  margin-left: 10px;
  > p {
    font-size: 15px;
    color: ${TEXT_COLOR};
    font-weight: bold;
    &:not(:last-of-type):after {
      content: '|';
      margin: 0 5px;
    }
  }
`;

const iconsStyles = css`
  width: 30px;
  height: 30px;
  margin-left: 30px;
  fill: ${TEXT_COLOR};
  cursor: pointer;
`;

export const PlusIcon = styled(Plus)`
  ${iconsStyles};
`;

export const MinusIcon = styled(Minus)`
  ${iconsStyles};
`;
