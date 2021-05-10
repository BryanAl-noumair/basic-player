import React, { FC, ReactElement } from 'react';
import { useQuery } from 'react-query';
import { useParams, useHistory } from 'react-router-dom';

import { CACHE_KEY } from 'common/constants/text';
import { currentSongData, fetchSong } from 'common/utils';
import { PreviewSong } from 'common/components/presentational/preview-song';
import { Loading } from 'common/components/ui/loading';

interface params {
  searchValue: string;
  position: string;
}

const Preview: FC = (): ReactElement | null => {
  const { searchValue, position } = useParams<params>();
  const { push } = useHistory();

  const { isLoading, data } = useQuery([CACHE_KEY, searchValue], () => fetchSong(searchValue));

  if (isLoading || !data) return <Loading />;

  const { results, resultCount } = data;
  const props = currentSongData(Number(position), results, resultCount, searchValue);

  if (!props) {
    push(`/${searchValue}`);
    return null;
  }

  return <PreviewSong {...props} />;
};

export default Preview;
