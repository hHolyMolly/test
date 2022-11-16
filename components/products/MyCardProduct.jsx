import React from "react";
import AppContext from "../../context";
import ContentLoader from "react-content-loader"

function MyCardProduct({
	addToBasket,
	addToFavorite,
	favorited = false,
	loading = false,
	title,
	price,
	imageUrl,
	id
}) {
	const [favoriteButton, setFavoriteButton] = React.useState(favorited); // ИЗБРАННЫЕ

	const { getAddedProduct } = React.useContext(AppContext);

	// ДОБАВЛЯЕМ ТОВАР В ИЗБРАННЫЕ
	const addItemFavorite = () => {
		addToFavorite({ title, price, imageUrl, id });
		setFavoriteButton(!favorited);
	}
	// ДОБАВЛЯЕМ ТОВАР В КОРЗИНУ
	const clickBasket = () => {
		addToBasket({ title, price, imageUrl, id })
	}

	return (
		<article className="products-column__card">
			{loading ? <ContentLoader
				speed={2}
				width={150}
				height={235}
				viewBox="0 0 150 235"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="103" rx="3" ry="3" width="150" height="15" />
				<rect x="0" y="184" rx="8" ry="8" width="80" height="24" />
				<rect x="115" y="180" rx="10" ry="10" width="32" height="32" />
				<rect x="0" y="128" rx="3" ry="3" width="93" height="15" />
				<rect x="0" y="0" rx="9" ry="9" width="150" height="91" />
			</ContentLoader> :
				<>
					<button className="products-column__favorite" onClick={addItemFavorite} type="button">
						<img src={favorited ? "./img/icon/favorite-add.svg" : "./img/icon/favorite.svg"} alt="Список желаний" />
					</button>
					<div className="products-column__image">
						<img src={imageUrl} alt={title} />
					</div>
					<h5 className="products-column__title">{title}</h5>
					<div className="products-column__footer products-column-footer">
						<div className="products-column-footer__row">
							<span className="products-column-footer__text">Цена:</span>
							<strong className="products-column-footer__price">{price}</strong>
						</div>
						<button className="products-column-footer__basket" onClick={clickBasket} type="button">
							<img src={getAddedProduct(id) ? "./img/icon/check.svg" : "./img/icon/plus.svg"} alt="Корзина" />
						</button>
					</div>
				</>
			}
		</article>
	)
}

export default MyCardProduct;