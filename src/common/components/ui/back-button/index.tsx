import React, { FC, ReactElement } from 'react';

import { ReactComponent as BackButtonIcon } from 'common/icons/back-button.svg';
import { Wrapper } from './styles';

interface backButtonProps {
  backFn: () => void;
}

export const BackButton: FC<backButtonProps> = ({ backFn }): ReactElement => {
  return (
    <Wrapper>
      <BackButtonIcon onClick={backFn} />
    </Wrapper>
  );
};
