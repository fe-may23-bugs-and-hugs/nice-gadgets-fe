import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px 0;

  @media (min-width: 640px) {
    height: calc(100vh - (${({ theme }) => theme.sizes.headerHeigth} + ${({ theme }) => theme.sizes.footerHeigth}));
  }
`;

export const NotFoundTitle = styled.h2`
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  font-size: ${({ theme }) => theme.fonts.sizeL};

  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.grayPrimary};
`;

export const NotFoundText = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.grayPrimary};
  font-size: ${({ theme }) => theme.fonts.sizeXs};
`;

export const NotFoundGif = styled.img`
  width: 160px;
`;

export const ButtonGoHome = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 176px;
  height: 40px;

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.bold};

  background-color: ${({ theme }) => theme.colors.accentPrimary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.transition.slower};
  &:hover {
    box-shadow: 0px 3px 13px 0px rgba(23, 32, 49, 0.4);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.accentPrimary};
    border: 1px solid ${({ theme }) => theme.colors.grayElements};
    box-shadow: none;
  }
`;
