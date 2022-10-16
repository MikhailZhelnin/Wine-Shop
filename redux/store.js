import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import cartSlice from './slices/cartSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice,
    },
  });

export const wrapper = createWrapper(makeStore);
