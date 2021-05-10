import React, { FC, ReactElement, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  ElementContainer,
  BasicDetailsWrapper,
  PlusIcon,
  MinusIcon,
  SortOptions,
  MoreDetailsWrapper,
  StyledLink
} from './styles';
import { songData } from 'common/interfaces';
import { millisToMinutesAndSeconds } from 'common/utils';

interface listElementProps {
  index: number;
  data: songData;
}

interface params {
  searchValue: string | undefined;
}

export const ListElement: FC<listElementProps> = ({ data, index }): ReactElement => {
  const {
    title,
    artist,
    album_title,
    release_data,
    thumbnail,
    length,
    genre,
    price,
    currency
  } = data;
  const [showDetails, setShowDetails] = useState(false);
  const { searchValue } = useParams<params>();

  const toggleFnc = () => setShowDetails((prevState) => !prevState);
  const Icon = showDetails ? MinusIcon : PlusIcon;
  const year = new Date(release_data || '').getFullYear().toString();
  const formattedSongLength = length ? millisToMinutesAndSeconds(length) : '';

  return (
    <ElementContainer>
      <BasicDetailsWrapper>
        <div>
          {title && <StyledLink to={`/preview/${searchValue}/${index}`}>{title}</StyledLink>}
          {artist && <p>{artist}</p>}
        </div>
        <Icon onClick={toggleFnc} />
      </BasicDetailsWrapper>
      {showDetails && (
        <MoreDetailsWrapper>
          <div>
            {thumbnail && <img src={thumbnail} alt={title} />}
            {release_data && <div>({year})</div>}
            {album_title && <div>{album_title}</div>}
          </div>
          <SortOptions>
            {formattedSongLength && <p>{formattedSongLength}</p>}
            {genre && <p>{genre}</p>}
            {price && (
              <p>
                {price}({currency})
              </p>
            )}
          </SortOptions>
        </MoreDetailsWrapper>
      )}
    </ElementContainer>
  );
};
