import styled from 'styled-components';

interface ButtonProps {
  isClicked: boolean;
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 32px;
  width: 272px;

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
  object-fit: cover;

  margin: 0 auto;
`;

export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grayPrimary};

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.sizeXs};
  line-height: ${({ theme }) => theme.fonts.weightSemiBold};

  height: 42px;

  margin-bottom: 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 8px;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.grayElements}`};

  padding-bottom: 8px;
`;

export const CurrentPrice = styled.h3`
  font-size: ${({ theme }) => theme.fonts.lineHeightM};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXl};

  color: ${({ theme }) => theme.colors.grayPrimary};
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
`;

export const ButtonLike = styled.button`
  cursor: pointer;
  border: ${(props) => `1px solid ${props.theme.colors.grayIcons}`};
  background-color: ${({ theme }) => theme.colors.white};
  width: 40px;

  border-radius: 48px;
`;
