import React from 'react';
import classNames from 'classnames';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
};

const Title = ({ children, className, align = 'left' }: TitleProps) => {
  return (
    <div className={classNames(className, 'font-bold text-2xl lg:text-3xl')} style={{ textAlign: align }}>
      {children}
    </div>
  );
};

export default Title;
