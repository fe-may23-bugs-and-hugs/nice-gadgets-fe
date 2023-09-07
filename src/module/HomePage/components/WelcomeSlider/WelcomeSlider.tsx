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
            <StyledImageMobile src={sliderOneImg} />
            <StyledImageTablet src={sliderTabImg} />
          </SliderWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SliderWrapper>
            <StyledImageMobile src={sliderPhones} />
            <StyledImageTablet src={bannerTwo} />
          </SliderWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SliderWrapper>
            <StyledImageMobile src={sliderTabs} />
            <StyledImageTablet src={bannerThree} />
          </SliderWrapper>
        </SwiperSlide>
      </Swiper>

      <BulletsContainner id="custom-bullets-container" />
    </Wrapper>
  );
};
