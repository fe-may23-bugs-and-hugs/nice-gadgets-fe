import { useSwiper } from 'swiper/react';
import './styles.css';
import { Icon, IconSprite } from '../../../shared';

export const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='buttons-wrapper'>
      <IconSprite />

      <button
        className='btn'
        onClick={() => swiper.slidePrev()}
      >
        <Icon spriteName="arrow-left" fill="#000" />
      </button>

      <button className='btn' onClick={() => swiper.slideNext()}>
        <Icon spriteName="arrow-right" fill="#000" />
      </button>
    </div>
  );
};
