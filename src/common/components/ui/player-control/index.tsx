import { FC, ReactElement, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as NextAndPre } from 'common/icons/nextAndPre.svg';
import { PlayerContainer, PrevAndNextWrapper, PrevButton, NextButton } from './styles';

interface playerControlProps {
  song_preview: string;
  prevSongPath: string;
  nextSongPath: string;
}

interface audioRef {
  current: HTMLAudioElement | null;
}

const PlayerControl: FC<playerControlProps> = ({
  song_preview,
  prevSongPath,
  nextSongPath
}): ReactElement => {
  const { push } = useHistory();
  const audioTag: audioRef = useRef(null);

  useEffect(() => {
    if (audioTag.current) {
      audioTag.current.pause();
      audioTag.current.load();
      audioTag.current.play();
    }
  }, [song_preview]);

  const prevFNC = () => push(prevSongPath);
  const nextFNC = () => push(nextSongPath);

  return (
    <PlayerContainer>
      <audio ref={audioTag} controls>
        <source src={song_preview} />
      </audio>
      <PrevAndNextWrapper>
        <PrevButton onClick={prevFNC} isActive={prevSongPath}>
          <NextAndPre />
        </PrevButton>
        <NextButton onClick={nextFNC} isActive={nextSongPath}>
          <NextAndPre />
        </NextButton>
      </PrevAndNextWrapper>
    </PlayerContainer>
  );
};

export default PlayerControl;
