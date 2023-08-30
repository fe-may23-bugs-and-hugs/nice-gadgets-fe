import { styled } from 'styled-components';

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

export const CategoryContent = styled.div``;

export const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.grayPrimary};
  font-size: ${({ theme }) => theme.fonts.sizeM};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  font-style: normal;
  line-height: normal;

  &:hover {
    color: ${({ theme }) => theme.colors.graySecondary};
  }
`;

export const CategoryModels = styled.p`
  color: ${({ theme }) => theme.colors.graySecondary};
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  font-style: normal;
  line-height: 150%;
`;
