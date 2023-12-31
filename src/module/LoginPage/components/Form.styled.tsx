import { styled } from 'styled-components';
import { onTablet } from '../../shared/Mixins';
import { Link } from 'react-router-dom';
import { DarkTheme } from '../../../types/DarkTheme';

export const SectionWrapper = styled.div`
  margin-top: 57px;
  margin-bottom: 57px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.grayPrimary};
  font-size: ${({ theme }) => theme.fonts.sizeS};
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  font-style: normal;
  line-height: ${({ theme }) => theme.fonts.lineHeightXl};
`;

export const Title = styled.h1<DarkTheme>`
  font-family: Mont;
  font-size: ${({ theme }) => theme.fonts.sizeXxxl};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXxxl};
  letter-spacing: -0.48px;

  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 500px;

  ${onTablet(`
    gap: 24px;
  `)}
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  ${onTablet(`
    gap: 24px;
  `)}
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  position: relative;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  background: ${(props) =>
    props.disabled
      ? props.theme.colors.grayIcons
      : props.theme.colors.accentPrimary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  transition: all 0.3s;

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  ${onTablet(`
    height: 50px;
  `)}

  &:hover {
    box-shadow: 0px 3px 13px 0px rgba(23, 32, 49, 0.4);
  }

  &:active {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.accentPrimary};
    border: 1px solid ${(props) => props.theme.colors.grayElements};
  }
`;

export const Label = styled.label<DarkTheme>`
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  border: 1px solid gray;
  text-indent: 4px;

  width: 100%;

  ${onTablet(`
    height: 50px;
  `)}

  &::placeholder {
    font-size: ${({ theme }) => theme.fonts.sizeXs};
    color: ${(props) => props.theme.colors.graySecondary};
  }
`;

export const FormLink = styled(Link)<DarkTheme>`
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};

  &:hover {
    color: ${(props) => props.theme.colors.graySecondary};
  }
`;

export const ToggleButton = styled.span`
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  right: 14px;
  bottom: 10px;

  border: none;
  cursor: pointer;

  ${onTablet(`
    right: 14px;
    bottom: 15px;
  `)}

  &:hover svg use {
    fill: ${(props) => props.theme.colors.graySecondary};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 16px;
  width: 16px;
`;

export const EyeWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
