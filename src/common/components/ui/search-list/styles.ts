import styled from 'styled-components';

import { ReactComponent as Search } from 'common/icons/search.svg';
import { ReactComponent as NoResults } from 'common/icons/no-results.svg';
import { TEXT_COLOR } from 'common/constants/colors';

export const Text = styled.div`
  margin-top: 100px;
  font-size: 20px;
  color: ${TEXT_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled(Search)`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
`;

export const NoResultsIcon = styled(NoResults)`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
`;
