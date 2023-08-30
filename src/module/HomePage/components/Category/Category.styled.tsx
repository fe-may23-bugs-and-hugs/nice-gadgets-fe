import { styled } from 'styled-components';
import { onTablet } from '../../../shared/Mixins';

export const CategoryWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;

  box-sizing: border-box;

  background: ${({ theme }) => theme.colors.white};
`;

export const CategoryImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CategoryTitle = styled.h4`
  color: ${({ theme }) => theme.colors.grayPrimary};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  font-size: ${({ theme }) => theme.fonts.sizeM};
  line-height: normal;

  ${onTablet(`
    font-size: 20px;
    line-height: 26px;
  `)};

  &:hover {
    color: ${({ theme }) => theme.colors.graySecondary};
  }
`;

export const CategoryModels = styled.p`
  color: ${({ theme }) => theme.colors.graySecondary};
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  font-style: normal;
  line-height: ${({ theme }) => theme.fonts.lineHeightM};
`;
