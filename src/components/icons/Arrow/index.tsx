import React from 'react';

import { IconProps } from '../icon.types';

const Arrow: React.FC<IconProps> = ({ width = 16, height = 14, stroke = 'stroke-grey-500', strokeWidth = 2, position = 'right' }) => {
  return (
    <svg
      className={`${stroke} ${position === 'left' && 'rotate-180'}`}
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 7H14.7143" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.71436 1L14.7144 7L8.71436 13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default React.memo(Arrow);
