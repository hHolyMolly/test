import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './BasketCard.module.scss';

import Product from '../../../@type/models/Product';

import { currency } from '../../../utils/constants/basic';

import { RootState } from '../../../redux/store';
import { setRemoveFromBasket } from '../../../redux/slices/user';

import { Cross } from '../';

const BasketCard: React.FC<Product> = ({ _id, imageURL, title, price }) => {
  const dispatch = useDispatch();
  const { productsAll } = useSelector(({ products }: RootState) => products);

  const removeFormBasket = () => {
    dispatch(setRemoveFromBasket(_id));
  };

  const isFind: boolean = productsAll.items.find((card: Product) => card._id === _id);

  return (
    <div
      className="
        p-5 mb-5 last:mb-0
        flex items-center
        border border-solid border-grey-100 rounded-3xl
      "
      style={{ minHeight: '120px' }}
    >
      {isFind ? (
        <>
          <div className={`${styles.productImage} mr-5 w-16 h-16`} title={title}>
            <img className="max-w-full" src={imageURL} loading="lazy" alt={title} />
          </div>
          <div className="mr-2.5 flex-auto">
            <div className={styles.productTitle} title={title} style={{ overflowWrap: 'anywhere' }}>
              {title}
            </div>
            <div className="font-bold" style={{ overflowWrap: 'anywhere' }}>
              {price} {currency}
            </div>
          </div>
          <Cross onClick={removeFormBasket} />
        </>
      ) : (
        'Товар в данное время недоступен'
      )}
    </div>
  );
};

export default React.memo(BasketCard);
