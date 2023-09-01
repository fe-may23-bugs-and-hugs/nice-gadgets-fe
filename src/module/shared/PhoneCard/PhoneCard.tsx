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
import { CartContext } from '../../../context/cartContext';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const theme = useTheme();

  const { addItem, cartProducts } = useContext(CartContext);

  console.log(cartProducts);

  const [isFavorite, setIsFavorite] = React.useState(false);

  const isSelected = cartProducts.find((product) => product.id === phone.id);

  const toggleClick = (phoneData: Phone) => {
    addItem(phoneData);
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
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
        <ButtonLike type="button" onClick={toggleFavorite}>
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
