import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

import { ProductsPaginationType } from '../';
import { Status } from '../../../../@type/status.types';

type PaginationProps<T = number> = {
  length: T;
  status: Status;
  pagination: ProductsPaginationType;
};

const Pagination: React.FC<PaginationProps> = ({ length, status = 'loading', pagination = false }) => {
  const { limit, page, setPage }: any = pagination;

  const pageCount: number = Math.ceil(length / limit);

  const handlePageClick = (e: { selected: number }) => {
    const selected = e.selected;

    setPage(selected + 1);
  };

  if (pageCount === 1 || !pagination) {
    return <></>;
  }

  return (
    <div>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        forcePage={page - 1}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default React.memo(Pagination);
