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
import {
  FavoriteContext,
  CartContext,
  useTheme as useCustomTheme,
} from '../../../context';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const theme = useTheme();
  const { isDarkTheme } = useCustomTheme() || { isDarkTheme: false };

  const { addItem, cartProducts } = useContext(CartContext);

  const { addFavoriteProduct, favoriteProducts } = useContext(FavoriteContext);

  const isSelected = cartProducts.find((product) => product._id === phone._id);
  const isFavorite = favoriteProducts.find(
    (product) => product._id === phone._id,
  );

  const toggleClick = (phoneData: Phone, e: React.MouseEvent) => {
    e.preventDefault();
    addItem(phoneData);
  };

  const toggleFavorite = (phoneData: Phone, e: React.MouseEvent) => {
    e.preventDefault();
    addFavoriteProduct(phoneData);
  };

  const fullPath = `/${phone.category}/${phone._id}`;

  return (
    <CardWrapper isDarkTheme={isDarkTheme}>
      <ImageBox to={fullPath}>
        <CardImage src={phone.images[0]} alt="Phone Image" />
      </ImageBox>
      <CardTitle to={phone._id} isDarkTheme={isDarkTheme}>
        {phone.name}
      </CardTitle>

      <PriceWrapper isDarkTheme={isDarkTheme}>
        <CurrentPrice
          isDarkTheme={isDarkTheme}
        >{`$${phone.priceDiscount}`}</CurrentPrice>
        <OldPrice
          isDarkTheme={isDarkTheme}
        >{`$${phone.priceRegular}`}</OldPrice>
      </PriceWrapper>

      <DescrWrapper>
        <DescrBox>
          <DescrTitle isDarkTheme={isDarkTheme}>Screen</DescrTitle>
          <DescrTitle isDarkTheme={isDarkTheme}>Capacity</DescrTitle>
          <DescrTitle isDarkTheme={isDarkTheme}>RAM</DescrTitle>
        </DescrBox>

        <DescrBox>
          <DescrValue isDarkTheme={isDarkTheme}>
            {phone.screen || 'N/A'}
          </DescrValue>
          <DescrValue isDarkTheme={isDarkTheme}>
            {phone.capacity || 'N/A'}
          </DescrValue>
          <DescrValue isDarkTheme={isDarkTheme}>
            {phone.ram || 'N/A'}
          </DescrValue>
        </DescrBox>
      </DescrWrapper>

      <ButtonsWrapper>
        <ButtonAdd
          isDarkTheme={isDarkTheme}
          onClick={(e) => {
            toggleClick(phone, e);
          }}
          type="button"
          isClicked={isSelected}
        >
          {isSelected ? 'Added' : 'Add to cart'}
        </ButtonAdd>
        <ButtonLike
          isDarkTheme={isDarkTheme}
          isClicked={!!isFavorite}
          type="button"
          // eslint-disable-next-line no-shadow
          onClick={(e) => {
            toggleFavorite(phone, e);
          }}
        >
          <IconSprite />
          {isFavorite && (
            <Icon
              spriteName="heart-field"
              fill={theme.colors.accentSecondary}
            />
          )}

          {!isFavorite && <Icon spriteName="heart" />}

          {isDarkTheme && isFavorite && (
            <Icon
              spriteName="heart-field"
              fill={theme.colors.accentSecondary}
            />
          )}

          {isDarkTheme && !isFavorite && <Icon spriteName="heart-white" />}
        </ButtonLike>
      </ButtonsWrapper>
    </CardWrapper>
  );
};
