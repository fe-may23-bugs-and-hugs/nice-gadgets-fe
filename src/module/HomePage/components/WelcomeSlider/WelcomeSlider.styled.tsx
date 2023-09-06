import styled from 'styled-components';
import { onDesktop, onTablet } from '../../../shared/Mixins';

export const Wrapper = styled.div`
  display: block;
  margin-bottom: 88px;
  ${onTablet(`
    margin-bottom: 96px;
  `)}
  ${onDesktop(`
    margin-bottom: 112px;
  `)}
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const SliderBanner = styled.div`
  display: none;
  position: absolute;
  width: 46%;
  height: 94%;
  margin-left: 6px;
  padding: 34px;
  background-color: #222;
  border-radius: 8px;
  ${onTablet(`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `)}
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BunnerTitle = styled.h2`
  margin: 0 16px 16px 0;
  font-size: 18px;
  font-weight: 700;
  color: #216cff;
  ${onDesktop(`
    font-size: 40px;
  `)}
  ${onDesktop(`
    font-size: 40px;
  `)}
`;

export const OkIcon = styled.img`
  width: 30px;
  height: 30px;
  ${onDesktop(`
    width: 40px;
    height: 40px;
  `)}
`;

export const BannerText = styled.p`
  margin-bottom: 36px;
  font-size: 18px;
  font-weight: 600;
  color: #999;
  ${onDesktop(`
    font-size: 30px;
  `)}
`;

export const BannerButton = styled.button`
  width: 200px;
  padding: 16px;
  border-radius: 26px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  border: 1px solid#999;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.slower};
  &:hover {
    color: ${({ theme }) => theme.colors.graySecondary};
    border-color: #fff;
  }
  ${onDesktop(`
    padding: 22px;
    margin: 40px;
  `)}
`;

export const StyledImageMobile = styled.img`
  width: 100%;
  display: block;
  ${onTablet(`
    display: none;
  `)}
`;

export const StyledImageTablet = styled.img`
  width: 100%;
  height: 400px;
  display: none;
  border-radius: 8px;
  ${onTablet(`
    display: block;
  `)}
`;

export const BulletsContainner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
