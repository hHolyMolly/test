import React from 'react';

import styles from './Loading.module.scss';

import { IconProps } from '../icon.types';

const Loading: React.FC<IconProps> = ({ width = 40, height = 40, stroke = 'grey-300', strokeWidth = 5 }) => {
  return (
    <div className={styles.loadingIcon} style={{ width: `${width}px`, height: `${height}px` }}>
      {[...Array(4)].map((_, idx: number) => (
        <div
          className={`border-${stroke}`}
          style={{ width: `${width}px`, height: `${height}px`, margin: `${strokeWidth}px`, borderWidth: `${strokeWidth}px` }}
          key={idx}
        ></div>
      ))}
    </div>
  );
};

export default React.memo(Loading);
