import React, { FC, ReactElement } from 'react';

import { ReactComponent as LoadingIcon } from 'common/icons/loading.svg';
import { Wrapper } from './styles';

const Loading: FC = (): ReactElement => {
  return (
    <Wrapper>
      <LoadingIcon />
    </Wrapper>
  );
};

export default Loading;
