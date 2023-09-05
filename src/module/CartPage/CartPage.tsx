/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Icon, IconSprite } from '../shared/Sprites';
import { ContentLayout } from '../shared/ContentLayout';
import img1 from '../../../src/assets/images/phones/apple-iphone-7/black/00.jpg';
import img2 from '../../../src/assets/images/phones/apple-iphone-7-plus/black/00.jpg';
import img3 from '../../../src/assets/images/phones/apple-iphone-8/gold/00.jpg';
import CartPageModal from './CartPageModal';
import {
  CartContainer,
  CartBack,
  CartBar,
  IconArrow,
  CartHeader,
  CartList,
  CartItem,
  ImgContainer,
  ImgElement,
  ItemDescription,
  MobileContainer,
  IconContainer,
  IconPriceContainer,
  IconClose,
  IconElement,
  ItemQuantity,
  ItemPrice,
  CartSummary,
  TotalPrice,
  TotalItems,
  CartCheckout,
  CartEmpty,
} from './CartPage.styled';

export const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      category: 'phones',
      phoneId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: "4.7' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '2GB',
      year: 2016,
      image: img1,
      quantity: 1,
      unitPrice: 375,
    },
    {
      id: 2,
      category: 'phones',
      phoneId: 'apple-iphone-7-plus-32gb-black',
      itemId: 'apple-iphone-7-plus-32gb-black',
      name: 'Apple iPhone 7 Plus 32GB Black',
      fullPrice: 540,
      price: 500,
      screen: "5.5' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '3GB',
      year: 2016,
      image: img2,
      quantity: 1,
      unitPrice: 500,
    },
    {
      id: 3,
      category: 'phones',
      phoneId: 'apple-iphone-8-64gb-gold',
      itemId: 'apple-iphone-8-64gb-gold',
      name: 'Apple iPhone 8 64GB Gold',
      fullPrice: 600,
      price: 550,
      screen: "4.7' IPS",
      capacity: '64GB',
      color: 'gold',
      ram: '2GB',
      year: 2017,
      image: img3,
      quantity: 1,
      unitPrice: 550,
    },
    {
      id: 4,
      category: 'phones',
      phoneId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: "4.7' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '2GB',
      year: 2016,
      image: img1,
      quantity: 1,
      unitPrice: 375,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);

  useEffect(() => {
    const calculatePriceAndTotal = () => {
      let newTotal = 0;
      let newItems = 0;

      for (const item of cartItems) {
        newTotal += item.price;
        newItems += item.quantity;
      }

      setTotal(newTotal);
      setItems(newItems);
    };

    calculatePriceAndTotal();
  }, [cartItems]);

  const handleChangeQuantity = (id: number, action: string) => {
    const index = cartItems.findIndex((item) => item.id === id);

    const newCartItems = [...cartItems];

    if (action === 'increment') {
      newCartItems[index].quantity += 1;

      newCartItems[index].price
        = newCartItems[index].unitPrice * newCartItems[index].quantity;
    } else if (action === 'decrement') {
      if (newCartItems[index].quantity > 1) {
        newCartItems[index].quantity -= 1;

        newCartItems[index].price
          = newCartItems[index].unitPrice * newCartItems[index].quantity;
      }
    }

    setCartItems(newCartItems);
  };

  const handleDeleteItem = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);

    setCartItems(newCartItems);
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
      {cartItems.length > 0 ? (
        <CartContainer>
          <CartList>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <MobileContainer>
                  <IconClose onClick={() => handleDeleteItem(item.id)}>
                    <IconSprite />
                    <Icon spriteName="close" size="16px" fill="#B4BDC3" />
                  </IconClose>
                  <ImgContainer>
                    <ImgElement src={item.image} />
                  </ImgContainer>
                  <ItemDescription>
                    <p>{item.name}</p>
                  </ItemDescription>
                </MobileContainer>
                <IconPriceContainer>
                  <IconContainer>
                    <IconElement
                      onClick={() => handleChangeQuantity(item.id, 'decrement')}
                    >
                      <IconSprite />
                      <Icon spriteName="minus" size="16px" fill="#B4BDC3" />
                    </IconElement>
                    <ItemQuantity>
                      <p>{item.quantity}</p>
                    </ItemQuantity>
                    <IconElement
                      onClick={() => handleChangeQuantity(item.id, 'increment')}
                    >
                      <IconSprite />
                      <Icon spriteName="plus" size="16px" />
                    </IconElement>
                  </IconContainer>
                  <ItemPrice>
                    <p>${item.price}</p>
                  </ItemPrice>
                </IconPriceContainer>
              </CartItem>
            ))}
          </CartList>
          <CartSummary>
            <TotalPrice>
              <p>${total}</p>
            </TotalPrice>
            <TotalItems>
              <p>Total for {items} items</p>
            </TotalItems>
            <CartCheckout onClick={handleToggle}>
              <p>Checkout</p>
            </CartCheckout>
            {showModal && (
              <CartPageModal
                title="Success!!!"
                content="Your order has been placed successfully."
                actions={<button onClick={handleClose}>Close</button>}
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
