import styled from 'styled-components';
import { onDesktop, onTablet } from '../shared/Mixins';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizeXxxl};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXxxl};
  letter-spacing: ${({ theme }) => theme.fonts.spacingS};
  margin: 24px 0;
  ${onTablet(`
    margin: 32px 0;
  `)}
  ${onDesktop(`
    margin: 56px 0;
  `)}
`;
