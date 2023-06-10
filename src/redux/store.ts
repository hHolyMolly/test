import { configureStore } from '@reduxjs/toolkit';

import products from './slices/products';
import user from './slices/user';

export const store = configureStore({
  reducer: {
    user,
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
