const OrderModal = ({ toggleMenu }) => {
	return (
		<div data-modal className="backdrop is-hidden">
			<div className="modal">
				<button data-modal-close className="modal__btn" onClick={toggleMenu}>
					<svg className="modal__icon" width="18" height="18">
						<use xlinkHref="/icons.svg#icon-close-black-18dp"></use>
					</svg>
				</button>
				<strong className="modal-title">
					Залиште свої дані, ми вам передзвонимо
				</strong>
				<form className="modal-form">
					<label className="modal-label">
						<span className="modal-comment">Ім&apos;я</span>
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
	);
};

export default OrderModal;
