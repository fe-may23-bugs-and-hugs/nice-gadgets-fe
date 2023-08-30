import styled from 'styled-components';

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;

  align-items: center;

  margin-bottom: 24px;
`;

export const IconsTitle = styled.h2`
  color: #89939a;
  font-family: Mont;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CatalogTitle = styled.h1`
  color: #0f0f11;
  /* Mobile/H1 */
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 41px; /* 128.125% */
  letter-spacing: -0.32px;

  margin-bottom: 8px;
`;

export const CatalogModelsLeft = styled.p`
  color: #89939a;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 150% */

  margin-bottom: 32px;
`;

export const SortWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const SortTitle = styled.h2`
  color: #89939a;

  font-size: 12px;
  font-style: normal;
  font-weight: 700;
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
  border: 1px solid #b4bdc4;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #b4bdc3;
  border-radius: 8px;

  color: #0f0f11;
  /* Buttons */
  font-family: Mont;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;

  svg {
    position: absolute;
    top: 48%;
    right: 4px;
    transform: translate(-50%, -50%);
  }
`;

export const SortDropdownContent = styled.ul`
  position: absolute;
  margin-top: 4px;
  background-color: #fff;
  border: 1px solid #e2e6e9;
  width: inherit;
`;
