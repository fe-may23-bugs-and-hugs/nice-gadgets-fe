/*eslint-disable*/
import React, { createContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Phone } from '../types/Phone';

interface ICartContext {
  cartProducts: any[];
  addItem: (product: any) => void;
  totalItems: number;
}

export const CartContext = createContext<ICartContext>({
  cartProducts: [],
  addItem: () => {},
  totalItems: 0,
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartProducts, setCartProducts] = useLocalStorage<Phone[]>(
    'cartProducts',
    [],
  );

  console.log(cartProducts);

  const addItem = (product: Phone) => {
    const isProductExist = cartProducts.find(
      (baseProduct) => baseProduct._id === product._id,
    );

    if (isProductExist) {
      setCartProducts((prev) =>
        prev.filter((item) => item._id !== product._id),
      );

      return;
    }

    setCartProducts((prev) => [...prev, product]);
  };

  const value = {
    cartProducts,
    addItem,
    totalItems: cartProducts.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};