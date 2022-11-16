function MyCardBasket({ title, price, imageUrl, clickRemoveFromBasket }) {
	return (
		<article className="basket-dropdown-column__card">
			<div className="basket-dropdown-column__image">
				<img src={imageUrl} alt={title} />
			</div>
			<div className="basket-dropdown-column__row">
				<h5 className="basket-dropdown-column__title">{title}</h5>
				<strong className="basket-dropdown-column__price">{price}</strong>
			</div>
			<button className="basket-dropdown-column__remove" onClick={clickRemoveFromBasket} type="button">
				<img src="./img/icon/close.svg" alt="Убрать из корзины" />
			</button>
		</article>
	)
}

export default MyCardBasket;