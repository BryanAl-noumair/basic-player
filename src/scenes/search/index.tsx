import React, { FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import SearchAndResult from 'common/components/presentational/search-and-result';
import { fetchSong } from 'common/utils';

interface params {
  searchValue: string | undefined;
}

const Search: FC = (): ReactElement => {
  const { searchValue } = useParams<params>();

  return <SearchAndResult paramValue={searchValue || ''} fetchFn={fetchSong} />;
};

export default Search;
