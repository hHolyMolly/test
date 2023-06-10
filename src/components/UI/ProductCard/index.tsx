import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ProductCard.module.scss';

import Product from '../../../@type/models/Product';

import { currency } from '../../../utils/constants/basic';

import { RootState } from '../../../redux/store';
import { setPushToBasket, setPushToFavorite } from '../../../redux/slices/user';

const ProductCard: React.FC<Product> = ({ _id, imageURL, title, price }) => {
  const dispatch = useDispatch();
  const { basket, favorite } = useSelector(({ user }: RootState) => user);

  const { items: basketItems }: { items: Product[] } = basket;
  const { items: favoriteItems }: { items: Product[] } = favorite;

  const product: Product = {
    _id,
    imageURL,
    title,
    price,
  };

  const handleToFavorite = () => {
    dispatch(setPushToFavorite(product));
  };

  const handleToBasket = () => {
    dispatch(setPushToBasket(product));
  };

  const findState = (items: Product[]) => {
    const isFind = items.find((card: Product) => card._id === _id);
    return Boolean(isFind);
  };

  return (
    <article className={`${styles.productCard} border-grey-100`}>
      <div className="min-h-full flex flex-col relative">
        <button className="absolute top-0 left-0 z-10" onClick={handleToFavorite} type="button">
          <img
            className="w-10 h-10"
            src={`./img/components/product-card/favorite${findState(favoriteItems) ? '-add' : ''}.png`}
            loading="lazy"
            alt="Добавить в избранные"
          />
        </button>
        <div className={styles.productImage} title={title}>
          <img src={imageURL} alt={title} />
        </div>
        <h5 className={styles.productTitle} title={title} style={{ overflowWrap: 'anywhere' }}>
          {title}
        </h5>
        <div className="flex justify-between items-start">
          <div className="mb-3.5 mr-3.5 flex flex-col">
            <span className="text-grey-300 font-medium" style={{ overflowWrap: 'anywhere' }}>
              Цена:
            </span>
            <strong className="font-bold" style={{ overflowWrap: 'anywhere' }}>
              {price} {currency}
            </strong>
          </div>
          <button onClick={handleToBasket} type="button">
            <img
              className="w-10 h-10"
              src={`./img/components/product-card/basket${findState(basketItems) ? '-add' : ''}.png`}
              alt="Добавить в корзину"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default React.memo(ProductCard);
