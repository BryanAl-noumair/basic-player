import React, { FC, ReactElement, useEffect, useState } from 'react';

import { useDebounce } from 'common/hooks/useDebounce';
import { INPUT_PLACEHOLDER } from 'common/constants/text';
import { Input } from './styles';

interface searchBarProps {
  initialValue: string;
  onChangeCb: (term: string) => void;
}

const SearchBar: FC<searchBarProps> = ({ initialValue, onChangeCb }): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>(initialValue);
  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchTerm(event.currentTarget.value);

  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);
  useEffect(() => {
    onChangeCb(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return <Input value={searchTerm} onChange={handleOnChange} placeholder={INPUT_PLACEHOLDER} />;
};

SearchBar.defaultProps = {
  initialValue: '',
  onChangeCb: () => null
};

export default SearchBar;
