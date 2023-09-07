import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  margin-bottom: 80px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BackButtonContainer = styled.div`
  margin-top: 40px;
`;

export const CartHeader = styled.header`
  display: flex;
  margin-top: 16px;
  margin-bottom: 32px;
  gap: 32px;
  font-size: ${({ theme }) => theme.fonts.sizeL};
  font-family: ${({ theme }) => theme.fonts.name};

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.sizeS};
  }
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: 16px;

  @media (max-width: 1200px) {
    margin-bottom: 32px;
    margin-right: 0px;
  }
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grayElements};
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-family: ${({ theme }) => theme.fonts.name};
  transition: border-color ${({ theme }) => theme.transition.slower};

  &:hover {
    border-color: ${({ theme }) => theme.colors.graySecondary};
  }

  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
`;

export const ImgElement = styled.img`
  width: 100%;
  object-fit: contain;
  padding: 7px;

  @media (max-width: 1200px) {
    min-width: 66px;
    height: auto;
  }

  @media (max-width: 500px) {
    min-width: 66px;
    height: auto;
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  text-align: left;
  width: 336px;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 128px;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    font-size: ${({ theme }) => theme.fonts.sizeXs};
  }

  @media (max-width: 330px) {
    display: flex;
    gap: 16px;
    width: 100%;
    object-fit: contain;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const IconPriceContainer = styled.div`
  display: flex;
  gap: 52px;
  align-items: center;

  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  @media (max-width: 330px) {
    display: flex;
    width: 100%;
    gap: 0px;
    justify-content: space-between;
  }
`;

export const IconClose = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.grayElements};
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.slower};

  &:hover {
    background-color: ${({ theme }) => theme.colors.graySecondary};
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 1200px) {
    padding: 8px;
  }

  @media (min-width: 641px) {
    padding: 8px;
  }
`;

export const IconElement = styled.button<{
  isClickable?: boolean;
  isQuantityOne?: boolean;
}>`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid
    ${({ theme, isQuantityOne }) =>
    isQuantityOne ? theme.colors.grayElements : theme.colors.grayIcons};
  background-color: transparent;
  align-items: center;
  justify-content: center;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
  transition: background-color ${({ theme }) => theme.transition.slower};

  &:hover {
    background-color: ${({ isClickable, theme }) =>
    isClickable ? theme.colors.graySecondary : 'inherit'};
    border: 1px solid
      ${({ theme, isQuantityOne }) =>
    isQuantityOne ? theme.colors.grayElements : theme.colors.black};
  }
`;

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-family: ${({ theme }) => theme.fonts.name};
`;

export const ItemPrice = styled.div`
  display: flex;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  font-size: ${({ theme }) => theme.fonts.sizeL};
  font-family: ${({ theme }) => theme.fonts.name};
  justify-content: flex-end;
  min-width: 80px;

  @media (max-width: 1200px) {
    display: flex;
    justify-content: end;
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fonts.sizeL};
  }
`;

export const CartSummary = styled.div`
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grayElements};
  align-self: flex-start;
  width: 100%;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    width: 100%;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    width: 100%;
  }
`;

export const TotalPrice = styled.div`
  padding-bottom: 8px;
  font-size: ${({ theme }) => theme.fonts.sizeXxl};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.name};
`;

export const TotalItems = styled.div`
  color: ${({ theme }) => theme.colors.graySecondary};
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  text-align: center;
  padding-bottom: 49px;
  font-family: ${({ theme }) => theme.fonts.name};
`;

export const CartCheckout = styled.button`
  position: relative;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.accentPrimary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-family: ${({ theme }) => theme.fonts.name};

  &::before {
    position: absolute;
    top: -24px;
    left: 0;
    content: '';
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grayElements};
  }

  cursor: pointer;

  transition: background-color ${({ theme }) => theme.transition.slower};

  &:hover {
    background-color: #2190ff;
  }
`;

export const CartEmpty = styled.div`
  display: flex;

  font-size: ${({ theme }) => theme.fonts.sizeM};
  font-family: ${({ theme }) => theme.fonts.name};
  color: ${({ theme }) => theme.colors.graySecondary};
  font-weight: bold;
`;

export const ModalIconClose = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.grayElements};
  align-items: center;

  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.slower};

  &:hover {
    background-color: ${({ theme }) => theme.colors.graySecondary};
  }

  @media (max-width: 1200px) {
    padding: 8px;
  }

  @media (min-width: 641px) {
    padding: 8px;
  }
`;
