import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favourtieMealIds, setFavourtieMealIds] = useState([]);

  const addFavourite = (id) => {
    setFavourtieMealIds((prev) => [...prev, id]);
  };
  const removeFavourite = (id) => {
    setFavourtieMealIds((prev) => prev.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favourtieMealIds,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavoritesContextProvider;
