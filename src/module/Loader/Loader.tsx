import React from 'react';
import { Hourglass } from 'react-loader-spinner';
import {
  LoaderBackground,
  LoaderContent,
  LoaderOverlay,
} from './Loader.styled';

type Props = {
  visible: boolean;
};

export const Loader: React.FC<Props> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <LoaderOverlay>
      <LoaderBackground></LoaderBackground>
      <LoaderContent>
        <Hourglass
          height={80}
          width={80}
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
      </LoaderContent>
    </LoaderOverlay>
  );
};
