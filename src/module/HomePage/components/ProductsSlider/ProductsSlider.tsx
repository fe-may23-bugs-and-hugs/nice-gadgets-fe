import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import {
  Button,
  ButtonsWrapper,
  Card,
  SlideWrapper,
  Subtitle,
  UpperWrapper,
} from './ProductsSlider.styled';

import { Icon, IconSprite } from '../../../shared';

export const ProductsSlider = () => {
  return (
    <SlideWrapper>
      <UpperWrapper>
        <Subtitle>Brand new models</Subtitle>

        <ButtonsWrapper className="buttons-wrapper">
          <IconSprite />

          <Button id="prev-btn">
            <Icon spriteName="arrow-left" fill="#000" />
          </Button>

          <Button className="btn" id="next-btn">
            <Icon spriteName="arrow-right" fill="#000" />
          </Button>
        </ButtonsWrapper>
      </UpperWrapper>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          prevEl: '#prev-btn',
          nextEl: '#next-btn',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card />
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card />
        </SwiperSlide>
      </Swiper>
    </SlideWrapper>
  );
};
