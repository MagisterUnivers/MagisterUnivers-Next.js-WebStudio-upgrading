const Footer = () => {
	const CloseButton = forwardRef((props, ref) => {
		return (
			<button
				ref={ref}
				onClick={props.onClick}
				className="menu-toggle js-close-menu close-data-modal"
				aria-label="Кнопка для закриття меню"
			>
				<svg className="menu-toggle__icon" width="40" height="40">
					<use xlinkHref="/icons.svg#icon-close_40px"></use>
				</svg>
			</button>
		);
	});

	return (
		<footer className="footer">
			<div className="fotlower-box container">
				<div className="footer-box__sidebar">
					<a className="logo__footer logo__size" href="./index.html">
						Web<span className="logo__secondary">Studio</span>
					</a>

					<address className="footer-address">
						<ul className="footer-address__list">
							<li className="footer-address__list-item">
								<a
									className="footer-address__list-link primary-color"
									href="https://www.google.ru/search?hl=ru&q=%D0%BC.+%D0%9A%D0%B8%D1%97%D0%B2%2C+%D0%BF%D1%80-%D1%82+%D0%9B%D0%B5%D1%81%D1%96+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%BA%D0%B8%2C+26#м"
								>
									м. Київ, пр-т Лесі Українки, 26
								</a>
							</li>
							<li className="footer-address__list-item">
								<a
									className="footer-address__list-link"
									href="mailto:info@devstudio.com"
								>
									info@devstudio.com
								</a>
							</li>
							<li className="footer-address__list-item">
								<a
									className="footer-address__list-link"
									href="tel:+380961111111"
								>
									+38 096 111 11 11
								</a>
							</li>
						</ul>
					</address>
				</div>
				<div className="footer__socials">
					<h3 className="footer__uppertitle">приєднуйтесь</h3>
					<ul className="footer__socials-list">
						<li className="footer__socials-item">
							<a
								className="footer__socials-link"
								href="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="footer__socials-icon" width="20" height="20">
									<use xlinkHref="/icons.svg#icon-instagram"></use>
								</svg>
							</a>
						</li>
						<li className="footer__socials-item">
							<a
								className="footer__socials-link"
								href="https://twitter.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="footer__socials-icon" width="20" height="20">
									<use xlinkHref="/icons.svg#icon-twitter"></use>
								</svg>
							</a>
						</li>
						<li className="footer__socials-item">
							<a
								className="footer__socials-link"
								href="https://www.facebook.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="footer__socials-icon" width="20" height="20">
									<use xlinkHref="/icons.svg#icon-facebook"></use>
								</svg>
							</a>
						</li>
						<li className="footer__socials-item">
							<a
								className="footer__socials-link"
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="footer__socials-icon" width="20" height="20">
									<use xlinkHref="/icons.svg#icon-linkedin"></use>
								</svg>
							</a>
						</li>
					</ul>
				</div>
				<div className="subscribe-news-wrapper">
					<h3 className="footer__uppertitle">Підпишіться на розсилку</h3>
					<form className="subscribe-form-wrapper">
						<input
							className="input-field"
							type="email"
							name="subscribe_mail_field"
							placeholder="E-mail"
							required
						/>
						<button className="subscribe-button" type="submit">
							Підписатися
							<svg className="send-button-icon" width="24" height="24">
								<use xlinkHref="/icons.svg#icon-icon-send"></use>
							</svg>
						</button>
					</form>
				</div>
			</div>

			<div data-modal className="backdrop is-hidden">
				<div className="modal">
					<button data-modal-close className="modal__btn">
						<svg className="modal__icon" width="18" height="18">
							<use xlinkHref="/icons.svg#icon-close-black-18dp"></use>
						</svg>
					</button>
					<strong className="modal-title">
						Залиште свої дані, ми вам передзвонимо
					</strong>
					<form className="modal-form">
						<label className="modal-label">
							<span className="modal-comment">Ім'я</span>
							<input
								className="input-field"
								type="text"
								name="modal_name_field"
								required
							/>
							<svg className="modal-icon" width="18" height="18">
								<use xlinkHref="/icons.svg#icon-person-black-18dp-1"></use>
							</svg>
						</label>

						<label className="modal-label">
							<span className="modal-comment">Телефон</span>
							<input
								className="input-field"
								type="tel"
								name="modal_tel_field"
								required
							/>
							<svg className="modal-icon" width="18" height="18">
								<use xlinkHref="/icons.svg#icon-phone-black-18dp-1"></use>
							</svg>
						</label>

						<label className="modal-label">
							<span className="modal-comment">Поштa</span>
							<input
								className="input-field"
								type="email"
								name="modal_mail_field"
								required
							/>
							<svg className="modal-icon" width="18" height="18">
								<use xlinkHref="/icons.svg#icon-email-black-18dp-1"></use>
							</svg>
						</label>

						<label className="modal-label">
							<span className="modal-comment">Коментар</span>
							<textarea
								className="modal-comment-textarea"
								placeholder="Введіть текст"
								name="modal_commentary_field"
							></textarea>
						</label>

						<label className="modal-label-checkbox">
							<input className="modal-checkbox" type="checkbox" required />
							<span className="checkbox-custom">
								<svg className="checkbox-icon" width="18" height="18">
									<use xlinkHref="/icons.svg#icon-VectorCheck-3"></use>
								</svg>
							</span>

							<span className="modal-label__agreement">
								Погоджуюся з розсилкою та приймаю
							</span>
							<a
								className="modal-label-agreement__link"
								href="https://www.instagram.com/"
							>
								Умови договору
							</a>
						</label>

						<button className="button primary modal-btn-submit" type="submit">
							Відправити
						</button>
					</form>
				</div>
			</div>

			<div className="menu-container js-menu-container" id="mobile-menu">
				<CloseButton ref={closeMenuBtnRef} onClick={toggleMenu} />

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
						<a
							className="contacts-mobile__link"
							href="mailto:info@devstudio.com"
						>
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
		</footer>
	);
};

export default Footer;
