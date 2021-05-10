export interface songData {
  [index: string]: string | number;
  id: string;
  title: string;
  artist: string;
  album_title: string;
  release_data: string;
  thumbnail: string;
  length: number;
  genre: string;
  price: number;
  song_preview: string;
  currency: string;
}

export interface listData {
  resultCount: number;
  results: Array<songData>;
}
