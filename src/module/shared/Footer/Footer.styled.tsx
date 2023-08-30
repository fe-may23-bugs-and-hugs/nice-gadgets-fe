import styled from 'styled-components';
import { onDesktop, onTablet } from '../Mixins';

export const StyledFooter = styled.div`
  width: 100%;
  padding: 32px 16px;
  display: flex;
  justify-content: center;

  margin-bottom: 25px;

  box-shadow: 0px -1px 0px 0px ${({ theme }) => theme.colors.grayElements};
  font-family: ${({ theme }) => theme.fonts.name};
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: normal;

  ${onTablet(`
    padding: 32px 24px;
  `)}

  ${onDesktop(`
    padding: 32px 32px;
  `)}
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  ${onTablet(`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `)};
`;

export const LogoFooter = styled.img`
  width: 89px;
  margin-bottom: 32px;

  ${onTablet(`
    margin: 0;
  `)}
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 197px;
  margin: 0 0 32px 0;
  padding: 0;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXxs};
  letter-spacing: ${({ theme }) => theme.fonts.spacingM};
  text-transform: uppercase;
  list-style: none;

  ${onTablet(`
    flex-direction: row;
    width: 197px;
    margin: 0;
  `)}

  ${onDesktop(`
      width: 378px;
    `)}
`;

export const ListItem = styled.li`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.graySecondary};

  ${onTablet(`
    margin: 0;
  `)}
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const IconElement = styled.a`
  position: relative;
  cursor: pointer;
  border: ${(props) => `1px solid ${props.theme.colors.grayIcons}`};
  width: 32px;
  height: 32px;
  border-radius: 50px;
  transition: border ${({ theme }) => theme.transition.slower};

  &:hover {
    border: ${(props) => `1px solid ${props.theme.colors.grayPrimary}`};
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ButtonText = styled.p`
  align-self: center;
  margin: 0 16px 0 0;
  color: ${({ theme }) => theme.colors.graySecondary};
`;
