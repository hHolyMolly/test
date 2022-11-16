import React from "react";
import AppContext from "../../context";

import MyCardBasket from "./MyCardBasket";

function MyBasket({ myBasketList, removeFromBasket }) {
	const [activeBasket, setActiveBasket] = React.useState(false);

	const { sumBasket } = React.useContext(AppContext);

	// ОТКРЫТЬ КОРЗИНУ
	const openBasket = () => {
		setActiveBasket(true);
		document.body.style.overflow = "hidden";
	}

	// ЗАКРЫТЬ КОРЗИНУ
	const closeBasket = () => {
		setActiveBasket(false);
		document.body.style.overflow = "auto";
	}

	return (
		<li className="header-actions__basket basket header-actions__item">
			<button className="basket__open basket-open" onClick={openBasket} type="button">
				<img className="basket-open__icon" src="./img/icon/basket.svg" alt="Корзина" />
				<span className="basket-open__value">{sumBasket > 0 && sumBasket + "руб."}</span>
			</button>
			<div className="basket__wrapper" onClick={closeBasket}
				style={activeBasket ? { backgroundColor: "rgba(0, 0, 0, 0.6)", pointerEvents: "auto" } : null} />
			<div className="basket__dropdown basket-dropdown"
				style={activeBasket ? { right: "0px" } : null}>
				{myBasketList.length > 0 &&
					<div className="basket-dropdown__top basket-dropdown-top">
						<h2 className="basket-dropdown-top__title">Корзина</h2>
						<button className="basket-dropdown-top__close" onClick={closeBasket}>
							<img src="./img/icon/close.svg" alt="Закрыть корзину" />
						</button>
					</div>
				}
				{myBasketList.length > 0 ?
					<div className="basket-dropdown__column basket-dropdown-column">
						{myBasketList.map((card, idx) => (
							<MyCardBasket
								title={card.title}
								price={card.price}
								imageUrl={card.imageUrl}
								key={idx}
								clickRemoveFromBasket={() => removeFromBasket(card.id)}
							/>
						))}
					</div>
					:
					<div className="basket-dropdown__empty basket-dropdown-empty">
						<div className="basket-dropdown-empty__image">
							<img src="./img/header/basket/clear.png" alt="" />
						</div>
						<h2 className="basket-dropdown-empty__title">Корзина пустая</h2>
						<p className="basket-dropdown-empty__text">
							Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
						</p>
						<button className="basket-dropdown-empty__back button" onClick={closeBasket} type="button">
							<i className="button__icon button__icon_left">
								<img src="./img/icon/arrow.svg" alt="Корзина пустая" />
							</i>
							<span className="button__text">Вернуться назад</span>
						</button>
					</div>
				}
				{myBasketList.length > 0 &&
					<div className="basket-dropdown__footer basket-dropdown-footer">
						<ul className="basket-dropdown-footer__list">
							<li className="basket-dropdown-footer__item">
								<h5 className="basket-dropdown-footer__title">Итого:</h5>
								<strong className="basket-dropdown-footer__price">{sumBasket && sumBasket} руб.</strong>
							</li>
							<li className="basket-dropdown-footer__item">
								<h5 className="basket-dropdown-footer__title">Налог 5%:</h5>
								<strong className="basket-dropdown-footer__price">{Math.round(sumBasket && sumBasket / 100 * 5)} руб.</strong>
							</li>
						</ul>
						<button className="basket-dropdown-footer__button button">
							<span className="button__text">Оформить заказ</span>
							<i className="button__icon button__icon_right">
								<img src="./img/icon/arrow.svg" alt="" />
							</i>
						</button>
					</div>
				}
			</div>
		</li >
	)
}

export default MyBasket;