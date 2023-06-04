const projects = [
	{
		number: 1,
		alt: 'technocrack',
		subtitle:
			'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
		title: 'Технокряк',
		typeof: 'Веб-сайт'
	},
	{
		number: 2,
		alt: 'basketball',
		subtitle:
			'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
		title: 'Постер New Orlean vs Golden Star',
		typeof: 'Дизайн'
	},
	{
		number: 3,
		alt: 'seafood',
		subtitle:
			'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
		title: 'Ресторан Seafood',
		typeof: 'Додаток'
	},
	{
		number: 4,
		alt: 'primeproject',
		subtitle:
			'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
		title: 'Проєкт Prime',
		typeof: 'Маркетинг'
	},
	{
		number: 5,
		alt: 'projectboxes',
		subtitle:
			'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
		title: 'Проєкт Boxes',
		typeof: 'Додаток'
	},
	{
		number: 6,
		alt: 'inspiration',
		subtitle:
			'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
		title: 'Inspiration has no Borders',
		typeof: 'Веб-сайт'
	},
	{
		number: 7,
		alt: 'limitededition',
		subtitle:
			'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
		title: 'Видання Limited Edition',
		typeof: 'Дизайн'
	},
	{
		number: 8,
		alt: 'labproject',
		subtitle:
			'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
		title: 'Проєкт LAB',
		typeof: 'Маркетинг'
	},
	{
		number: 9,
		alt: 'business',
		subtitle:
			'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
		title: 'Growing Business',
		typeof: 'Додаток'
	}
];

export const filterCategories = [
	'Усі',
	'Веб-сайти',
	'Додатки',
	'Дизайн',
	'Маркетинг'
];
export const filterTypeOf = [
	'Усі',
	'Веб-сайт',
	'Додаток',
	'Дизайн',
	'Маркетинг'
];

export default projects;

// {
// 	projects.map((project) => {
// 		<li className="gallery-list__item">
// 			<a className="gallery-list__link" href="./portfolio.html">
// 				<div className="gallery-list__hiddentext">
// 					<Image
// 						className="gallery-list__item-img"
// 						srcSet={`
// 					/portfoliogallery/img-${project.number}_354.jpg 354w,
// 					/portfoliogallery/img-${project.number}_370.jpg 370w,
// 					/portfoliogallery/img-${project.number}_450.jpg 450w,
// 					/portfoliogallery/img-${project.number}_708.jpg 708w,
// 					/portfoliogallery/img-${project.number}_740.jpg 740w,
// 					/portfoliogallery/img-${project.number}_900.jpg 900w
// 				`}
// 						sizes="(min-width: 1199.98px) 370px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
// 						src={`/portfoliogallery/img-${project.number}_450.jpg`}
// 						alt={`${project.alt}`}
// 						width="900"
// 						height="100"
// 					/>
// 					<div className="gallery-list__hiddentext-second">
// 						<p className="gallery-list__hiddensubtext">
// 							{`${project.subtitle}`}
// 						</p>
// 					</div>
// 				</div>

// 				<div className="gallery-list__item-content">
// 					<h2 className="gallery-list__item-title">{`${project.title}`}</h2>
// 					<p className="gallery-list__item-subtitle">{`${project.typeof}`}</p>
// 				</div>
// 			</a>
// 		</li>;
// 	});
// }

// {
// 	filterCategories.map((filter) => (
// 		<li className="benefits__gallery-item">
// 			<button
// 				type="button"
// 				className="btn secondary-btn"
// 				onClick={() => handleFilterTypeChange({ filter })}
// 			>
// 				{`${filter}`}
// 			</button>
// 		</li>
// 	));
// }
