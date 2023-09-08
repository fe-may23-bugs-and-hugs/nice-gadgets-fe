import { styled } from 'styled-components';
import { onDesktop, pageGridMixin } from '../Mixins';
import { DarkTheme } from '../../../types/DarkTheme';
import React, { PropsWithChildren } from 'react';
import { useTheme } from '../../../context';

export const AppWrapper = styled.div`
  ${pageGridMixin}

  margin-top: 50px;

  ${onDesktop(`
    margin-top: 65px;
  `)}
`;

export const ContentBackground = styled.div<DarkTheme>`
  flex: 1;
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.black
      : ({ theme }) => theme.colors.grayBackground};
`;

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

  return (
    <ContentBackground isDarkTheme={isDarkTheme}>
      <AppWrapper>{children}</AppWrapper>
    </ContentBackground>
  );
};
