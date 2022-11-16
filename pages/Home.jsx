import MyProducts from "../components/products/MyProducts"

function Home({ products = [], addToFavorite, addFavorites, addToBasket, addBasket, isLoading }) {
	return (
		<main className="page">
			<MyProducts
				products={products}
				addToFavorite={addToFavorite}
				addFavorites={addFavorites}
				addToBasket={addToBasket}
				addBasket={addBasket}
				isLoading={isLoading} />
		</main>
	)
}

export default Home;