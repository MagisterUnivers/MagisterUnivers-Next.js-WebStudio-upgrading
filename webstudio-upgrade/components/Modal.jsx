import { useState, useEffect, useRef } from 'react';

const MobileMenu = ({ isOpen, toggleMenu }) => {
	const mobileMenu = useRef(null);

	useEffect(() => {
		if (isOpen) {
			mobileMenu.current.classList.add('is-open');
		} else {
			mobileMenu.current.classList.remove('is-open');
		}
	}, [isOpen]);

	return (
		<div
			className="menu-container js-menu-container"
			ref={mobileMenu}
			id="mobile-menu"
		>
			<button
				onClick={toggleMenu}
				className="menu-toggle js-close-menu close-data-modal"
				aria-label="Кнопка для закриття меню"
			>
				<svg className="menu-toggle__icon" width="40" height="40">
					<use xlinkHref="/icons.svg#icon-close_40px"></use>
				</svg>
			</button>

			<ul className="mobile-menu">
				<li>
					<a
						className="mobile-menu__link mobile-menu__link--current link"
						href="./index.html"
					>
						Студія
					</a>
				</li>
				<li>
					<a className="mobile-menu__link link" href="./portfolio.html">
						Портфоліо
					</a>
				</li>
				<li>
					<a className="mobile-menu__link link" href="">
						Контакти
					</a>
				</li>
			</ul>
			<ul className="contacts-mobile">
				<li>
					<a
						className="contacts-mobile__link contacts-mobile__link--accent"
						href="tel:+380961111111"
					>
						+38 096 111 11 11
					</a>
				</li>
				<li>
					<a className="contacts-mobile__link" href="mailto:info@devstudio.com">
						info@devstudio.com
					</a>
				</li>
			</ul>
			<ul className="socials-mobile">
				<li className="socials-mobile__item">
					<a
						className="socials-mobile__link"
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram
					</a>
				</li>
				<li className="socials-mobile__item">
					<a
						className="socials-mobile__link"
						href="https://twitter.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
				</li>
				<li className="socials-mobile__item">
					<a
						className="socials-mobile__link"
						href="https://fb.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Facebook
					</a>
				</li>
				<li className="socials-mobile__item">
					<a
						className="socials-mobile__link"
						href="https://linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</li>
			</ul>
		</div>
	);
};

export default MobileMenu;
