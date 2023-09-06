import React, { useState, useContext } from 'react';
import { PhoneWithQuantity } from '../../types/Phone';
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
  product: PhoneWithQuantity;
  handleDelete: (id: string) => void;
};

export const CartItemPage: React.FC<Props> = ({ product, handleDelete }) => {
  const { setCartProducts } = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);
  const oneItemPrice = quantity * product.priceDiscount;


  const handleChangeQuantity = (action: string) => {
    if (action === 'increment') {
      setQuantity(quantity + 1);

      setCartProducts((prevItems: PhoneWithQuantity[]) => {
        return prevItems.map((prevItem) => {
          if (prevItem._id === product._id) {
            prevItem.quantity += 1;

            return prevItem;
          }

          return prevItem;
        });
      });
    } else if (action === 'decrement') {
      if (quantity > 1) {
        setQuantity(quantity - 1);

        setCartProducts((prevItems: PhoneWithQuantity[]) => {
          return prevItems.map((prevItem) => {
            if (prevItem._id === product._id) {
              prevItem.quantity -= 1;

              return prevItem;
            }

            return prevItem;
          });
        });
      }
    }
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
          <IconElement onClick={() => handleChangeQuantity('decrement')}>
            <IconSprite />
            <Icon spriteName="minus" size="16px" fill="#B4BDC3" />
          </IconElement>
          <ItemQuantity>
            <p>{quantity}</p>
          </ItemQuantity>
          <IconElement onClick={() => handleChangeQuantity('increment')}>
            <IconSprite />
            <Icon spriteName="plus" size="16px" />
          </IconElement>
        </IconContainer>
        <ItemPrice>
          <p>${oneItemPrice}</p>
        </ItemPrice>
      </IconPriceContainer>
    </CartItem>
  );
};
