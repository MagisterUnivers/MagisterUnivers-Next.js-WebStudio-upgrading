const contacts = () => {
	return (
		<section className="section">
			<div className="container contacts__container">
				{' '}
				<iframe
					className="googleMap"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.779449740656!2d30.5383858!3d50.426580699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x57a4dffefec77da0!2z0LHRg9C7LiDQm9C10YHQuCDQo9C60YDQsNC40L3QutC4LCAyNiwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1685877771711!5m2!1sru!2sua"
					width="600"
					height="450"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
				<div className="contacts-info__container">
					{' '}
					<a className="logo__footer logo__size" href="./index.html">
						Web<span className="logo__contacts">Studio</span>
					</a>
					<address className="footer-address address-contacts">
						<ul className="footer-address__list">
							<li className="footer-address__list-item">
								<a
									className="footer-address__list-link adress"
									href="mailto:info@devstudio.com"
								>
									info@devstudio.com
								</a>
							</li>
							<li className="footer-address__list-item">
								<a
									className="footer-address__list-link adress"
									href="tel:+380961111111"
								>
									+38 096 111 11 11
								</a>
							</li>
						</ul>
					</address>
					<p className="contacts-subtitle">
						Мы веб-студия разработки, предлагающая качественные и инновационные
						решения для вашего онлайн присутствия. Наша команда состоит из
						опытных разработчиков, дизайнеров и маркетологов, которые стремятся
						помочь вам достичь ваших целей.
						<br />
						<br /> Мы специализируемся на создании веб-сайтов, разработке
						мобильных приложений, дизайне пользовательского интерфейса и
						маркетинговых стратегиях. Наш подход основан на тесном
						взаимодействии с клиентами, чтобы полностью понять их потребности и
						создать индивидуальные решения, которые подходят их бизнесу.
						<br />
						<br /> Мы стремимся к ведущим технологиям и следим за последними
						тенденциями в сфере веб-разработки. Наша цель - обеспечить вам
						конкурентное преимущество в онлайн-мире и помочь вам выделиться
						среди конкурентов.
						<br />
						<br /> Если вы ищете надежного партнера для вашего веб-проекта,
						обратитесь к нам. Мы будем рады помочь вам достичь успеха в
						онлайн-мире с нашими профессиональными услугами разработки.
					</p>
				</div>
			</div>
		</section>
	);
};

export default contacts;
