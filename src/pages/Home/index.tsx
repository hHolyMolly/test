import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/store';
import { ProductsAllType } from '../../redux/slices/products';

import useTitle from '../../hooks/useTitle';

import { Products } from '../../components/screens';
import { SearchRequestType, fetchGetProducts } from '../../redux/slices/products';

function Home() {
  const dispatch = useDispatch();
  const { productsAll } = useSelector(({ products }: RootState) => products);

  const { count, items, status }: ProductsAllType = productsAll;

  const [searchValue, setSearchValue] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const limit: number = 4;

  useTitle('Интернет-магазин React Sneakers');

  React.useEffect(() => {
    const request: SearchRequestType = {
      page: currentPage,
      limit: limit,
      value: searchValue,
    };

    dispatch(fetchGetProducts(request));
  }, [searchValue, currentPage]);

  return (
    <>
      <Products
        title="Все кроссовки"
        count={count}
        items={items}
        status={status}
        search={{ value: searchValue, setValue: setSearchValue }}
        pagination={{ page: currentPage, limit: limit, setPage: setCurrentPage }}
      />
    </>
  );
}

export default Home;
