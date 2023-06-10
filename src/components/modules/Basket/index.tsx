import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../redux/store';
import { setActiveBasket } from '../../../redux/slices/user';

import { Cross } from '../../UI';
import BasketCard from '../../UI/BasketCard';
import Product from '../../../@type/models/Product';

function Basket() {
  const dispatch = useDispatch();
  const { basket } = useSelector(({ user }: RootState) => user);

  const { isActive, items } = basket;

  const onCloseBasket = () => dispatch(setActiveBasket(false));

  const activeWrapper = isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none';

  const activeBody = (value: string) => {
    return { transform: `translateX(${value})`, zIndex: '110' };
  };

  return (
    <div>
      <div
        className={`
		  		w-full h-full
		  		fixed top-0 right-0
				  transition-opacity duration-500
		 	  bg-wrapper
			 	  ${activeWrapper}
		    `}
        onClick={onCloseBasket}
        style={{ zIndex: '100' }}
      />
      <div
        className="
          px-3.5 py-8 md:p-8 lg:p-5 xl:p-8 ml-auto
		  		w-full lg:max-w-sm xl:max-w-md h-screen
          flex flex-col
		  		fixed top-0 right-0
          overflow-hidden
				  transition-transform duration-500
	 		  bg-content-color shadow-basket
		    "
        style={isActive ? activeBody('0%') : activeBody('100%')}
      >
        <div className="mb-8 flex justify-between items-center">
          <div>Корзина</div>
          <Cross onClick={onCloseBasket} />
        </div>
        <div className="flex-auto overflow-auto">
          {items.map((card: Product) => (
            <BasketCard {...card} key={card._id} />
          ))}
        </div>
        <div className="pt-8">footer</div>
      </div>
    </div>
  );
}

export default Basket;
