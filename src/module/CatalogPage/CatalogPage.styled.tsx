import styled from 'styled-components';

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;

  align-items: center;

  margin-bottom: 24px;
`;

export const IconsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.graySecondary};
  font-family: Mont;
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  line-height: normal;
`;

export const CatalogTitle = styled.h1`
  color: ${({ theme }) => theme.colors.grayPrimary};
  /* Mobile/H1 */
  font-size: ${({ theme }) => theme.fonts.sizeXxl};
  font-style: normal;
  font-weight: 800;
  line-height: ${({ theme }) => theme.fonts.sizeXxl};
  letter-spacing: -0.32px;

  margin-bottom: 8px;
`;

export const CatalogModelsLeft = styled.p`
  color: ${({ theme }) => theme.colors.graySecondary};

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  margin-bottom: 32px;
`;

export const SortWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const SortTitle = styled.h2`
  color: ${({ theme }) => theme.colors.graySecondary};

  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  line-height: normal;

  margin-bottom: 4px;
`;

export const SortDropDown = styled.button`
  position: relative;

  padding: 0 15px;
  background-color: #fff;
  cursor: pointer;
  width: 160px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.grayIcons};
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.grayIcons};
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.grayPrimary};
  /* Buttons */
  font-family: Mont;
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-style: normal;
  font-weight: 700;
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  svg {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translate(-50%, -50%);
  }
`;

export const SortDropdownContent = styled.ul`
  position: absolute;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayElements};
  width: inherit;
`;
