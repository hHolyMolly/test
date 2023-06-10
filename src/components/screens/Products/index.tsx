import React from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import classNames from 'classnames';

import styles from './Products.module.scss';

import Product from '../../../@type/models/Product';
import { Status } from '../../../@type/status.types';

import { Title } from '../../UI';
import Content from './Content';
import { Search } from '../../icons';
import { Oops } from '../';

type ProductsSearchType<T = string> =
  | false
  | {
      setValue: (value: T) => void;
      value: T;
    };

export type ProductsIsEmpty<T = string> =
  | false
  | {
      title: T;
      text: T;
    };

export type ProductsPaginationType<T = number> =
  | false
  | {
      limit: T;
      page: T;
      setPage: (value: T) => void;
    };

type ProductsProps<T = string, N = number> = {
  title: T;
  count: N;
  items: Product[];
  status: Status;
  search?: ProductsSearchType;
  pagination?: ProductsPaginationType;
  isEmpty?: ProductsIsEmpty;
};

function Products({ title, count, items = [], status = 'loading', search = false, pagination = false, isEmpty = false }: ProductsProps) {
  const { hash } = window.location;
  const replaceHash = hash.replace('#', '');

  const [searchValue, setSearchValue] = React.useState<string>('');

  const onChangeSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    debounceSearch(e);
  }, []);

  const changeSearchValue = (value: string) => {
    if (!search) return;

    const { setValue } = search;

    setValue(value);
  };

  const debounceSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearchValue(e.target.value);
  }, 500);

  const onClearSearch = () => {
    setSearchValue('');
    changeSearchValue('');
  };

  React.useEffect(() => {
    if (!search) return;

    setSearchValue(search?.value);
  }, [search]);

  return (
    <section className="flex flex-col flex-auto">
      {items.length > 0 || !isEmpty ? (
        <div className="_container flex flex-col flex-auto">
          <>
            {status !== 'error' && (
              <div className="mb-10 flex justify-between items-start">
                <div className="flex items-center">
                  {replaceHash !== '' && replaceHash !== '/' && (
                    <Link className="mr-3" to="/">
                      back
                    </Link>
                  )}
                  <Title>{title}</Title>
                  <span className="ml-3 text-lg text-grey-300">{status !== 'loading' ? `(${count})` : '(...)'}</span>
                </div>
                {search && (
                  <label
                    className={classNames(
                      'border border-solid border-grey-100 h-12 relative flex items-center w-full cursor-text rounded-xl overflow-hidden pl-3.5',
                      status === 'loading' && 'cursor-wait'
                    )}
                    style={{ maxWidth: '280px' }}
                  >
                    <div className="flex justify-center items-center">
                      <Search />
                    </div>
                    <input
                      className={classNames(
                        'w-full min-h-full px-3.5 placeholder:text-grey-300 bg-content-color',
                        status === 'loading' && 'pointer-events-none'
                      )}
                      type="text"
                      onChange={onChangeSearch}
                      value={searchValue}
                      placeholder="Поиск..."
                      disabled={status === 'loading'}
                    />
                    {searchValue.length > 0 && (
                      <button
                        className={`${styles.cross} before:bg-grey-300 after:bg-grey-300 hover:before:bg-grey-500 hover:after:bg-grey-500 mr-3.5`}
                        onClick={onClearSearch}
                        type="button"
                      ></button>
                    )}
                  </label>
                )}
              </div>
            )}
            <Content items={items} status={status} count={count} pagination={pagination} />
          </>
        </div>
      ) : (
        status === 'loaded' && <Oops title={isEmpty.title} text={isEmpty.text} />
      )}
    </section>
  );
}

export default React.memo(Products);
