import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Arrow } from '../../icons';

const classB = `
  h-14
  flex justify-center items-center
  rounded-2xl
  text-sm md:text-base font-semibold
`;

type ButtonProps<T = string> = {
  children: T;
  arrow?: false | 'before' | 'after';
  className?: T;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  tag?: 'button' | 'Link';
  to?: string;
};

const Button: React.FC<ButtonProps> = ({
  children = 'Кнопка',
  onClick,
  arrow = 'after',
  className,
  type = 'button',
  tag = 'button',
  to = '/',
}) => {
  const customClass: string = classNames(
    className,
    classB,
    arrow === 'after' && 'pl-12 pr-7',
    arrow === 'before' && 'pl-7 pr-12',
    arrow === false && 'px-12',
    'bg-green-300 hover:bg-green-500 text-white'
  );

  const attributesButton = {
    type: type,
    onClick: onClick,
  };

  const attributesLink = {
    to: to,
  };

  const innerContent: React.ReactElement = (
    <>
      {arrow === 'before' && <Arrow position="left" stroke="stroke-white" />}
      <span className={classNames(arrow === 'before' && 'ml-4', arrow === 'after' && 'mr-4')}>{children}</span>
      {arrow === 'after' && <Arrow position="right" stroke="stroke-white" />}
    </>
  );

  return (
    <>
      {tag === 'button' && (
        <button className={customClass} {...attributesButton}>
          {innerContent}
        </button>
      )}
      {tag === 'Link' && (
        <Link className={customClass} {...attributesLink}>
          {innerContent}
        </Link>
      )}
    </>
  );
};

export default React.memo(Button);
