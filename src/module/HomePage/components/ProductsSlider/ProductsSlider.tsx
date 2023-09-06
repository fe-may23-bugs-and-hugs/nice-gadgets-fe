/* eslint-disable no-console */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import {
  Button,
  ButtonsWrapper,
  SlideWrapper,
  Subtitle,
  UpperWrapper,
} from './ProductsSlider.styled';

import { Icon, IconSprite } from '../../../shared';
import { Phone } from '../../../../types/Phone';
import { PhoneCard } from '../../../shared/PhoneCard';

type Props = {
  data: Phone[];
  uniqueKey: string;
  subtitle: string;
};

export const ProductsSlider: React.FC<Props> = ({
  data,
  uniqueKey,
  subtitle,
}) => {
  const prevBtnId = `prev-btn-${uniqueKey}`;
  const nextBtnId = `next-btn-${uniqueKey}`;

  return (
    <SlideWrapper>
      <UpperWrapper>
        <Subtitle>{subtitle}</Subtitle>

        <ButtonsWrapper className="buttons-wrapper">
          <IconSprite />

          <Button id={prevBtnId}>
            <Icon spriteName="arrow-left" fill="#000" />
          </Button>

          <Button id={nextBtnId}>
            <Icon spriteName="arrow-right" fill="#000" />
          </Button>
        </ButtonsWrapper>
      </UpperWrapper>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          prevEl: `#${prevBtnId}`,
          nextEl: `#${nextBtnId}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((phone) => (
          <SwiperSlide
            key={phone._id}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <PhoneCard key={phone._id} phone={phone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideWrapper>
  );
};
