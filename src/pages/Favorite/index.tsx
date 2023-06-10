import React from 'react';
import { useSelector } from 'react-redux';

import useTitle from '../../hooks/useTitle';

import { RootState } from '../../redux/store';

import { Products } from '../../components/screens';

function Favorite() {
  const { favorite } = useSelector(({ user }: RootState) => user);

  const { items, status } = favorite;

  useTitle('React Sneakers - Список желаний');

  const emptyTitle: string = 'У вас нет избранных товаров';
  const emptyText: string = 'Никогда не поздно это исправить';

  return (
    <>
      <Products title="Избранные" status={status} count={items.length} items={items} isEmpty={{ title: emptyTitle, text: emptyText }} />
    </>
  );
}

export default Favorite;
