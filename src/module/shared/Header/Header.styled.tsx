import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayElements};
  line-height: ${({ theme }) => theme.fonts.lineHeightXxl};
  @media (min-width: 1200px) {
    line-height: ${({ theme }) => theme.fonts.lineHeightXxxl};
  }
`;

export const NavElement = styled.nav`
  font-family: ${({ theme }) => theme.fonts.name};
  font-size: ${({ theme }) => theme.fonts.sizeS};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  color: ${({ theme }) => theme.colors.graySecondary};

  @media (max-width: 639px) {
    display: none;
  }
`;

export const BarElement = styled(Link)`
  display: flex;
  margin: 0 24px;
  gap: 32px;

  @media (min-width: 1200px) {
    gap: 64px;
  }
`;

export const ImgElement = styled.img`
  height: 100%;
  line-height: 100%;
  align-self: center;
`;

export const UlElement = styled.ul`
  display: flex;
  gap: 32px;

  @media (min-width: 1200px) {
    gap: 64px;
  }
`;

export const LiElement = styled.li`
  list-style-type: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.slower};

  &:hover {
    color: ${({ theme }) => theme.colors.grayPrimary};
    transition: color ${({ theme }) => theme.transition.slower};
  }
`;

export const LinkElement = styled(Link)``;

export const IconsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconElement = styled.div`
  padding: 0 24px;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.slower};

  &:not(:last-child) {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayBackground};
    transition: background-color ${({ theme }) => theme.transition.slower};
  }

  svg {
    display: block;
    line-height: ${({ theme }) => theme.fonts.lineHeightXxl};
    height: ${({ theme }) => theme.fonts.lineHeightXxl};

    @media (min-width: 1200px) {
      line-height: ${({ theme }) => theme.fonts.lineHeightXxxl};
      height: ${({ theme }) => theme.fonts.lineHeightXxxl};
    }
  }
  border-left: 1px solid ${({ theme }) => theme.colors.grayElements};

  @media (min-width: 640px) {
    &:not(:last-child) {
      display: block;
    }
    &:last-child {
      display: none;
    }
  }
`;
