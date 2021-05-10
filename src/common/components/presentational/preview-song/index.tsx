import React, { FC, ReactElement } from 'react';

import { songData } from 'common/interfaces';

export interface previewSongProps {
  data: songData;
  nextSongPath: string;
  hasPrev: boolean;
  hasNext: boolean;
}

export const PreviewSong: FC<previewSongProps> = (): ReactElement => <div />;
