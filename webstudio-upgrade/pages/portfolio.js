import Image from 'next/image';
import Link from 'next/link';
import projects, {
	filterCategories,
	filterTypeOf
} from '../components/projects/projects';
import { useState } from 'react';
import Head from 'next/head';

const Portfolio = () => {
	const [filterType, setFilterType] = useState('Усі');

	const handleFilterTypeChange = (type) => {
		setFilterType(type);
	};

	return (
		<>
			<Head>
				<title>WebStudio</title>
			</Head>
			<section
				className="benefits section"
				data-aos="fade-left"
				data-aos-duration="2000"
			>
				<div className="benefits__gallery container">
					<h1 className="visually-hidden">Фильтр и Проекты</h1>
					<ul
						className="benefits__gallery-list"
						data-aos="flip-right"
						data-aos-duration="2000"
					>
						{filterCategories.map((filter, index) => (
							<li key={index} className="benefits__gallery-item">
								<button
									type="button"
									className="btn secondary-btn"
									onClick={() => handleFilterTypeChange(filterTypeOf[index])}
								>
									{`${filter}`}
								</button>
							</li>
						))}
					</ul>
					<ul className="gallery-list">
						{projects
							.filter((project) => {
								if (filterType === 'Усі') return project;

								return project.typeof === filterType;
							})
							.map((project) => (
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
