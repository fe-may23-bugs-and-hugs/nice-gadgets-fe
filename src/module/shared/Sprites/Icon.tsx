import React from 'react';
import { theme } from '../../../styles';

interface IconProps {
  spriteName: string;
  size?: string;
  fill?: string;
  stroke?: string;
}

export const Icon: React.FC<IconProps> = ({
  spriteName,
  size = theme.fonts.sizeS,
  fill = theme.colors.grayPrimary,
  stroke,
}) => {
  return (
    <svg width={size} height={size}>
      <use xlinkHref={`#${spriteName}`} fill={fill} stroke={stroke} />
    </svg>
  );
};
