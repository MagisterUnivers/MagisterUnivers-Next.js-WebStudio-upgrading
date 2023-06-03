import Image from 'next/image';
import Link from 'next/link';
import projects from '../components/projects/projects';

const Portfolio = () => {
	return (
		<>
			<section className="benefits section">
				<div className="benefits__gallery container">
					<h1 className="visually-hidden">Фильтр и Проекты</h1>
					<ul className="benefits__gallery-list">
						<li className="benefits__gallery-item">
							<button type="button" className="btn secondary-btn">
								Усі
							</button>
						</li>
						<li className="benefits__gallery-item">
							<button type="button" className="button secondary-btn">
								Веб-сайти
							</button>
						</li>
						<li className="benefits__gallery-item">
							<button type="button" className="button secondary-btn">
								Додатки
							</button>
						</li>
						<li className="benefits__gallery-item">
							<button type="button" className="button secondary-btn">
								Дизайн
							</button>
						</li>
						<li className="benefits__gallery-item">
							<button type="button" className="button secondary-btn">
								Маркетинг
							</button>
						</li>
					</ul>
					<ul className="gallery-list">
						{projects.map((project) => (
							<li key={project.number} className="gallery-list__item">
								<Link legacyBehavior href="/portfolio">
									<a className="gallery-list__link">
										<div className="gallery-list__hiddentext">
											<Image
												className="gallery-list__item-img"
												srcSet={`
					/portfoliogallery/img-${project.number}_354.jpg 354w,
					/portfoliogallery/img-${project.number}_370.jpg 370w,
					/portfoliogallery/img-${project.number}_450.jpg 450w,
					/portfoliogallery/img-${project.number}_708.jpg 708w,
					/portfoliogallery/img-${project.number}_740.jpg 740w,
					/portfoliogallery/img-${project.number}_900.jpg 900w
				`}
												sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
												src={`/portfoliogallery/img-${project.number}_450.jpg`}
												alt={`${project.alt}`}
												width="900"
												height="100"
											/>
											<div className="gallery-list__hiddentext-second">
												<p className="gallery-list__hiddensubtext">
													{`${project.subtitle}`}
												</p>
											</div>
										</div>

										<div className="gallery-list__item-content">
											<h2 className="gallery-list__item-title">{`${project.title}`}</h2>
											<p className="gallery-list__item-subtitle">{`${project.typeof}`}</p>
										</div>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
