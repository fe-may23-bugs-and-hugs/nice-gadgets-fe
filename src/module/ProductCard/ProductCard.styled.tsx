import styled from 'styled-components';
import { theme } from '../../styles';
import { onDesktop, onTablet } from '../shared/Mixins';

export const MainElement = styled.main`
  color: ${theme.colors.graySecondary};
`;

export const PathAndBack = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  margin: 16px 0;
  gap: 16px;

  ${onTablet(`
    margin: 24px 0;
    gap: 24px;
  `)}
`;

export const Title = styled.h1`
  grid-column: 1 / -1;
  font-size: ${theme.fonts.sizeM};
  line-height: ${theme.fonts.lineHeightXl};
  color: ${theme.colors.grayPrimary};
  margin-bottom: 32px;

  ${onTablet(`
    font-size: ${theme.fonts.sizeXxl};
    line-height: ${theme.fonts.lineHeightXxl};
    margin-bottom: 40px;
  `)}
`;

export const H2 = styled.h2`
  color: ${theme.colors.grayPrimary};
  font-size: ${theme.fonts.sizeM};
  line-height: ${theme.fonts.lineHeightL};
  font-weight: ${theme.fonts.weightBold};
  border-bottom: 1px solid ${theme.colors.grayElements};
  margin-bottom: 32px;
  height: 42px;

  ${onTablet(`
    font-size: ${theme.fonts.sizeL};
    line-height: ${theme.fonts.lineHeightXl};
  `)}
`;

export const Theader = styled.th`
  display: block;
  color: ${theme.colors.grayPrimary};
  font-size: ${theme.fonts.sizeM};
  line-height: ${theme.fonts.lineHeightL};
  font-weight: ${theme.fonts.weightBold};
  border-bottom: 1px solid ${theme.colors.grayElements};
  height: 42px;
  width: 100%;
  text-align: left;

  ${onTablet(`
    font-size: ${theme.fonts.sizeL};
    line-height: ${theme.fonts.lineHeightXl};
  `)}
`;

export const THead = styled.thead``;

export const TRow = styled.tr`
  display: block;
  width: 100%;
  margin-bottom: 32px;
`;

export const DescriptionWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const H3 = styled.h3`
  color: ${theme.colors.grayPrimary};
  font-size: ${theme.fonts.sizeS};
  line-height: ${theme.fonts.lineHeightM};
  font-weight: ${theme.fonts.weightSemiBold};
  margin-bottom: 16px;

  ${onTablet(`
    font-size: ${theme.fonts.sizeM};
    line-height: ${theme.fonts.lineHeightL};
  `)}
`;

export const P = styled.p`
  font-size: ${theme.fonts.sizeXs};
  line-height: ${theme.fonts.lineHeightM};
  font-weight: ${theme.fonts.weightRegular};

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ItemCard = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 64px;
  row-gap: 56px;

  ${onTablet(`
    grid-template-columns:repeat(2, 1fr);
    row-gap: 80px;
  `)}
`;

export const ImagesBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${onTablet(`
    flex-direction: row-reverse;
    gap: 16px;
  `)}
`;

export const CardInfo = styled.div`
  position: relative;
`;
export const AboutBlock = styled.div``;
export const SpecsBlock = styled.table``;

export const CardWrapper = styled.div`
  width: 100%;

  ${onDesktop(`
    max-width: 320px;
  `)}
`;

export const TechScecsInfo = styled.tbody`
  display: flex;
  flex-direction: column;
`;
export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;

  font-size: ${theme.fonts.sizeXxs};
  line-height: ${theme.fonts.lineHeightS};
`;
export const TableHeader = styled.th`
  font-weight: 500;
`;
export const TableData = styled.td`
  color: ${theme.colors.grayPrimary};
  font-weight: ${theme.fonts.weightRegular};
`;

export const ChoiseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  border-bottom: 1px solid ${theme.colors.grayElements};
`;

export const ChoiseButtons = styled.div`
  margin-bottom: 24px;
`;

export const MemoryButton = styled.button`
  box-sizing: content-box;
  background-color: ${theme.colors.grayBackground};
  color: ${theme.colors.grayPrimary};
  border: 1px solid ${theme.colors.grayIcons};
  border-radius: 4px;
  width: 60px;
  height: 32px;
  cursor: pointer;

  font-size: ${theme.fonts.sizeXs};
  line-height: ${theme.fonts.lineHeightM};

  margin-right: 8px;

  &.active {
    background-color: ${theme.colors.grayPrimary};
    color: ${theme.colors.white};
  }
`;

export const TitleChoise = styled.span`
  font-size: ${theme.fonts.sizeXxs};
  line-height: ${theme.fonts.lineHeightS};
  font-weight: ${theme.fonts.weightRegular};
  margin-bottom: 8px;
`;

export const ColorButton = styled.button`
  position: relative;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;

  margin-right: 8px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid ${theme.colors.white};
    box-sizing: border-box;
  }

  &::after {
    border-radius: 50%;
    border: 1px solid ${theme.colors.grayElements};
  }

  &.active {
    border: 1px solid ${theme.colors.grayPrimary};
  }
`;

export const DeviceId = styled.span`
  font-size: ${theme.fonts.sizeXxs};
  line-height: ${theme.fonts.lineHeightS};
  font-weight: ${theme.fonts.weightSemiBold};
  color: ${theme.colors.grayIcons};

  position: absolute;
  top: 0;
  right: 0;
`;

export const ImageSizeBox = styled.div`
  width: 100%;
`;

export const ImagesSizeBox = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;

  border: 1px solid #c4c4c4;
  border-radius: 4px;

  &:hover {
    border-color: ${theme.colors.grayPrimary};
  }

  &.active {
    border-color: ${theme.colors.grayPrimary};
  }

  ${onDesktop(`
    width: 80px;
    height: 80px;
  `)}
`;

export const CardImage = styled.img`
  width: auto;
  height: 288px;
  display: block;

  margin: 0 auto;

  ${onTablet(`
    width: auto;
    height: auto;
    max-height: 288px;
  `)}

  ${onDesktop(`
    width: auto;
    height: auto;
    max-height: 464px;
  `)}
`;

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  gap: 8px;

  width: 100%;
  height: 50px;

  ${onTablet(`
    justify-content: space-between;
    flex-direction: column;
    width: 49px;
    margin-top: 0;
  `)}

  ${onDesktop(`
    justify-content: space-between;
    width: 80px;
    gap: 16px;
  `)}
`;

export const SmallCardImage = styled.img`
  height: 41px;
  display: block;
  object-fit: cover;
  margin: auto;
  margin-top: 2px;

  ${onDesktop(`
    margin: auto;
    margin-top: 4px;
    height: 70px;
  `)}
`;
