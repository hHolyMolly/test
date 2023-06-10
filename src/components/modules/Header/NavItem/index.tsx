import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.scss';

const classT = 'font-semibold text-grey-700';

type NavItemProps<T = string> = {
  icon: React.ReactElement;
  children?: React.ReactNode | false;
  onClick?: () => void;
  type?: 'button' | 'Link';
  to?: T;
};

const NavItem = ({ icon, children = false, onClick, type = 'Link', to = '/' }: NavItemProps) => {
  return (
    <>
      {type === 'Link' && (
        <Link className={styles.navItem} to={to}>
          <i>{icon}</i>
          {children && <span className={classT}>{children}</span>}
        </Link>
      )}
      {type === 'button' && (
        <button className={styles.navItem} onClick={onClick} type="button">
          <i>{icon}</i>
          {children && <span className={classT}>{children}</span>}
        </button>
      )}
    </>
  );
};

export default React.memo(NavItem);
