import React from 'react';
import { theme } from '../../../styles';

interface IconProps {
  spriteName: string;
  size?: string;
  fill?: string;
}

export const Icon: React.FC<IconProps> = ({
  spriteName,
  size = theme.fonts.sizeS,
  fill = theme.colors.grayPrimary,
}) => {
  return (
    <svg width={size} height={size}>
      <use xlinkHref={`#${spriteName}`} fill={fill} />
    </svg>
  );
};
