import React, { useState, useContext } from 'react';
import { Phone } from '../../types/Phone';
import { IconSprite, Icon } from '../shared';
import {
  CartItem,
  MobileContainer,
  IconClose,
  ImgContainer,
  ImgElement,
  ItemDescription,
  IconPriceContainer,
  IconContainer,
  IconElement,
  ItemQuantity,
  ItemPrice,
} from './CartPage.styled';
import { CartContext } from '../../context';

type Props = {
  product: Phone;
};

export const CartItemPage: React.FC<Props> = ({ product }) => {
  const {
    cartProducts,
    setCartProducts,
  } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (action: string) => {
    if (action === 'increment') {
      setQuantity(quantity + 1);
    } else if (action === 'decrement') {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleDelete = (id: string) => {
    const newCartProducts = cartProducts.filter((item) => item._id !== id);

    setCartProducts(newCartProducts);
  };

  return (
    <CartItem>
      <MobileContainer>
        <IconClose onClick={() => handleDelete(product._id)}>
          <IconSprite />
          <Icon spriteName="close" size="16px" fill="#B4BDC3" />
        </IconClose>
        <ImgContainer>
          <ImgElement src={product.images[0]} />
        </ImgContainer>
        <ItemDescription>
          <p>{product.name}</p>
        </ItemDescription>
      </MobileContainer>
      <IconPriceContainer>
        <IconContainer>
          <IconElement
            onClick={() => handleChangeQuantity('decrement')}
          >
            <IconSprite />
            <Icon spriteName="minus" size="16px" fill="#B4BDC3" />
          </IconElement>
          <ItemQuantity>
            <p>{quantity}</p>
          </ItemQuantity>
          <IconElement
            onClick={() => handleChangeQuantity('increment')}
          >
            <IconSprite />
            <Icon spriteName="plus" size="16px" />
          </IconElement>
        </IconContainer>
        <ItemPrice>
          <p>${product.priceDiscount}</p>
        </ItemPrice>
      </IconPriceContainer>
    </CartItem>
  );
};
