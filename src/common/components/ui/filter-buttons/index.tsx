import React, { useState } from 'react';

import { Button } from './styles';

interface filterButtonsProps {
  filterValues: Array<string>;
  filterCB: (nextFilter: string) => void;
}

const FilterButtons: React.FC<filterButtonsProps> = ({ filterValues, filterCB }) => {
  const [currentFilter, setCurrentFilter] = useState('');
  const handleFilter = (filter: string) => {
    const nextFilter = filter === currentFilter ? '' : filter;
    setCurrentFilter(nextFilter);
    filterCB(nextFilter);
  };

  return (
    <>
      {filterValues.map((element) => (
        <Button
          key={element}
          isActive={element === currentFilter}
          onClick={() => handleFilter(element)}
        >
          {element}
        </Button>
      ))}
    </>
  );
};

export default FilterButtons;
