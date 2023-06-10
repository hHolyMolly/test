import React from 'react';

import Product from '../../../@type/models/Product';
import { Status } from '../../../@type/status.types';

import { ProductCard, ProductLoading } from '../../UI';
import Pagination from './Pagination';

import { ProductsPaginationType } from './';

import { Oops } from '../';

type ContentProps<T = number> = {
  items: Product[];
  status: Status;
  count: T;
  pagination: ProductsPaginationType;
};

const Content: React.FC<ContentProps> = ({ items = [], status = 'loading', count, pagination = false }) => {
  const { limit }: any = pagination;

  const Items: React.FC = () => {
    const grid = (content: React.ReactNode) => {
      return (
        <>
          <div className="grid grid-cols-4 gap-10">{content}</div>
          <Pagination length={count} status={status} pagination={pagination} />
        </>
      );
    };

    const products = grid(items.map((obj: Product) => <ProductCard key={obj._id} {...obj} />));
    const checkLoading = grid([...Array(limit)].map((_, idx: number) => <ProductLoading key={`loading-card_${idx}`} />));

    const checkEmpty = items.length > 0 ? products : <EmptyTemplate />;

    return status !== 'error' ? status !== 'loading' ? checkEmpty : checkLoading : <ErrorTemplate />;
  };

  const EmptyTemplate: React.FC = () => {
    return <>Товаров нет</>;
  };

  const ErrorTemplate: React.FC = () => {
    return (
      <>
        <Oops title="Произошла внутренняя ошибка." text="Попробуйте повторить попытку позже." navigation={false} />
      </>
    );
  };

  return <Items />;
};

export default React.memo(Content);
