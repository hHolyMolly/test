import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import $api from '../../utils/http/$api';

import Product from '../../@type/models/Product';
import { Status } from '../../@type/status.types';

export type SearchRequestType<T = number> = {
  page: T;
  limit: T;
  value: string;
};

export const fetchGetProducts: any = createAsyncThunk('/getProductsAll', async (payload: SearchRequestType) => {
  try {
    const { page, limit, value } = payload;

    const { data } = await $api.get(`/products/getAll/?search=${value}&page=${page}&limit=${limit}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export type ProductsAllType = {
  count: number;
  items: Product[];
  status: Status;
};

interface ProductsStateSlice {
  productsAll: ProductsAllType;
}

const initialState: ProductsStateSlice = {
  productsAll: {
    count: 0,
    items: [],
    status: 'loading',
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetProducts.pending]: (state) => {
      state.productsAll.status = 'loading';
    },
    [fetchGetProducts.fulfilled]: (state, { payload }: PayloadAction<ProductsAllType>) => {
      if (payload !== undefined) {
        state.productsAll.count = payload.count;
        state.productsAll.items = payload.items;

        state.productsAll.status = 'loaded';
      } else {
        state.productsAll.status = 'error';
      }
    },
    [fetchGetProducts.rejected]: (state) => {
      state.productsAll.count = 0;
      state.productsAll.items = [];

      state.productsAll.status = 'error';
    },
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
