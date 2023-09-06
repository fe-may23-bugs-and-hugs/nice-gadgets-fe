import styled from 'styled-components';
import { onDesktop, onTablet } from '../Mixins';
import { Link } from 'react-router-dom';

interface ButtonProps {
  isClicked: boolean;
}

export const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  box-sizing: border-box;
  padding: 32px;
  width: 272px;

  /* ${onTablet(`
    width: 229px;
  `)} */

  border-radius: 8px;
  border: ${(props) => `1px solid ${props.theme.colors.grayElements}`};
  background: ${({ theme }) => theme.colors.white};
`;

export const ImageBox = styled.div`
  width: 208px;
  height: 208px;
  margin-bottom: 24px;
`;

export const CardImage = styled.img`
  height: 100%;
  display: block;
  object-fit: contain;

  margin: 0 auto;
`;

export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grayPrimary};

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  line-height: ${({ theme }) => theme.fonts.lineHeightS};

  height: 42px;

  margin-bottom: 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 8px;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.grayElements}`};

  padding-bottom: 8px;

  &.card-price {
    border-bottom: none;
  }
`;

export const CurrentPrice = styled.h3`
  font-size: ${({ theme }) => theme.fonts.lineHeightM};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXl};

  color: ${({ theme }) => theme.colors.grayPrimary};

  &.card-current-price {
    font-size: ${({ theme }) => theme.fonts.sizeXxl};
    height: ${({ theme }) => theme.fonts.lineHeightXxl};
  }
`;

export const OldPrice = styled(CurrentPrice)`
  color: ${({ theme }) => theme.colors.graySecondary};
  text-decoration: line-through;

  &.card-old-price {
    font-size: ${({ theme }) => theme.fonts.sizeL};
    height: ${({ theme }) => theme.fonts.lineHeightL};
    font-weight: ${({ theme }) => theme.fonts.weightRegular};
  }
`;

export const DescrWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const DescrBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DescrTitle = styled.h3`
  color: ${({ theme: { colors } }) => colors.graySecondary};

  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  line-height: normal;
`;

export const DescrValue = styled.p`
  color: ${({ theme }) => theme.colors.grayPrimary};
  text-align: right;
  font-family: Mont;
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: normal;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  margin-top: auto;

  &.card-button {
    margin-bottom: 32px;
  }
`;

export const ButtonAdd = styled.button<ButtonProps>`
  width: 160px;
  height: 40px;

  color: ${(props) =>
    props.isClicked
      ? props.theme.colors.accentPrimary
      : props.theme.colors.white};

  border: ${(props) =>
    props.isClicked ? `1px solid ${props.theme.colors.grayElements}` : 'none'};

  text-align: center;
  cursor: pointer;

  border-radius: 8px;
  background: ${(props) =>
    props.isClicked
      ? props.theme.colors.white
      : props.theme.colors.accentPrimary};

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  &:hover {
    box-shadow: 0px 3px 13px 0px rgba(23, 32, 49, 0.4);
  }

  &.card-button-add {
    min-width: 231px;
    width: 80%;
    height: 48px;

    ${onDesktop(`
      width: 263px;
  `)}
  }
`;

export const ButtonLike = styled.button`
  position: relative;
  cursor: pointer;
  border: ${(props) => `1px solid ${props.theme.colors.grayIcons}`};
  background-color: ${({ theme }) => theme.colors.white};
  width: 40px;

  border-radius: 48px;

  &:hover {
    border: ${(props) => `1px solid ${props.theme.colors.grayPrimary}`};
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.card-button-like {
    width: 48px;
    height: 48px;
  }
`;
