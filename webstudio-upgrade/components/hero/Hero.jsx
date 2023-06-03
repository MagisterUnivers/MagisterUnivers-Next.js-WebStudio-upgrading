import { useState } from 'react';
import { createPortal } from 'react-dom';
import OrderModal from '@components/OrderModal';

const Hero = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<section className="hero section">
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
	);
};

export default Hero;
