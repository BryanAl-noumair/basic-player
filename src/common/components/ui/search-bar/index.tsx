import React, { useEffect, useState } from 'react';

import { useDebounce } from 'common/hooks/useDebounce';
import { Input } from './styles';

interface searchBarProps {
  initialValue: string;
  onChangeCb: (term: string) => void;
}

const SearchBar: React.FC<searchBarProps> = ({ initialValue, onChangeCb }) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialValue);
  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchTerm(event.currentTarget.value);

  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);
  useEffect(() => {
    onChangeCb(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return <Input value={searchTerm} onChange={handleOnChange} placeholder={'Search a song...'} />;
};

SearchBar.defaultProps = {
  initialValue: '',
  onChangeCb: () => null
};

export default SearchBar;
