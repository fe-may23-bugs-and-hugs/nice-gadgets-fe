import React from 'react';
import {
  CardImage,
  CardTitle,
  CardWrapper,
  CurrentPrice,
  DescrBox,
  DescrTitle,
  DescrWrapper,
  DescrValue,
  OldPrice,
  PriceWrapper,
  ButtonsWrapper,
  ButtonAdd,
  ButtonLike,
  ButtonLikeBackground,
} from './PhoneCard.styled';

import phnoneImg from '../../../assets/phone_img.png';

export const PhoneCard: React.FC = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const toggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <CardWrapper>
      <CardImage src={phnoneImg} alt="Phone Image" />
      <CardTitle>Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</CardTitle>

      <PriceWrapper>
        <CurrentPrice>$799</CurrentPrice>
        <OldPrice>$899</OldPrice>
      </PriceWrapper>

      <DescrWrapper>
        <DescrBox>
          <DescrTitle>Screen</DescrTitle>
          <DescrTitle>Capacity</DescrTitle>
          <DescrTitle>RAM</DescrTitle>
        </DescrBox>

        <DescrBox>
          <DescrValue>5.8” OLED</DescrValue>
          <DescrValue>64 GB</DescrValue>
          <DescrValue>4 GB</DescrValue>
        </DescrBox>
      </DescrWrapper>

      <ButtonsWrapper>
        <ButtonAdd onClick={toggleClick} type="button" isClicked={isClicked}>
          {isClicked ? 'Added' : 'Add to cart'}
        </ButtonAdd>
        <ButtonLike>
          <ButtonLikeBackground />
        </ButtonLike>
      </ButtonsWrapper>

      <img src="../../../assets/icons/heart.svg" />
    </CardWrapper>
  );
};
