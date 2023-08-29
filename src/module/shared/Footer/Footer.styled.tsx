import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  box-shadow: 0px -1px 0px 0px ${({ theme }) => theme.colors.grayElements};
  font-family: ${({ theme }) => theme.fonts.name};
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: normal;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 24px;
  }

  @media (min-width: 1200px) {
    padding: 32px 32px;
  }
`;

export const LogoFooter = styled.img`
  width: 89px;
  margin-bottom: 32px;

  @media (min-width: 640px) {
    margin: 0;
  }
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

  @media (min-width: 640px) {
    flex-direction: row;
    width: 197px;
    margin: 0;
  }

  @media (min-width: 1200px) {
    width: 378px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.graySecondary};

  @media (min-width: 640px) {
    margin: 0;
  }
`;

export const ButtonLink = styled.a`
  display: flex;
  align-self: center;
  text-decoration: none;
`;

export const ButtonText = styled.p`
  align-self: center;
  margin: 0 16px 0 0;
  color: ${({ theme }) => theme.colors.graySecondary};
`;
