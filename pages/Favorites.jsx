import React from "react";
import MyCardProduct from "../components/products/MyCardProduct"
import AppContext from "../context";
import { Link } from "react-router-dom";

function Favorites({ products = [], addToBasket, addBasket, addToFavorite, isLoading }) {

	const { getAddedProduct } = React.useContext(AppContext);

	return (
		<main className="page">
			<section className="products">
				<div className="_container">
					<div className="products__body">
						{products.length > 0 &&
							<>
								<div className="products__header products-header">
									<h2 className="products-header__title">
										Избранные
									</h2>
								</div>
								<div className="products__column products-column">
									{(isLoading ? [...Array(8)] : products).map((card, idx) => (
										<MyCardProduct
											key={idx}
											addToFavorite={addToFavorite}
											addToBasket={(card) => addToBasket(card)}
											addBasket={addBasket}
											added={getAddedProduct(card && card.id)}
											favorited={true}
											loading={isLoading}
											{...card}
										/>
									))}
								</div>
							</>
						}
						{products.length > 0 ?
							null
							:
							(
								isLoading ? <></> :
									<div className="basket-dropdown__empty basket-dropdown-empty">
										<div className="basket-dropdown-empty__image">
											<img src="./img/page/favorites/image.png" alt="Нет избранных товаров" />
										</div>
										<h2 className="basket-dropdown-empty__title">У вас нет избранных товаров</h2>
										<p className="basket-dropdown-empty__text">
											Добавьте хотя бы один товар что-бы он появился в списке желаний!
										</p>
										<Link className="basket-dropdown-empty__back button" to="/">
											<i className="button__icon button__icon_left">
												<img src="./img/icon/arrow.svg" alt="" />
											</i>
											<span className="button__text">Вернуться назад</span>
										</Link>
									</div>
							)
						}
					</div>
				</div>
			</section>
		</main >
	)
}

export default Favorites;