import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Icon, IconSprite } from '../Sprites';
import {
  BlockWrapper,
  CurrentPath,
  HomeIconWrapper,
  IconWrapper,
  PathItem,
  PathLink,
  PathWrapper,
} from './Breadcrumbs.styled';

interface BreadcrumbSegmentProps {
  isCurrent: boolean;
  path: string;
  children: React.ReactNode;
}

const BreadcrumbSegment: React.FC<BreadcrumbSegmentProps> = ({
  isCurrent,
  path,
  children,
}) => (
  <PathItem>
    <IconWrapper>
      <Icon spriteName="arrow-right" size="12px" fill="#B4BDC3" />
    </IconWrapper>
    {isCurrent ? (
      <CurrentPath>{children}</CurrentPath>
    ) : (
      <Link to={path}>
        <PathLink>{children}</PathLink>
      </Link>
    )}
  </PathItem>
);

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  return (
    <BlockWrapper>
      <IconSprite />
      <HomeIconWrapper to="/">
        <Icon spriteName="home" />
      </HomeIconWrapper>
      <PathWrapper>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const displayName = segment
            .split('-')
            .map((s) => s.replace(/^\w/, (c) => c.toUpperCase()))
            .join(' ');
          const isCurrent = index === pathSegments.length - 1;

          return (
            <BreadcrumbSegment key={path} isCurrent={isCurrent} path={path}>
              {displayName}
            </BreadcrumbSegment>
          );
        })}
      </PathWrapper>
    </BlockWrapper>
  );
};
