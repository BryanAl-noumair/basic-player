import { listData, songData } from 'common/interfaces';
import { QUERY_ITUNES } from 'common/constants/text';
import { previewSongProps } from 'common/components/presentational/preview-song';

// Get song and parse it to fit a more standard format
export const fetchSong = async (value: string | undefined): Promise<listData | undefined> => {
  if (!value) return undefined;

  const response = await fetch(QUERY_ITUNES + value, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  const { resultCount, results } = await response.json();
  const parsedResults: Array<songData> = results.map((song: songData) => ({
    id: song.trackId,
    title: song.trackName,
    artist: song.artistName,
    album_title: song.collectionName,
    release_data: song.releaseDate,
    thumbnail: song.artworkUrl100,
    length: song.trackTimeMillis,
    genre: song.primaryGenreName,
    price: song.trackPrice,
    song_preview: song.previewUrl,
    currency: song.currency
  }));

  return {
    resultCount,
    results: parsedResults
  };
};

// Update current location with a value provided
export const updateLocationWhitQuerySearch = (query: string): void => {
  const value = `${query}`;

  query
    ? window.history.pushState({ searchValue: value }, 'search', value)
    : window.history.pushState('', '', '/');
};

// Pass milliseconds to min and seconds and formatted
export const millisToMinutesAndSeconds = (millis: number): string => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + ((seconds as any) < 10 ? '0' : '') + seconds;
};

//Get current song data
export const currentSongData = (
  index: number,
  list: Array<songData>,
  totalElements: number,
  searchValue: string
): previewSongProps | null => {
  const data = list[index];

  if (!data) {
    return null;
  }

  return {
    data,
    nextSongPath: index === totalElements ? '' : `/preview/${searchValue}/${index + 1}`,
    prevSongPath: index === 0 ? '' : `/preview/${searchValue}/${index - 1}`
  };
};
