/*eslint-disable*/
import React, { createContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';

interface ICartContext {
  cartProducts: any[];
  addItem: (product: any) => void;
}

export const CartContext = createContext<ICartContext>({
  cartProducts: [],
  addItem: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartProducts, setCartProducts] = useLocalStorage<any>(
    'cartProducts',
    [],
  );

  console.log(cartProducts);

  const addItem = (product: any) => {
    setCartProducts((prev: any) => [...prev, product]);
  };

  const value = {
    cartProducts,
    addItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
