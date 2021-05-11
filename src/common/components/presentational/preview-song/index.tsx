import React, { FC, ReactElement } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';

import { songData } from 'common/interfaces';
import PlayerControl from 'common/components/ui/player-control';
import { PreviewContainer, ShareWrapper } from './styles';

export interface previewSongProps {
  data: songData;
  nextSongPath: string;
  prevSongPath: string;
}

const PreviewSong: FC<previewSongProps> = ({ data, prevSongPath, nextSongPath }): ReactElement => {
  const { thumbnail, title, artist, album_title, song_preview } = data;

  return (
    <PreviewContainer>
      <img src={thumbnail} alt={title} />
      <h1>{title}</h1>
      <div>{artist}</div>
      <p>{album_title}</p>
      <PlayerControl
        prevSongPath={prevSongPath}
        nextSongPath={nextSongPath}
        song_preview={song_preview}
      />
      <ShareWrapper>
        <FacebookShareButton url={song_preview} quote={title}>
          <FacebookIcon />
        </FacebookShareButton>
        <TwitterShareButton url={song_preview} title={title}>
          <TwitterIcon />
        </TwitterShareButton>
        <WhatsappShareButton url={song_preview} title={title}>
          <WhatsappIcon />
        </WhatsappShareButton>
      </ShareWrapper>
    </PreviewContainer>
  );
};

export default PreviewSong;
