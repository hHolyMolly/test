import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Product from '../../@type/models/Product';
import { Status } from '../../@type/status.types';

type FavoriteType = {
  items: Product[];
  status: Status;
};

type BasketType = {
  isActive: boolean;
  items: Product[];
  totalPrice: number;
  status: Status;
};

export interface UserStateSlice {
  basket: BasketType;
  favorite: FavoriteType;
}

const initialState: UserStateSlice = {
  basket: {
    isActive: false,
    items: [],
    totalPrice: 0,
    status: 'loading',
  },
  favorite: {
    items: [],
    status: 'loading',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveBasket: (state, { payload }: PayloadAction<boolean>) => {
      state.basket.isActive = payload;
    },
    setBasket: (state, { payload }: PayloadAction<Product[]>) => {
      state.basket.items = payload;

      const sum: number = state.basket.items.reduce((sum, card) => sum + card.price, 0);
      state.basket.totalPrice = sum;
      state.basket.status = 'loaded';
    },
    setFavorite: (state, { payload }: PayloadAction<Product[]>) => {
      state.favorite.items = payload;
      state.favorite.status = 'loaded';
    },
    setPushToBasket: (state, { payload }: PayloadAction<Product>) => {
      const findItem = state.basket.items.find((card: Product) => card._id === payload._id);

      if (!findItem) {
        state.basket.items.push({ ...payload });
      } else {
        const filtered = state.basket.items.filter((card: Product) => card._id !== payload._id);
        state.basket.items = filtered;
      }

      const sum: number = state.basket.items.reduce((sum, card) => sum + card.price, 0);
      state.basket.totalPrice = sum;

      window.localStorage.setItem('basket', JSON.stringify(state.basket.items));
    },
    setRemoveFromBasket: (state, { payload }: PayloadAction<string>) => {
      const filtered = state.basket.items.filter((card: Product) => card._id !== payload);
      state.basket.items = filtered;

      const sum: number = state.basket.items.reduce((sum, card) => sum + card.price, 0);
      state.basket.totalPrice = sum;

      window.localStorage.setItem('basket', JSON.stringify(state.basket.items));
    },
    setPushToFavorite: (state, { payload }: PayloadAction<Product>) => {
      const findItem = state.favorite.items.find((card: Product) => card._id === payload._id);

      if (!findItem) {
        state.favorite.items.push({ ...payload });
      } else {
        const filtered = state.favorite.items.filter((card: Product) => card._id !== payload._id);
        state.favorite.items = filtered;
      }

      window.localStorage.setItem('favorite', JSON.stringify(state.favorite.items));
    },
  },
});

export const { setActiveBasket, setBasket, setFavorite, setPushToBasket, setRemoveFromBasket, setPushToFavorite } = userSlice.actions;

export default userSlice.reducer;
