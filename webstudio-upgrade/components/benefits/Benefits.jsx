import benefits from './Benefits';

const Benefits = () => {
	return (
		<section className="section">
			<h2 className="visually-hidden">Наши преимущества</h2>
			<div className="container features">
				<ul className="features__list">
					{benefits.map((bonus) => (
						<li key={`${bonus.number}`} className="features__list-item">
							<div className="benefits__icon">
								<svg className="benefits__icon-svg" width="70" height="70">
									<use xlinkHref={`${bonus.svg}`} />
								</svg>
							</div>
							<h3 className="feature__list-title">{`${bonus.title}`}</h3>
							<p className="feature__list-text">{`${bonus.subtitle}`}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Benefits;
