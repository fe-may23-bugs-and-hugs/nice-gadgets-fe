import styled from 'styled-components';
import { onDesktop, onTablet } from '../../../shared/Mixins';

export const SlideWrapper = styled.div`
  position: relative;
  margin-bottom: 57px;

  ${onTablet(`
    margin-bottom: 64px;
  `)}

  ${onDesktop(`
    margin-bottom: 80px;
  `)}
`;

export const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 39px;

  ${onTablet(`
    margin-bottom: 28.5px;
  `)}

  ${onDesktop(`
    margin-bottom: 28px;
  `)}
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizeXxl};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXxl};
  letter-spacing: ${({ theme }) => theme.fonts.spacingS};
  margin-right: 14px;
  color: ${({ theme }) => theme.colors.grayPrimary};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 16px;
  margin-right: 24px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grayIcons};
  border-radius: 48px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: border-color ${({ theme }) => theme.transition.slower};
  &:hover {
    border-color: ${({ theme }) => theme.colors.grayPrimary};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.grayElements};
    cursor: not-allowed;

    svg {
      use {
        fill: ${({ theme }) => theme.colors.grayIcons};
      }
    }
  }
`;

export const Card = styled.div`
  width: 212px;
  height: 439px;
  background-color: #000;

  ${onTablet(`
    width: 237px;
    height: 512px;
  `)}

  ${onDesktop(`
    width: 272px;
    height: 506px;
  `)}
`;
