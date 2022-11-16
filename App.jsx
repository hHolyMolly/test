import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import AppContext from "./context";

import MyHeader from "./components/header/MyHeader";

// СТРАНИЦЫ ПРОЕКТА
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [products, setProducts] = React.useState([]); // СЛЕДИМ ЗА ПОДГРУЗКОЙ ПРОДУКТОВ
  const [addFavorites, setAddFavorites] = React.useState([]); // СЛЕДИМ ЗА ОТПРАВКОЙ И ПОДГРУЗКОЙ ИЗБРАННЫХ ТОВАРОВ
  const [addBasket, setAddBasket] = React.useState([]); // СЛЕДИМ ЗА ОТПРАВКОЙ И ПОДГРУЗКОЙ ИЗБРАННЫХ ТОВАРОВ
  const [isLoading, setIsLoading] = React.useState(true); // СЛЕДИМ ЗА ЗАГРУЗКОЙ ТОВАРОВ

  React.useEffect(() => {
    async function changeProducts() {
      const itemsResponse = await axios.get("https://636563c9f711cb49d1fcf6d2.mockapi.io/products");
      const favoritesResponse = await axios.get("https://636563c9f711cb49d1fcf6d2.mockapi.io/addFavorite");
      const cardResponse = await axios.get("https://636563c9f711cb49d1fcf6d2.mockapi.io/addBasket");
      setIsLoading(false);

      setAddBasket(cardResponse.data);
      setAddFavorites(favoritesResponse.data);
      setProducts(itemsResponse.data);
    }
    changeProducts();
  }, []);

  // ДОБАВЛЯЕМ/УДАЛЯЕМ ТОВАРЫ ИЗ КОРЗИНЫ
  const addToBasket = async (card) => {
    try {
      if (addBasket.find((cardObj) => Number(cardObj.id) === Number(card.id))) {
        axios.delete(`https://636563c9f711cb49d1fcf6d2.mockapi.io/addBasket/${card.id}`);
        setAddBasket((prev) => prev.filter((cardObj) => Number(cardObj.id) !== Number(card.id)));
      } else {
        axios.post("https://636563c9f711cb49d1fcf6d2.mockapi.io/addBasket", card);
        setAddBasket((prev) => [...prev, card]); // ОТПРАВЛЯЕМ СВОЮ КОРЗИНУ В API
      }
    } catch (error) {
      alert("Не удалось добавить в корзину");
    }
  }
  const removeFromBasket = (id) => {
    axios.delete(`https://636563c9f711cb49d1fcf6d2.mockapi.io/addBasket/${id}`);
    setAddBasket((prev) => prev.filter(item => item.id !== id)); // УДАЛЯЕМ ТОВАР ИЗ КОРЗИНЫ
  }

  // ДОБАВЛЯЕМ/УДАЛЯЕМ ТОВАРЫ ИЗ ИЗБРАННЫХ
  const addToFavorite = async (card) => {
    try {
      if (addFavorites.find((favObj) => Number(favObj.id) === Number(card.id))) {
        axios.delete(`https://636563c9f711cb49d1fcf6d2.mockapi.io/addFavorite/${card.id}`);
        setAddFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(card.id))); // УДАЛЯЕМ ТОВАР ИЗ ИЗБРАННОГО
      } else {
        axios.post("https://636563c9f711cb49d1fcf6d2.mockapi.io/addFavorite", card);
        setAddFavorites((prev) => [...prev, card]); // ОТПРАВЛЯЕМ СВОИ ИЗБРАННЫЕ ТОВАРЫ В API
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  }

  const getAddedProduct = (id) => {
    return addBasket.some((item) => Number(item.id) === Number(id));
  }

  const sumBasket = addBasket.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <AppContext.Provider value={{ getAddedProduct, sumBasket }}>
      <div className="wrapper">
        <MyHeader myBasketList={addBasket} removeFromBasket={removeFromBasket} />
        <Routes>
          <Route path="/" element={<Home
            products={products}
            addToFavorite={addToFavorite}
            addFavorites={addFavorites}
            addBasket={addBasket}
            addToBasket={addToBasket}
            isLoading={isLoading} />} />
          <Route path="/favorites" element={<Favorites
            products={addFavorites}
            addToFavorite={addToFavorite}
            addBasket={addBasket}
            addToBasket={addToBasket}
            isLoading={isLoading} />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
