import React from 'react';

import SearchBar from 'common/components/ui/search-bar';
import FilterButtons from 'common/components/ui/filter-buttons';

export const SearchAndResult: React.FC = () => (
  <>
    <SearchBar initialValue={'OH'} onChangeCb={() => console.log('ggoogo')} />
    <FilterButtons filterValues={['a', 'b', '5']} filterCB={() => null} />
  </>
);
