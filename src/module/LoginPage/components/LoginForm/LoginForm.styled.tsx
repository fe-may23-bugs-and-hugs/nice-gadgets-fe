import { styled } from 'styled-components';
import { onDesktop, onTablet, pageGridMixin } from '../../../shared/Mixins';
import { Link } from 'react-router-dom';

export const SectionWrapper = styled.div`
  margin-top: 57px;
  margin-bottom: 57px;
  display: grid;
  ${pageGridMixin}
  color: ${({ theme }) => theme.colors.grayPrimary};
  font-size: ${({ theme }) => theme.fonts.sizeS};
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  font-style: normal;
  line-height: ${({ theme }) => theme.fonts.lineHeightXl};
`;

export const FormWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  ${onTablet(`
    grid-column: 3 / -3;
    gap: 24px;
  `)}

  ${onDesktop(`
    grid-column: 5 / -5;
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
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.accentPrimary};
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

export const Label = styled.label`
  color: ${(props) => props.theme.colors.grayPrimary};
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  border: 1px solid gray;
  text-indent: 4px;

  ${onTablet(`
    height: 50px;
  `)}

  &::placeholder {
    font-size: ${({ theme }) => theme.fonts.sizeXs};
    color: ${(props) => props.theme.colors.graySecondary};
  }
`;

export const FormLink = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  &:hover {
    color: ${(props) => props.theme.colors.graySecondary};
  }
`;
