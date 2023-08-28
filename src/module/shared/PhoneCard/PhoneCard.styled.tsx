import styled from 'styled-components';

import heart from '../../../assets/icons/hearts.svg';
import fullHeart from '../../../assets/icons/Heart_filled.svg';

interface ButtonProps {
  isClicked: boolean;
}

interface IButtonLike {
  isFavoriteElement: boolean;
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 32px;
  width: 272px;

  border-radius: 8px;
  border: ${(props) => `1px solid ${props.theme.colors.grayElements}`};
  background: #fff;
`;

export const CardImage = styled.img`
  width: 208px;
  height: 196px;

  margin: 0 auto;

  margin-bottom: 24px;
`;

export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grayPrimary};

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  margin-bottom: 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 8px;
  border-bottom: 1px solid #e2e6e9;

  padding-bottom: 8px;
`;

export const CurrentPrice = styled.h3`
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%;

  color: #0f0f11;
`;

export const OldPrice = styled(CurrentPrice)`
  color: ${({ theme }) => theme.colors.graySecondary};
  text-decoration: line-through;
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
  font-weight: 600;
  line-height: normal;
`;

export const DescrValue = styled.p`
  color: ${({ theme }) => theme.colors.grayPrimary};
  text-align: right;
  font-family: Mont;
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const ButtonAdd = styled.button<ButtonProps>`
  width: 100%;
  height: 40px;

  color: ${(props) => (props.isClicked ? '#216cff' : '#fff')};

  border: ${(props) => (props.isClicked ? '1px solid #e2e6e9' : 'none')};

  text-align: center;
  cursor: pointer;

  border-radius: 8px;
  background: ${(props) =>
    props.isClicked
      ? props.theme.colors.white
      : props.theme.colors.accentPrimary};

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-style: normal;
  font-weight: 700;
  line-height: ${({ theme }) => theme.fonts.lineHeightM};
`;

export const ButtonLike = styled.button`
  cursor: pointer;
  border: ${(props) => `1px solid ${props.theme.colors.grayIcons}`};
  background-color: #fff;
  width: 40px;

  border-radius: 48px;
`;

export const ButtonLikeBackground = styled.div<IButtonLike>`
  display: block;
  background-image: ${(props) =>
    props.isFavoriteElement ? `url(${fullHeart})` : `url(${heart})`};
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;
