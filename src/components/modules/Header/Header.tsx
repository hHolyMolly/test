import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { currency } from '../../../utils/constants/basic';

import { RootState } from '../../../redux/store';
import { setActiveBasket } from '../../../redux/slices/user';

import { Basket, Favorite, Profile } from '../../icons';
import NavItem from './NavItem';

function Header() {
  const dispatch = useDispatch();
  const { basket, favorite } = useSelector(({ user }: RootState) => user);

  const { totalPrice } = basket;
  const { length: favoriteCount } = favorite.items;

  const onOpenBasket = () => {
    dispatch(setActiveBasket(true));
  };

  return (
    <header
      className="
        w-full
        fixed md:relative t-0 l-0
        border-b border-solid border-grey-100 bg-content-color
      "
      style={{ zIndex: '40' }}
    >
      <div className="_container h-24 xl:h-28 2xl:h-32 flex justify-between items-center">
        <Link className="mr-3.5 flex items-center" to="/">
          <img className="mr-3.5" src="./img/logo.svg" width={40} height={40} alt="Logo" />
          <div className="hidden lg:flex flex-col">
            <span className="text-dark font-bold text-xl">REACT SNEAKERS</span>
            <span className="text-grey-500 text-sm">Магазин лучших кроссовок</span>
          </div>
        </Link>
        <div className="gap-9 flex items-center">
          <NavItem icon={<Basket />} onClick={onOpenBasket} type="button">
            {totalPrice > 0 && `${totalPrice} ${currency}`}
          </NavItem>
          <div className="relative">
            <NavItem icon={<Favorite />} to="/favorite" />
            {favoriteCount > 0 && (
              <span
                className="
                  w-5 h-5
                  absolute
                  flex justify-center items-center
                  rounded-full pointer-events-none
                  bg-green-300 text-white
                "
                style={{ top: '-6px', right: '-11px' }}
              >
                {favoriteCount}
              </span>
            )}
          </div>
          <NavItem icon={<Profile />} to="/profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
