import styled from 'styled-components';
import { onTablet } from '../../../shared/Mixins';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CategoriesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${onTablet(`
    flex-direction: row;
    gap: 16px;
  `)};
`;

export const CategoriesTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizeL};

  ${onTablet(`
      font-size: ${({ theme }) => theme.fonts.sizeXxl};
  `)};
`;
