/* eslint-disable max-len */
import React, { useState, useContext } from 'react';
import { Icon, IconSprite } from '../shared/Sprites';
import { ContentLayout } from '../shared/ContentLayout';
import CartPageModal from './CartPageModal';
import {
  CartContainer,
  CartBack,
  CartBar,
  IconArrow,
  CartHeader,
  CartList,
  CartSummary,
  TotalPrice,
  TotalItems,
  CartCheckout,
  CartEmpty,
  ModalIconClose,
  CartEmptyImage,
} from './CartPage.styled';
import { CartContext } from '../../context';
import { CartItemPage } from './CartItemPage';

export const CartPage: React.FC = () => {
  const {
    cartProducts,
  } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <ContentLayout>
      <CartBack>
        <CartBar>
          <IconArrow>
            <IconSprite />
            <Icon spriteName="arrow-left" size="10px" fill="#B4BDC3" />
          </IconArrow>
          <p>Back</p>
        </CartBar>
      </CartBack>
      <CartHeader>
        <h1>Cart</h1>
      </CartHeader>
      {cartProducts.length > 0 ? (
        <CartContainer>
          <CartList>
            {cartProducts.map((product) => (
              <CartItemPage key={product._id} product={product} />
            ))}
          </CartList>
          <CartSummary>
            <TotalPrice>
              <p>$5000</p>
            </TotalPrice>
            <TotalItems>
              <p>Total for {cartProducts.length} items</p>
            </TotalItems>
            <CartCheckout onClick={handleToggle}>
              <p>Checkout</p>
            </CartCheckout>
            {showModal && (
              <CartPageModal
                title="Success!!!"
                content="Your order has been placed successfully."
                actions={<ModalIconClose onClick={handleClose}>
                  <IconSprite />
                  <Icon spriteName="close" size="16px" fill="#B4BDC3" />
                </ModalIconClose>}
              />
            )}
          </CartSummary>
        </CartContainer>
      ) : (
        <CartEmpty>
          <CartEmptyImage
            // src="https://cdn-icons-png.flaticon.com/512/126/126083.png"
            // alt="empty-basket-image"
          />
          <p>Your cart is empty</p>
        </CartEmpty>
      )}
    </ContentLayout>
  );
};
