import React, { FC, ReactElement, useState } from 'react';
import { useQuery } from 'react-query';

import { updateLocationWhitQuerySearch } from 'common/utils';
import { listData } from 'common/interfaces';
import { CACHE_KEY } from 'common/constants/text';
import { ReactComponent as LoadingIcon } from 'common/icons/loading.svg';
import SearchBar from 'common/components/ui/search-bar';
import SearchList from 'common/components/ui/search-list';
import { Loading } from './styles';

interface searchAndResultProps {
  paramValue: string;
  fetchFn: (value: string) => Promise<listData | undefined>;
}

const sortTypes = ['length', 'genre', 'price'];

export const SearchAndResult: FC<searchAndResultProps> = ({
  paramValue,
  fetchFn
}): ReactElement => {
  const [currentValue, setCurrentValue] = useState(paramValue);

  const { isLoading, data } = useQuery([CACHE_KEY, currentValue], () => fetchFn(currentValue));

  const onChangeCb = (value: string) => {
    setCurrentValue(value);
    updateLocationWhitQuerySearch(value);
  };

  return (
    <>
      <SearchBar initialValue={paramValue} onChangeCb={onChangeCb} />
      {isLoading ? (
        <Loading>
          <LoadingIcon />
        </Loading>
      ) : (
        <SearchList list={data} sortTypes={sortTypes} />
      )}
    </>
  );
};
