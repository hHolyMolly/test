import React from 'react';

import Router from './Router';

import useState from './hooks/useState';

import { setBasket, setFavorite } from './redux/slices/user';

function App() {
  useState('basket', setBasket);
  useState('favorite', setFavorite);

  return <Router />;
}

export default App;
