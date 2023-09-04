import { styled } from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 4px;

  width: 66px;
  height: 16px;
`;

export const Back = styled.p`
  color: ${({ theme }) => theme.colors.graySecondary};
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  font-size: 12px;
  font-style: normal;
  line-height: normal;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 16px;
  width: 16px;
`;
