import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './ProductCard.module.scss';

const ProductLoading = () => {
  return (
    <article className={`${styles.productCard} border-grey-100 cursor-wait`}>
      <ContentLoader speed={2} width="100%" height="100%" viewBox="0 0 149 215" backgroundColor="#e6e6e6" foregroundColor="#f2f2f2">
        <rect x="0" y="150" rx="6" ry="6" width="109" height="15" />
        <rect x="0" y="180" rx="6" ry="6" width="40" height="15" />
        <rect x="0" y="125" rx="6" ry="6" width="149" height="15" />
        <rect x="0" y="200" rx="6" ry="6" width="70" height="15" />
        <rect x="113" y="180" rx="6" ry="6" width="35" height="35" />
        <rect x="0" y="0" rx="6" ry="6" width="149" height="111" />
      </ContentLoader>
    </article>
  );
};

export default ProductLoading;
