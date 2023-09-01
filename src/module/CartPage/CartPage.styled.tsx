import styled from 'styled-components';

export const CartContainer = styled.div`
  margin: 2rem;
  display: flex;
  gap: 16px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CartBack = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const CartBar = styled.div`
  margin-top: 24px;
  display: flex;
  color: ${({ theme }) => theme.colors.graySecondary};
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-family: ${({ theme }) => theme.fonts.name};
  gap: 4px;
`;

export const IconArrow = styled.div`
  display: flex;
`;

export const CartHeader = styled.header`
  display: flex;
  gap: 32px;
  font-size: ${({ theme }) => theme.fonts.sizeL};
  font-family: ${({ theme }) => theme.fonts.name};

  @media (max-width: 640px) {
    font-size: ${({ theme }) => theme.fonts.sizeS};
  }
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grayElements};
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-family: ${({ theme }) => theme.fonts.name};

  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 66px;
  height: 66px;
`;

export const ImgElement = styled.img``;

export const ItemDescription = styled.div`
  display: flex;
  text-align: left;
  width: 336px;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 640px) {
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

  @media (max-width: 640px) {
    display: flex;
    gap: 16px;
    padding: 24px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const IconPriceContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 640px) {
    display: flex;
    gap: 50px;
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
`;

export const IconElement = styled.div`
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

  @media (max-width: 640px) {
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
  background-color: ${({ theme }) => theme.colors.accentPrimary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
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
`;
