import React from "react";
import { Link } from "react-router-dom";

import MyBasket from "./MyBasket";

function MyHeader({ myBasketList = [], removeFromBasket }) {
	const [scroll, setScroll] = React.useState(0);

	React.useEffect(() => {
		window.addEventListener("scroll", function () {
			if (window.innerWidth > 1024.2) {
				setScroll(window.scrollY);
			}
		});
	}, []);

	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="_container">
					<div className="header__body" style={scroll > 10 ? { minHeight: "100px" } : null}>
						<Link className="header__logo header-logo" to="/">
							<img className="header-logo__image" src="img/logo.svg" alt="Логотип" />
							<div className="header-logo__row">
								<h2 className="header-logo__title">React Sneaker</h2>
								<p className="header-logo__text">Магазин лучших кроссовок</p>
							</div>
						</Link>
						<ul className="header__actions header-actions">
							<MyBasket myBasketList={myBasketList} removeFromBasket={removeFromBasket} />
							<li className="header-actions__favorite header-favorite header-actions__item">
								<Link className="header-favorite__link" to="/favorites">
									<img src="img/icon/favorite.svg" alt="Избранные" />
								</Link>
							</li>
							<li className="header-actions__profile header-profile header-actions__item">
								<Link className="header-profile__link" to="/profile">
									<img src="img/icon/user.svg" alt="Профиль" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default MyHeader;