import React, { FC, ReactElement } from 'react';
import { useQuery } from 'react-query';
import { useParams, useHistory } from 'react-router-dom';

import { CACHE_KEY } from 'common/constants/text';
import { currentSongData, fetchSong } from 'common/utils';
import PreviewSong from 'common/components/presentational/preview-song';
import Loading from 'common/components/ui/loading';
import BackButton from 'common/components/ui/back-button';

interface params {
  searchValue: string;
  position: string;
}

const Preview: FC = (): ReactElement | null => {
  const { searchValue, position } = useParams<params>();
  const { push } = useHistory();

  const { isLoading, data } = useQuery([CACHE_KEY, searchValue], () => fetchSong(searchValue), {
    staleTime: 1000 * 3600 * 24
  });

  if (isLoading || !data) return <Loading />;

  const { results, resultCount } = data;
  const props = currentSongData(Number(position), results, resultCount, searchValue);
  const backFn = () => push(`/${searchValue}`);

  if (!props) {
    backFn();
    return null;
  }

  return (
    <>
      <BackButton backFn={backFn} />
      <PreviewSong {...props} />
    </>
  );
};

export default Preview;
