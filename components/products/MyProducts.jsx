import React from "react";

import MyCardProduct from "./MyCardProduct";

function MyProducts({ products, addToFavorite, addToBasket, addBasket, addFavorites, isLoading }) {
	const [searchProduct, setSearchProduct] = React.useState("");

	const searchValue = (e) => {
		setSearchProduct(e.target.value);
	}

	return (
		<section className="products">
			<div className="_container">
				<div className="products__body">
					<div className="products__header products-header">
						<h2 className="products-header__title">{searchProduct ? `Поиск по запросу: "${searchProduct}"` : "Все кроссовки"}</h2>
						<div className="products-header__search products-search">
							<label className="products-search__label" htmlFor="products-search">
								<img src="img/icon/search.svg" alt="Поиск" />
							</label>
							<input className="products-search__input" id="products-search" maxLength="40" onChange={searchValue} placeholder="Поиск..." value={searchProduct} type="text" />
							{searchProduct && <button className="products-search__clear _close" onClick={() => setSearchProduct("")} type="button"></button>}
						</div>
					</div>
					<div className="products__column products-column">
						{(isLoading ? [...Array(8)] : products.filter((card) => card.title.toString().toLowerCase().includes(searchProduct.toString().toLowerCase())))
							.map((card, idx) => (
								<MyCardProduct
									key={idx}
									addToFavorite={(item) => addToFavorite(item)}
									addToBasket={(item) => addToBasket(item)}
									addBasket={addBasket}
									loading={isLoading}
									favorited={addFavorites.some((item) => Number(item.id) === Number(card.id))}
									{...card}
								/>
							))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default MyProducts;