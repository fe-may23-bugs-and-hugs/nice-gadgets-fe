import { styled } from 'styled-components';
import { pageGridMixin } from '../Mixins';
import React, { PropsWithChildren } from 'react';
import { DarkTheme } from '../Header/Header.styled';
import { useTheme } from '../../../context';

export const AppWrapper = styled.div`
  ${pageGridMixin}
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
      <AppWrapper>
        {children}
      </AppWrapper>
    </ContentBackground>
  );
};
