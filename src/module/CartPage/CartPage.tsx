/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useContext, useEffect } from 'react';
import { Icon, IconSprite } from '../shared/Sprites';
import { ContentLayout } from '../shared/ContentLayout';
import CartPageModal from './CartPageModal';
import { BackButton } from '../shared/BackButton/';
import {
  CartContainer,
  CartHeader,
  CartList,
  CartSummary,
  TotalPrice,
  TotalItems,
  CartCheckout,
  CartEmpty,
  ModalIconClose,
  BackButtonContainer,
} from './CartPage.styled';
import { CartContext } from '../../context';
import { CartItemPage } from './CartItemPage';

export const CartPage: React.FC = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [totalItems, setTotalItems] = useState(
    cartProducts.reduce((total, product) => total + product.quantity, 0),
  );
  const [totalPrice, setTotalPrice] = useState(
    cartProducts.reduce((total, product) => total + product.priceDiscount, 0),
  );

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setTotalItems(
      cartProducts.reduce((total, product) => total + product.quantity, 0),
    );

    setTotalPrice(
      cartProducts.reduce(
        (total, product) => total + product.quantity * product.priceDiscount,
        0,
      ),
    );
  }, [cartProducts]);

  const handleDelete = (id: string) => {
    const newCartProducts = cartProducts.filter((item) => item._id !== id);

    setTotalItems(
      newCartProducts.reduce((total, product) => total + product.quantity, 0),
    );
    setCartProducts(newCartProducts);
  };

  return (
    <ContentLayout>
      <BackButtonContainer>
        <BackButton />
      </BackButtonContainer>
      <CartHeader>
        <h1>Cart</h1>
      </CartHeader>
      {cartProducts.length > 0 ? (
        <CartContainer>
          <CartList>
            {cartProducts.map((product) => (
              <CartItemPage
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </CartList>
          <CartSummary>
            <TotalPrice>
              <p>${totalPrice}</p>
            </TotalPrice>
            <TotalItems>
              <p>Total for {totalItems} items</p>
            </TotalItems>
            <CartCheckout
              onClick={handleToggle}
            >
              <p>Checkout</p>
            </CartCheckout>
            {showModal && (
              <CartPageModal
                title="Success!"
                content="Your order has been placed successfully."
                actions={
                  <ModalIconClose onClick={handleToggle}>
                    <IconSprite />
                    <Icon spriteName="close" size="16px" fill="#B4BDC3" />
                  </ModalIconClose>
                }
                handleToggle={handleToggle}
              />
            )}
          </CartSummary>
        </CartContainer>
      ) : (
        <CartEmpty>
          <p>Your cart is empty</p>
        </CartEmpty>
      )}
    </ContentLayout>
  );
};
