import React, { FC, ReactElement, useState } from 'react';

import { Button } from './styles';

interface sortButtonsProps {
  sortTypes: Array<string>;
  sortCb: (nextFilter: string) => void;
}

const SortButtons: FC<sortButtonsProps> = ({ sortTypes, sortCb }): ReactElement => {
  const [currentFilter, setCurrentFilter] = useState('');
  const handleFilter = (filter: string) => {
    const nextFilter = filter === currentFilter ? '' : filter;
    setCurrentFilter(nextFilter);
    sortCb(nextFilter);
  };

  return (
    <div>
      {sortTypes.map((element) => (
        <Button
          key={element}
          isActive={element === currentFilter}
          onClick={() => handleFilter(element)}
        >
          {element}
        </Button>
      ))}
    </div>
  );
};

export default SortButtons;
