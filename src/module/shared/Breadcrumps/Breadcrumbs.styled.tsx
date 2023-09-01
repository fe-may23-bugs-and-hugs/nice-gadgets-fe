import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const BlockWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PathWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PathItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-style: normal;
  line-height: normal;
`;

export const PathLink = styled.p`
  &:hover {
    color: ${({ theme }) => theme.colors.graySecondary};
  }
`;

export const CurrentPath = styled.p`
  color: ${({ theme }) => theme.colors.graySecondary};
`;

export const HomeIconWrapper = styled(Link)`
display: inline-block;
width: ${({ theme }) => theme.colors.sizeS};
height: ${({ theme }) => theme.colors.sizeS};

&:hover svg use {
  fill: ${({ theme }) => theme.colors.graySecondary};
}
`;
