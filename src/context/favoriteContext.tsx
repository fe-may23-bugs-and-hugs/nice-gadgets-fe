/*eslint-disable*/
import React, { createContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Phone } from '../types/Phone';

interface IFavoriteContext {
  favoriteProducts: Phone[];
  addFavoriteProduct: (product: Phone) => void;
  totalFavorite: number;
}

export const FavoriteContext = createContext<IFavoriteContext>({
  favoriteProducts: [],
  addFavoriteProduct: () => {},
  totalFavorite: 0,
});

type Props = {
  children: React.ReactNode;
};

export const FavoriteProvider: React.FC<Props> = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useLocalStorage<Phone[]>(
    'favoriteProducts',
    [],
  );

  const addFavoriteProduct = (product: Phone) => {
    const isProductExist = favoriteProducts.find(
      (baseProduct) => baseProduct._id === product._id,
    );

    if (isProductExist) {
      setFavoriteProducts((prev) =>
        prev.filter((item) => item._id !== product._id),
      );

      return;
    }

    setFavoriteProducts((prev) => [...prev, product]);
  };

  const value = {
    favoriteProducts,
    addFavoriteProduct,
    totalFavorite: favoriteProducts.length,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
