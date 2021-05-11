import { songData } from 'common/interfaces';

const fakeSong: songData = {
  id: 'fake_id',
  title: 'fake_title',
  artist: 'fake_artist',
  album_title: 'fake_album',
  release_data: '123123',
  song_preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  thumbnail: 'fake_url',
  price: 234,
  currency: 'USD',
  length: 2323,
  genre: 'fake'
};

const nextSongPath = '';
const prevSongPath = '';

export const props = {
  data: fakeSong,
  nextSongPath,
  prevSongPath
};
