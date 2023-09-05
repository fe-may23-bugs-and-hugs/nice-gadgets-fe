/* eslint-disable no-console */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cube';

import sliderOneImg from '../../../../assets/images/welcome_slider_1.png';
import sliderTabImg from '../../../../assets/images/welcome-slider_banner.png';
import okIcon from '../../../../assets/images/ok-icon.png';
import {
  BannerButton,
  BannerText,
  BannerWrapper,
  BunnerTitle,
  OkIcon,
  SliderBanner,
  SliderWrapper,
  StyledImageMobile,
  StyledImageTablet,
  TextWrapper,
} from './WelcomeSlider.styled';
import './styles.css';

export const WelcomeSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      navigation
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
      }}
      autoplay={{
        disableOnInteraction: false,
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
    >
      <SwiperSlide>
        <SliderWrapper>
          <SliderBanner>
            <TextWrapper>
              <BannerWrapper>
                <BunnerTitle>Now available in our store!</BunnerTitle>
                <OkIcon src={okIcon} />
              </BannerWrapper>

              <BannerText>Be the first!</BannerText>
            </TextWrapper>
            <BannerButton>Order now</BannerButton>
          </SliderBanner>

          <StyledImageMobile src={sliderOneImg} />
          <StyledImageTablet src={sliderTabImg} />
        </SliderWrapper>
      </SwiperSlide>

      <SwiperSlide>
        <SliderWrapper>
          <SliderBanner>
            <TextWrapper>
              <BannerWrapper>
                <BunnerTitle>Now available in our store!</BunnerTitle>
                <OkIcon src={okIcon} />
              </BannerWrapper>

              <BannerText>Be the first!</BannerText>
            </TextWrapper>
            <BannerButton>Order now</BannerButton>
          </SliderBanner>

          <StyledImageMobile src={sliderOneImg} />
          <StyledImageTablet src={sliderTabImg} />
        </SliderWrapper>
      </SwiperSlide>

      <SwiperSlide>
        <SliderWrapper>
          <SliderBanner>
            <TextWrapper>
              <BannerWrapper>
                <BunnerTitle>Now available in our store!</BunnerTitle>
                <OkIcon src={okIcon} />
              </BannerWrapper>

              <BannerText>Be the first!</BannerText>
            </TextWrapper>
            <BannerButton>Order now</BannerButton>
          </SliderBanner>

          <StyledImageMobile src={sliderOneImg} />
          <StyledImageTablet src={sliderTabImg} />
        </SliderWrapper>
      </SwiperSlide>
    </Swiper>
  );
};
