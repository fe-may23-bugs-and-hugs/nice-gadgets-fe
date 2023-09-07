import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
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
        <ThreeDots
          height={80}
          width={80}
          ariaLabel="three-dots-loading"
          color="#0F0F11"
        />
      </LoaderContent>
    </LoaderOverlay>
  );
};
