import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import data from '../../../assets/data/phones.json';
import { Icon, IconSprite } from '../Sprites';
import {
  BlockWrapper,
  CurrentPath,
  HomeIconWrapper,
  PathItem,
  PathLink,
  PathWrapper,
} from './Breadcrumbs.styled';

interface Phone {
  id: string;
  name: string;
}

function getPhoneName(phoneId: string): string {
  const foundPhone = data.find((phone: Phone) => phone.id === phoneId);

  return foundPhone ? foundPhone.name : '';
}

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
    <span>
      <Icon spriteName="arrow-right" fill="#B4BDC3" />
    </span>
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
          const displayName = segment.replace(/^\w/, (c) => c.toUpperCase());
          const isCurrent = index === pathSegments.length - 1;
          const phoneId = pathSegments[1];

          return (
            <BreadcrumbSegment key={path} isCurrent={isCurrent} path={path}>
              {index === 1 ? getPhoneName(phoneId) : displayName}
            </BreadcrumbSegment>
          );
        })}
      </PathWrapper>
    </BlockWrapper>
  );
};
