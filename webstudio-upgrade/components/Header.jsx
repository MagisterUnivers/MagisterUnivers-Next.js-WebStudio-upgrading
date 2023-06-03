import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MobileMenu from './Modal';
import { createPortal } from 'react-dom';
import headerScroll from '@js/header-scroll';

const Header = () => {
	const router = useRouter();

	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleScroll = headerScroll();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className="header">
			<div className="container header__box">
				<nav className="site-nav">
					<a className="logo logo__size" href="/">
						Web<span className="logo-primary">Studio</span>
					</a>
					<button
						className="header__btn-menu js-open-menu open-data-modal"
						type="button"
						onClick={toggleMenu}
					>
						<svg className="header__menu-icon" width="40" height="40">
							<use xlinkHref="/icons.svg#icon-menu_40px" />
						</svg>
					</button>
					{isMenuOpen &&
						createPortal(
							<MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />,
							document.getElementById('modal-data')
						)}

					<ul className="site-nav__list">
						<li
							className={`site-nav__list-item ${
								router.pathname === '/' ? 'site-nav__list-current' : ''
							}`}
						>
							<Link legacyBehavior href="/">
								<a className="site-nav__list-link">Студія</a>
							</Link>
						</li>
						<li
							className={`site-nav__list-item ${
								router.pathname === '/portfolio' ? 'site-nav__list-current' : ''
							}`}
						>
							<Link legacyBehavior href="/portfolio">
								<a className="site-nav__list-link">Портфоліо</a>
							</Link>
						</li>
						<li
							className={`site-nav__list-item ${
								router.pathname === '/contacts' ? 'site-nav__list-current' : ''
							}`}
						>
							<Link legacyBehavior href="/contacts">
								<a className="site-nav__list-link">Контакти</a>
							</Link>
						</li>
					</ul>
				</nav>
				<ul className="header-contacts">
					<li className="header-contacts__item">
						<a
							className="header-contacts__item-link"
							href="mailto:info@devstudio.com"
						>
							<svg className="email-icon" width="16" height="12">
								<use xlinkHref="/icons.svg#icon-Mail" />
							</svg>
							info@devstudio.com
						</a>
					</li>
					<li className="header-contacts__item">
						<a className="header-contacts__item-link" href="tel:+380961111111">
							<svg className="phone-icon" width="10" height="16">
								<use xlinkHref="/icons.svg#icon-Phone" />
							</svg>
							+38 096 111 11 11
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
