import React, { FC, ReactElement, useState } from 'react';

import { NOT_FOUND_SEARCH_MESSAGE, START_SEARCH_MESSAGE } from 'common/constants/text';
import { listData, songData } from 'common/interfaces';
import SortButtons from 'common/components/ui/sort-buttons';
import { Text, SearchIcon, NoResultsIcon } from './styles';
import { ListElement } from './component/list-element';

interface searchListProps {
  list: listData | undefined;
  sortTypes: Array<string>;
}

const SearchList: FC<searchListProps> = ({ list, sortTypes }): ReactElement => {
  const [visibleList, setVisibleList] = useState(list?.results);

  if (!list)
    return (
      <Text>
        <SearchIcon />
        {START_SEARCH_MESSAGE}
      </Text>
    );

  if (list.resultCount === 0) {
    return (
      <Text>
        <NoResultsIcon />
        {NOT_FOUND_SEARCH_MESSAGE}
      </Text>
    );
  }

  const sortCb = (sortValue: string): void => {
    const resultList = list.results;

    setVisibleList(
      sortValue
        ? [...resultList].sort(
            (a: songData, b: songData) => (a[sortValue] as any) - (b[sortValue] as any)
          )
        : resultList
    );
  };

  return (
    <>
      <SortButtons sortTypes={sortTypes} sortCb={sortCb} />
      {visibleList?.map((element, index) => (
        <ListElement key={element.id} index={index} data={element} />
      ))}
    </>
  );
};

export default SearchList;
