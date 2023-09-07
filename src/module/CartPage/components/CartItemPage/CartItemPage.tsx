import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { PhoneWithQuantity } from '../../../../types/Phone';
import { IconSprite, Icon } from '../../../shared';
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
} from '../../CartPage.styled';
import { CartContext, useTheme } from '../../../../context';

type Props = {
  product: PhoneWithQuantity;
  handleDelete: (id: string) => void;
};

export const CartItemPage: React.FC<Props> = ({ product, handleDelete }) => {
  const { setCartProducts } = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);
  const oneItemPrice = quantity * product.priceDiscount;
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

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
        <IconClose
          onClick={() => handleDelete(product._id)}
          isDarkTheme={isDarkTheme}
        >
          <IconSprite />
          <Icon spriteName="close" size="16px" fill="#B4BDC3" />
        </IconClose>
        <Link to={`/${product.category}/${product._id}`}>
          <ImgContainer>
            <ImgElement src={product.images[0]} />
          </ImgContainer>
        </Link>
        <Link to={`/${product.category}/${product._id}`}>
          <ItemDescription isDarkTheme={isDarkTheme}>
            <p>{product.name}</p>
          </ItemDescription>
        </Link>
      </MobileContainer>
      <IconPriceContainer>
        <IconContainer>
          <IconElement
            isDarkTheme={isDarkTheme}
            onClick={() => handleChangeQuantity('decrement')}
            isClickable={quantity > 1}
            isQuantityOne={quantity === 1}
          >
            <IconSprite />
            {quantity > 1 ? (
              <>
                {isDarkTheme ? (
                  <Icon spriteName="minus" size="16px" fill="#fff" />
                ) : (
                  <Icon spriteName="minus" size="16px" />
                )}
              </>
            ) : (
              <Icon spriteName="minus" size="16px" fill="#B4BDC3" />
            )}
          </IconElement>
          <ItemQuantity isDarkTheme={isDarkTheme}>
            <p>{quantity}</p>
          </ItemQuantity>
          <IconElement
            isDarkTheme={isDarkTheme}
            onClick={() => handleChangeQuantity('increment')}
            isClickable={quantity > 0}
            // isQuantityOne={quantity === 1}
          >
            <IconSprite />
            <>
              {isDarkTheme ? (
                <Icon spriteName="plus" size="16px" fill="#fff" />
              ) : (
                <Icon spriteName="plus" size="16px" />
              )}
            </>
          </IconElement>
        </IconContainer>
        <ItemPrice isDarkTheme={isDarkTheme}>
          <p>${oneItemPrice}</p>
        </ItemPrice>
      </IconPriceContainer>
    </CartItem>
  );
};
