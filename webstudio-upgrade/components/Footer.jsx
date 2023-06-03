const Footer = () => {
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
		</footer>
	);
};

export default Footer;
