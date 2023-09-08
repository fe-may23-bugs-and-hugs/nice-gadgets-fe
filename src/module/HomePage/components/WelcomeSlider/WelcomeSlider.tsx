import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cube';

import sliderOneImg from '../../../../assets/images/welcome_slider_1.png';
import sliderTabImg from '../../../../assets/images/welcome-slider_banner.png';
import sliderPhones from '../../../../assets/images/category-phones.png';
import sliderTabs from '../../../../assets/images/category-tablets.png';
import bannerTwo from '../../../../assets/images/lg-banner.jpg';
import bannerThree from '../../../../assets/images/airpods.jpg';
import {
  BulletsContainner,
  SliderWrapper,
  StyledImageMobile,
  StyledImageTablet,
  Wrapper,
} from './WelcomeSlider.styled';
import './styles.css';
import { useTheme } from '../../../../context';

export const WelcomeSlider = () => {
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

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
            <StyledImageMobile src={sliderOneImg} alt="Slide iPhone 14 Pro" />
            <StyledImageTablet src={sliderTabImg} alt="Slide iPhone 14 Pro" />
          </SliderWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SliderWrapper>
            <StyledImageMobile src={sliderPhones} alt="Slide LG Q6" />
            <StyledImageTablet src={bannerTwo} alt="Slide LG Q6" />
          </SliderWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SliderWrapper>
            <StyledImageMobile src={sliderTabs} alt="Slide AirPodsPro" />
            <StyledImageTablet src={bannerThree} alt="Slide AirPodsPro" />
          </SliderWrapper>
        </SwiperSlide>
      </Swiper>

      <BulletsContainner
        isDarkTheme={isDarkTheme}
        id="custom-bullets-container"
      />
    </Wrapper>
  );
};
