import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cube';

import sliderOneImg from '../../../../assets/images/welcome_slider_1.png';
import sliderTabImg from '../../../../assets/images/welcome-slider_banner.png';
import sliderPhones from '../../../../assets/images/category-phones.png';
import sliderTabs from '../../../../assets/images/category-tablets.png';
import bannerTwo from '../../../../assets/images/banner-phones.png';
import bannerThree from '../../../../assets/images/banner-tablets.png';
import okIcon from '../../../../assets/images/ok-icon.png';
import {
  BannerButton,
  BannerText,
  BannerWrapper,
  BulletsContainner,
  BunnerTitle,
  OkIcon,
  SliderBanner,
  SliderWrapper,
  StyledImageMobile,
  StyledImageTablet,
  TextWrapper,
  Wrapper,
} from './WelcomeSlider.styled';
import './styles.css';

export const WelcomeSlider = () => {
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{
          clickable: true,
          el: '#custom-bullets-container',
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
            <StyledImageMobile src={sliderPhones} />
            <StyledImageTablet
              src={bannerTwo}
              style={{
                objectFit: 'cover',
              }}
            />
          </SliderWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SliderWrapper>
            <StyledImageMobile src={sliderTabs} />
            <StyledImageTablet
              src={bannerThree}
              style={{
                objectFit: 'cover',
              }}
            />
          </SliderWrapper>
        </SwiperSlide>
      </Swiper>

      <BulletsContainner id='custom-bullets-container' />
    </Wrapper>
  );
};
