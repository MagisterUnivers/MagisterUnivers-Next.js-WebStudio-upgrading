import OrderModal from '@components/OrderModal';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Home() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<section className="hero section">
				{/* <Image src="/Hero photo 1.jpg" alt="" /> */}
				<div className="container hero__box">
					<h1 className="hero-box__title">
						Ефективні рішення для вашого бізнесу
					</h1>
					<button
						data-modal-open
						onClick={toggleMenu}
						type="button"
						className="hero-box__primary-btn open-data-modal"
					>
						Замовити послугу
					</button>
					{isMenuOpen &&
						createPortal(
							<OrderModal isOpen={isMenuOpen} toggleMenu={toggleMenu} />,
							document.getElementById('modal-data')
						)}
				</div>
			</section>

			<section className="section">
				<h2 className="visually-hidden">Наши преимущества</h2>
				<div className="container features">
					<ul className="features__list">
						<li className="features__list-item">
							<div className="benefits__icon">
								<svg className="benefits__icon-svg" width="70" height="70">
									<use xlinkHref="/icons.svg#icon-antenna-2"></use>
								</svg>
							</div>
							<h3 className="feature__list-title">УВАГА ДО ДЕТАЛЕЙ</h3>
							<p className="feature__list-text">
								Ідейні міркування, і навіть початок повсякденної роботи з
								формування позиції.
							</p>
						</li>
						<li className="features__list-item">
							<div className="benefits__icon">
								<svg className="benefits__icon-svg" width="70" height="70">
									<use xlinkHref="/icons.svg#icon-clock-2"></use>
								</svg>
							</div>
							<h3 className="feature__list-title">ПУНКТУАЛЬНІСТЬ</h3>
							<p className="feature__list-text">
								Завдання організації, особливо рамки і місце навчання кадрів
								тягне у себе.
							</p>
						</li>
						<li className="features__list-item">
							<div className="benefits__icon">
								<svg className="benefits__icon-svg" width="70" height="70">
									<use xlinkHref="/icons.svg#icon-diagram-2"></use>
								</svg>
							</div>
							<h3 className="feature__list-title">ПЛАНУВАННЯ</h3>
							<p className="feature__list-text">
								Так само консультація з широким активом значною мірою зумовлює.
							</p>
						</li>
						<li className="features__list-item">
							<div className="benefits__icon">
								<svg className="benefits__icon-svg" width="70" height="70">
									<use xlinkHref="/icons.svg#icon-astronaut-2"></use>
								</svg>
							</div>
							<h3 className="feature__list-title">СУЧАСНІ ТЕХНОЛОГІЇ</h3>
							<p className="feature__list-text">
								Значимість цих проблем настільки очевидна, що реалізація
								планових завдань.
							</p>
						</li>
					</ul>
				</div>
			</section>

			<section className="section whatwedo">
				<div className="desc-box container">
					<h2 className="subject">Чим ми займаємося</h2>
					<ul className="desc-box__list">
						<li className="desc-box__list-item">
							<Image
								src="/desktop-add1.jpg"
								alt="programming"
								width={370}
								height={294}
							/>
							<p className="desc-box__subtext">Десктопні додатки</p>
						</li>
						<li className="desc-box__list-item">
							<Image
								src="/mobile-app1.jpg"
								alt="frontend"
								width={370}
								height={294}
							/>
							<p className="desc-box__subtext">Мобільні додатки</p>
						</li>
						<li className="desc-box__list-item">
							<Image
								src="/desicion1.jpg"
								alt="design"
								width={370}
								height={294}
							/>
							<p className="desc-box__subtext">Дизайнерські рішення</p>
						</li>
					</ul>
				</div>
			</section>

			<section className="section teammembers">
				<div className="author container">
					<h2 className="subject">Наша команда</h2>
					<ul className="author__list">
						<li className="author__list-item">
							<Image
								className="userpic"
								srcSet="
								/img-1_270.jpg 270w,
									/img-1_354.jpg 354w,
									/img-1_450.jpg 450w,
									/img-1_540.jpg 540w,
									/img-1_708.jpg 708w,
									/img-1_900.jpg 900w
								"
								sizes="(min-width: 1199.98px) 270px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
								src="/img-1_450.jpg"
								alt="Member photo 1"
								width="450"
								height="460"
							/>
							<div className="author__list-content">
								<h3 className="author__list-title">Ігор Дем'яненко</h3>
								<p className="author__list-text">Product Designer</p>
								<ul className="socials__list">
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.instagram.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-instagram" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://twitter.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-twitter" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.facebook.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-facebook" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.linkedin.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-linkedin" />
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="author__list-item">
							<Image
								srcSet="
									/img-2_270.jpg 270w,
									/img-2_354.jpg 354w,
									/img-2_450.jpg 450w,
									/img-2_540.jpg 540w,
									/img-2_708.jpg 708w,
									/img-2_900.jpg 900w
								"
								sizes="(min-width: 1199.98px) 270px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
								className="userpic"
								src="/img-2_450.jpg"
								width="450"
								height="460"
								alt="Member photo 2"
							/>
							<div className="author__list-content">
								<h3 className="author__list-title">Ольга Рєпіна</h3>
								<p className="author__list-text">Frontend Developer</p>
								<ul className="socials__list">
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.instagram.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-instagram" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://twitter.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-twitter" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.facebook.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-facebook" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.linkedin.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-linkedin" />
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="author__list-item">
							<Image
								srcSet="
									/img-3_270.jpg 270w,
									/img-3_354.jpg 354w,
									/img-3_450.jpg 450w,
									/img-3_540.jpg 540w,
									/img-3_708.jpg 708w,
									/img-3_900.jpg 900w
								"
								sizes="(min-width: 1199.98px) 270px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
								className="userpic"
								src="/img-3_450.jpg"
								alt="Member photo 3"
								width="450"
								height="460"
							/>
							<div className="author__list-content">
								<h3 className="author__list-title">Микола Тарасов</h3>
								<p className="author__list-text">Marketing</p>
								<ul className="socials__list">
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.instagram.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-instagram" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://twitter.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-twitter" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.facebook.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-facebook" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.linkedin.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-linkedin" />
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="author__list-item">
							<Image
								className="userpic"
								srcSet="
									/img-4_270.jpg 270w,
									/img-4_354.jpg 354w,
									/img-4_450.jpg 450w,
									/img-4_540.jpg 540w,
									/img-4_708.jpg 708w,
									/img-4_900.jpg 900w
								"
								sizes="(min-width: 1199.98px) 270px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
								src="/img-4_450.jpg"
								alt="Member photo 4"
								width="450"
								height="460"
							/>
							<div className="author__list-content">
								<h3 className="author__list-title">Михайло Єрмаков</h3>
								<p className="author__list-text">UI Designer</p>
								<ul className="socials__list">
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.instagram.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-instagram" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://twitter.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-twitter" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.facebook.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-facebook" />
											</svg>
										</a>
									</li>
									<li className="socials__list-item">
										<a
											className="socials__list-link"
											href="https://www.linkedin.com/"
											target="_blank"
											rel="noreferrer noopener"
										>
											<svg
												className="socials__item-icon"
												width="20"
												height="20"
											>
												<use xlinkHref="/icons.svg#icon-linkedin" />
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className="section">
				<h2 className="subject clients">Постійні клієнти</h2>
				<div className="container">
					<ul className="clients__list">
						<li className="clients__list-item">
							<a
								className="clients__list-link"
								href="/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="clients__item-icon" width="106" height="60">
									<use xlinkHref="/icons.svg#icon-Logo" />
								</svg>
							</a>
						</li>
						<li className="clients__list-item">
							<a
								className="clients__list-link"
								href="/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="clients__item-icon" width="106" height="60">
									<use xlinkHref="/icons.svg#icon-Logo-2" />
								</svg>
							</a>
						</li>
						<li className="clients__list-item">
							<a
								className="clients__list-link"
								href="/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="clients__item-icon" width="106" height="60">
									<use xlinkHref="/icons.svg#icon-Logo-3" />
								</svg>
							</a>
						</li>
						<li className="clients__list-item">
							<a
								className="clients__list-link"
								href="/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="clients__item-icon" width="106" height="60">
									<use xlinkHref="/icons.svg#icon-Logo-4" />
								</svg>
							</a>
						</li>
						<li className="clients__list-item">
							<a
								className="clients__list-link"
								href="/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="clients__item-icon" width="106" height="60">
									<use xlinkHref="/icons.svg#icon-Logo-5" />
								</svg>
							</a>
						</li>
						<li className="clients__list-item">
							<a
								className="clients__list-link"
								href="/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<svg className="clients__item-icon" width="106" height="60">
									<use xlinkHref="/icons.svg#icon-Logo-6" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}
