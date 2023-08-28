import React from 'react';

interface IconProps {
  spriteName: string;
  size?: string;
  fill?: string; // Додайте атрибут fill до IconProps
}

const Icon: React.FC<IconProps> = ({
  spriteName,
  size = '16px',
  fill = '#0F0F11',
}) => {
  return (
    <svg width={size} height={size}>
      <use xlinkHref={`#${spriteName}`} fill={fill} />
    </svg>
  );
};

export default Icon;
