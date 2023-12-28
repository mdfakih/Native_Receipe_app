import { configureStore } from '@reduxjs/toolkit';
import favouriteSlice from './favourite';

export const store = configureStore({
  reducer: {
    favouriteMeals: favouriteSlice,
  },
});
