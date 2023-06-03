import Image from 'next/image';

const portfolio = () => {
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
						<li className="gallery-list__item">
							<a className="gallery-list__link" href="./portfolio.html">
								<div className="gallery-list__hiddentext">
									<Image
										className="gallery-list__item-img"
										srcSet="
											/portfoliogallery/img-1_354.jpg 354w,
											/portfoliogallery/img-1_370.jpg 370w,
											/portfoliogallery/img-1_450.jpg 450w,
											/portfoliogallery/img-1_708.jpg 708w,
											/portfoliogallery/img-1_740.jpg 740w,
											/portfoliogallery/img-1_900.jpg 900w
										"
										sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
										src="/portfoliogallery/img-1_450.jpg"
										alt="technocrack"
										width="900"
										height="100"
									/>
									<div className="gallery-list__hiddentext-second">
										<p className="gallery-list__hiddensubtext">
											Ресурс пропонує комплексні пропозиції з різним рівнем
											функціоналу та сервісів. Все це дозволить відвідувачу
											отримати вичерпні відомості про компанію чи приватну
											особу.
										</p>
									</div>
								</div>

								<div className="gallery-list__item-content">
									<h2 className="gallery-list__item-title">Технокряк</h2>
									<p className="gallery-list__item-subtitle">Веб-сайт</p>
								</div>
							</a>
						</li>
						<li className="gallery-list__item">
							<a className="gallery-list__link" href="./portfolio.html">
								<div className="gallery-list__hiddentext">
									<Image
										className="gallery-list__item-img"
										srcSet="
											/portfoliogallery/img-2_354.jpg 354w,
											/portfoliogallery/img-2_370.jpg 370w,
											/portfoliogallery/img-2_450.jpg 450w,
											/portfoliogallery/img-2_708.jpg 708w,
											/portfoliogallery/img-2_740.jpg 740w,
											/portfoliogallery/img-2_900.jpg 900w
										"
										sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
										src="/portfoliogallery/img-2_450.jpg"
										alt="basketball"
										width="900"
										height="100"
									/>
									<div className="gallery-list__hiddentext-second">
										<p className="gallery-list__hiddensubtext">
											Ресурс пропонує комплексні пропозиції з різним рівнем
											функціоналу та сервісів. Все це дозволить відвідувачу
											отримати вичерпні відомості про компанію чи приватну
											особу.
										</p>
									</div>
								</div>
								<div className="gallery-list__item-content">
									<h2 className="gallery-list__item-title">
										Постер New Orlean vs Golden Star
									</h2>
									<p className="gallery-list__item-subtitle">Дизайн</p>
								</div>
							</a>
						</li>
						<li className="gallery-list__item">
							<a className="gallery-list__link" href="./portfolio.html">
								<div className="gallery-list__hiddentext">
									<Image
										className="gallery-list__item-img"
										srcSet="
											/portfoliogallery/img-1_354.jpg 354w,
											/portfoliogallery/img-3_370.jpg 370w,
											/portfoliogallery/img-3_450.jpg 450w,
											/portfoliogallery/img-3_708.jpg 708w,
											/portfoliogallery/img-3_740.jpg 740w,
											/portfoliogallery/img-3_900.jpg 900w
										"
										sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
										src="/portfoliogallery/img-3_450.jpg"
										alt="seafood"
										width="900"
										height="100"
									/>
									<div className="gallery-list__hiddentext-second">
										<p className="gallery-list__hiddensubtext">
											Ресурс пропонує комплексні пропозиції з різним рівнем
											функціоналу та сервісів. Все це дозволить відвідувачу
											отримати вичерпні відомості про компанію чи приватну
											особу.
										</p>
									</div>
								</div>
								<div className="gallery-list__item-content">
									<h2 className="gallery-list__item-title">Ресторан Seafood</h2>
									<p className="gallery-list__item-subtitle">Додаток</p>
								</div>
							</a>
						</li>
						<li className="gallery-list__item">
							<a className="gallery-list__link" href="./portfolio.html">
								<div className="gallery-list__hiddentext">
									<Image
										className="gallery-list__item-img"
										srcSet="
											/portfoliogallery/img-4_354.jpg 354w,
											/portfoliogallery/img-4_370.jpg 370w,
											/portfoliogallery/img-4_450.jpg 450w,
											/portfoliogallery/img-4_708.jpg 708w,
											/portfoliogallery/img-4_740.jpg 740w,
											/portfoliogallery/img-4_900.jpg 900w
										"
										sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
										src="/portfoliogallery/img-4_450.jpg"
										alt="primeproject"
										width="900"
										height="100"
									/>
									<div className="gallery-list__hiddentext-second">
										<p className="gallery-list__hiddensubtext">
											Ресурс пропонує комплексні пропозиції з різним рівнем
											функціоналу та сервісів. Все це дозволить відвідувачу
											отримати вичерпні відомості про компанію чи приватну
											особу.
										</p>
									</div>
								</div>
								<div className="gallery-list__item-content">
									<h2 className="gallery-list__item-title">Проєкт Prime</h2>
									<p className="gallery-list__item-subtitle">Маркетинг</p>
								</div>
							</a>
						</li>
						<li className="gallery-list__item">
							<a className="gallery-list__link" href="./portfolio.html">
								<div className="gallery-list__hiddentext">
									<Image
										className="gallery-list__item-img"
										srcSet="
											/portfoliogallery/img-5_354.jpg 354w,
											/portfoliogallery/img-5_370.jpg 370w,
											/portfoliogallery/img-5_450.jpg 450w,
											/portfoliogallery/img-5_708.jpg 708w,
											/portfoliogallery/img-5_740.jpg 740w,
											/portfoliogallery/img-5_900.jpg 900w
										"
										sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
										src="/portfoliogallery/img-5_450.jpg"
										alt="projectboxes"
										width="900"
										height="100"
									/>
									<div className="gallery-list__hiddentext-second">
										<p className="gallery-list__hiddensubtext">
											Ресурс пропонує комплексні пропозиції з різним рівнем
											функціоналу та сервісів. Все це дозволить відвідувачу
											отримати вичерпні відомості про компанію чи приватну
											особу.
										</p>
									</div>
								</div>
								<div className="gallery-list__item-content">
									<h2 className="gallery-list__item-title">Проєкт Boxes</h2>
									<p className="gallery-list__item-subtitle">Додаток</p>
								</div>
							</a>
						</li>
						<li className="gallery-list__item">
							<a className="gallery-list__link" href="./portfolio.html">
								<div className="gallery-list__hiddentext">
									<Image
										className="gallery-list__item-img"
										srcSet="
											/portfoliogallery/img-6_354.jpg 354w,
											/portfoliogallery/img-6_370.jpg 370w,
											/portfoliogallery/img-6_450.jpg 450w,
											/portfoliogallery/img-6_708.jpg 708w,
											/portfoliogallery/img-6_740.jpg 740w,
											/portfoliogallery/img-6_900.jpg 900w
										"
										sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
										src="/portfoliogallery/img-6_450.jpg"
										alt="inspiration"
										width="900"
										height="100"
									/>
									<div className="gallery-list__hiddentext-second">
										<p className="gallery-list__hiddensubtext">
											Ресурс пропонує комплексні пропозиції з різним рівнем
											функціоналу та сервісів. Все це дозволить відвідувачу
											отримати вичерпні відомості про компанію чи приватну
											особу.
										</p>
									</div>
								</div>
								<div className="gallery-list__item-content">
									<h2 className="gallery-list__item-title">
										Inspiration has no Borders
									</h2>
									<p className="gallery-list__item-subtitle">Веб-сайт</p>
								</div>
							</a>
						</li>
						<li className="gallery-list__item">
							<a className="gallery-list__link" href="./portfolio.html">
								<div className="gallery-list__hiddentext">
									<Image
										className="gallery-list__item-img"
										srcSet="
											/portfoliogallery/img-7_354.jpg 354w,
											/portfoliogallery/img-7_370.jpg 370w,
											/portfoliogallery/img-7_450.jpg 450w,
											/portfoliogallery/img-7_708.jpg 708w,
											/portfoliogallery/img-7_740.jpg 740w,
											/portfoliogallery/img-7_900.jpg 900w
										"
										sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
										src="/portfoliogallery/img-7_450.jpg"
										alt="limitededition"
										width="900"
										height="100"
									/>
									<div className="gallery-list__hiddentext-second">
										<p className="gallery-list__hiddensubtext">
											Ресурс пропонує комплексні пропозиції з різним рівнем
											функціоналу та сервісів. Все це дозволить відвідувачу
											отримати вичерпні відомості про компанію чи приватну
											особу.
										</p>
									</div>
								</div>
								<div className="gallery-list__item-content">
									<h2 className="gallery-list__item-title">
										Видання Limited Edition
									</h2>
									<p className="gallery-list__item-subtitle">Дизайн</p>
								</div>
							</a>
						</li>
						<li className="gallery-list__item">
							<a className="gallery-list__link" href="./portfolio.html">
								<div className="gallery-list__hiddentext">
									<Image
										className="gallery-list__item-img"
										srcSet="
											/portfoliogallery/img-8_354.jpg 354w,
											/portfoliogallery/img-8_370.jpg 370w,
											/portfoliogallery/img-8_450.jpg 450w,
											/portfoliogallery/img-8_708.jpg 708w,
											/portfoliogallery/img-8_740.jpg 740w,
											/portfoliogallery/img-8_900.jpg 900w
										"
										sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
										src="/portfoliogallery/img-8_450.jpg"
										alt="labproject"
										width="900"
										height="100"
									/>
									<div className="gallery-list__hiddentext-second">
										<p className="gallery-list__hiddensubtext">
											Ресурс пропонує комплексні пропозиції з різним рівнем
											функціоналу та сервісів. Все це дозволить відвідувачу
											отримати вичерпні відомості про компанію чи приватну
											особу.
										</p>
									</div>
								</div>
								<div className="gallery-list__item-content">
									<h2 className="gallery-list__item-title">Проєкт LAB</h2>
									<p className="gallery-list__item-subtitle">Маркетинг</p>
								</div>
							</a>
						</li>
						<li className="gallery-list__item">
							<a className="gallery-list__link" href="./portfolio.html">
								<div className="gallery-list__hiddentext">
									<Image
										className="gallery-list__item-img"
										srcSet="
											/portfoliogallery/img-9_354.jpg 354w,
											/portfoliogallery/img-9_370.jpg 370w,
											/portfoliogallery/img-9_450.jpg 450w,
											/portfoliogallery/img-9_708.jpg 708w,
											/portfoliogallery/img-9_740.jpg 740w,
											/portfoliogallery/img-9_900.jpg 900w
										"
										sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
										src="/portfoliogallery/img-9_450.jpg"
										alt="business"
										width="900"
										height="100"
									/>
									<div className="gallery-list__hiddentext-second">
										<p className="gallery-list__hiddensubtext">
											Ресурс пропонує комплексні пропозиції з різним рівнем
											функціоналу та сервісів. Все це дозволить відвідувачу
											отримати вичерпні відомості про компанію чи приватну
											особу.
										</p>
									</div>
								</div>
								<div className="gallery-list__item-content">
									<h2 className="gallery-list__item-title">Growing Business</h2>
									<p className="gallery-list__item-subtitle">Додаток</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default portfolio;
