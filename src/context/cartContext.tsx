import React, { createContext } from 'react';
import { Phone, PhoneWithQuantity } from '../types';
import { useLocalStorage } from 'usehooks-ts';

interface ICartContext {
  cartProducts: any[];
  addItem: (product: Phone) => void;
  totalItems: number;
  setCartProducts: (
    newCartProducts:
      | PhoneWithQuantity[]
      | ((currentProducts: PhoneWithQuantity[]) => PhoneWithQuantity[]),
  ) => void;
}

export const CartContext = createContext<ICartContext>({
  cartProducts: [],
  addItem: () => {},
  totalItems: 0,
  setCartProducts: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartProducts, setCartProducts] = useLocalStorage<PhoneWithQuantity[]>(
    'cartProducts',
    [],
  );

  const addItem = (product: Phone) => {
    const isProductExist = cartProducts.find(
      (baseProduct) => baseProduct._id === product._id,
    );

    if (isProductExist) {
      setCartProducts((prev) =>
        prev.filter((item) => item._id !== product._id));

      return;
    }

    setCartProducts((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const value = {
    cartProducts,
    addItem,
    totalItems: cartProducts.length,
    setCartProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
