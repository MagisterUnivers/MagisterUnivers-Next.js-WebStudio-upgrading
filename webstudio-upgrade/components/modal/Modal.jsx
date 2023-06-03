import { useEffect, useRef } from 'react';
import modal from './Modal';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileMenu = ({ isOpen, toggleMenu, onLinkClick }) => {
	const mobileMenu = useRef(null);
	const router = useRouter();

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
					<use xlinkHref="/icons.svg#icon-close_40px" />
				</svg>
			</button>

			<ul className="mobile-menu">
				<li>
					<Link legacyBehavior href="/">
						<a
							className={`mobile-menu__link ${
								router.pathname === '/' ? 'mobile-menu__link--current link' : ''
							}`}
							onClick={onLinkClick}
						>
							<span>Студія</span>
						</a>
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/portfolio">
						<a
							className={`mobile-menu__link ${
								router.pathname === '/portfolio'
									? 'mobile-menu__link--current link'
									: ''
							}`}
							onClick={onLinkClick}
						>
							<span>Портфоліо</span>
						</a>
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="./">
						<a className="mobile-menu__link link" onClick={onLinkClick}>
							<span>Контакти</span>
						</a>
					</Link>
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
				{modal.map((social) => (
					<li key={`${social.number}`} className="socials-mobile__item">
						<a
							className="socials-mobile__link"
							href={`${social.http}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							{`${social.title}`}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MobileMenu;
