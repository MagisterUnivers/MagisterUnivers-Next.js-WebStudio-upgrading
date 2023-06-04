import clients from './Clients';

const Clients = () => {
	return (
		<section className="section" data-aos="zoom-in" data-aos-duration="2000">
			<h2 className="subject clients">Постійні клієнти</h2>
			<div className="container">
				<ul className="clients__list">
					{clients.map((client) => (
						<li key={`${client.number}`} className="clients__list-item">
							<a
								className="clients__list-link"
								href="/"
								target="_blank"
								aria-label="Our clients companys"
								rel="noreferrer noopener"
							>
								<svg className="clients__item-icon" width="106" height="60">
									<use xlinkHref={`${client.svg}`} />
								</svg>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Clients;
