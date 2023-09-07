import styled from 'styled-components';
import { onDesktop, onTablet, onSmallDesktop } from '../Mixins';
import { ContentLayout } from '../ContentLayout';

export const CatalogContainer = styled(ContentLayout)`
  display: flex;
  justify-content: center;
`;

export const CatalogContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px 20px;
  justify-content: center;

  margin: 0 auto;
  margin-bottom: 40px;

  ${onTablet(`
    grid-template-columns: repeat(2, 1fr);
  `)}

  ${onSmallDesktop(`
    grid-template-columns: repeat(3, 1fr);
  `)}

  ${onDesktop(`
   grid-template-columns: repeat(4, 1fr);
  `)}
`;
