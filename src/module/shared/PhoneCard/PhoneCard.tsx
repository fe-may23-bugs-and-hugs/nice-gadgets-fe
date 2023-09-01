/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import { useTheme } from 'styled-components';

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
  ImageBox,
} from './PhoneCard.styled';

import { Icon, IconSprite } from '../Sprites';
import { Phone } from '../../../types/Phone';
import { FavoriteContext, CartContext } from '../../../context';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const theme = useTheme();

  const { addItem, cartProducts } = useContext(CartContext);

  const { addFavoriteProduct, favoriteProducts } = useContext(FavoriteContext);

  console.log(cartProducts);

  const isSelected = cartProducts.find((product) => product._id === phone._id);
  const isFavorite = favoriteProducts.find(
    (product) => product._id === phone._id,
  );

  const toggleClick = (phoneData: Phone) => {
    addItem(phoneData);
  };

  const toggleFavorite = (phoneData: Phone) => {
    addFavoriteProduct(phoneData);
  };

  return (
    <CardWrapper>
      <ImageBox>
        <CardImage src={phone.image} alt="Phone Image" />
      </ImageBox>
      <CardTitle>{phone.name}</CardTitle>

      <PriceWrapper>
        <CurrentPrice>{`$${phone.price}`}</CurrentPrice>
        <OldPrice>{`$${phone.fullPrice}`}</OldPrice>
      </PriceWrapper>

      <DescrWrapper>
        <DescrBox>
          <DescrTitle>Screen</DescrTitle>
          <DescrTitle>Capacity</DescrTitle>
          <DescrTitle>RAM</DescrTitle>
        </DescrBox>

        <DescrBox>
          <DescrValue>{phone.screen}</DescrValue>
          <DescrValue>{phone.capacity}</DescrValue>
          <DescrValue>{phone.ram}</DescrValue>
        </DescrBox>
      </DescrWrapper>

      <ButtonsWrapper>
        <ButtonAdd
          onClick={() => toggleClick(phone)}
          type="button"
          isClicked={isSelected}
        >
          {isSelected ? 'Added' : 'Add to cart'}
        </ButtonAdd>
        <ButtonLike type="button" onClick={() => toggleFavorite(phone)}>
          <IconSprite />
          {isFavorite ? (
            <Icon
              spriteName="heart-field"
              fill={theme.colors.accentSecondary}
            />
          ) : (
            <Icon spriteName="heart" />
          )}
        </ButtonLike>
      </ButtonsWrapper>
    </CardWrapper>
  );
};
