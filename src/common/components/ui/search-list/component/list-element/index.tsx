import React, { FC, ReactElement, useState } from 'react';

import { songData } from 'common/interfaces';
import { millisToMinutesAndSeconds } from 'common/utils';
import {
  ElementContainer,
  BasicDetailsWrapper,
  PlusIcon,
  MinusIcon,
  SortOptions,
  MoreDetailsWrapper,
  StyledLink
} from './styles';

interface listElementProps {
  index: number;
  data: songData;
  currentQuery: string;
}

export const ListElement: FC<listElementProps> = ({ data, index, currentQuery }): ReactElement => {
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

  const toggleFnc = () => setShowDetails((prevState) => !prevState);
  const Icon = showDetails ? MinusIcon : PlusIcon;
  const year = new Date(release_data || '').getFullYear().toString();
  const formattedSongLength = length ? millisToMinutesAndSeconds(length) : '';

  return (
    <ElementContainer>
      <BasicDetailsWrapper>
        <div>
          {title && <StyledLink to={`/preview/${currentQuery}/${index}`}>{title}</StyledLink>}
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
