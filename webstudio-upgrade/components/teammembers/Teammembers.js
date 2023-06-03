export const teamMembers = [
	{
		number: 1,
		src: '/img-1_450.jpg',
		position: 'Product Designer',
		name: `Ігор Дем'яненко`,
		alt: 'Member photo 1'
	},
	{
		number: 2,
		src: '/img-2_450.jpg',
		position: 'Frontend Developer',
		name: 'Ольга Рєпіна',
		alt: 'Member photo 2'
	},
	{
		number: 3,
		src: '/img-3_450.jpg',
		position: 'Marketing',
		name: 'Микола Тарасов',
		alt: 'Member photo 3'
	},
	{
		number: 4,
		src: '/img-4_450.jpg',
		position: 'UI Designer',
		name: 'Михайло Єрмаков',
		alt: 'Member photo 4'
	}
];

export const socialList = [
	{
		number: 1,
		http: 'https://www.instagram.com/',
		src: '/icons.svg#icon-instagram'
	},
	{
		number: 2,
		http: 'https://twitter.com/',
		src: '/icons.svg#icon-twitter'
	},
	{
		number: 3,
		http: 'https://www.facebook.com/',
		src: '/icons.svg#icon-facebook'
	},
	{
		number: 4,
		http: 'https://www.linkedin.com/',
		src: '/icons.svg#icon-linkedin'
	}
];

// {
// 	socialList.map((social) => (
// 		<li key={`${social.number}`} className="socials__list-item">
// 			<a
// 				className="socials__list-link"
// 				href={`${social.http}`}
// 				target="_blank"
// 				rel="noreferrer noopener"
// 			>
// 				<svg className="socials__item-icon" width="20" height="20">
// 					<use xlinkHref={`${social.src}`} />
// 				</svg>
// 			</a>
// 		</li>
// 	));
// }

// {
// 	teamMembers.map((member) => (
// 		<li key={`${member.number}`} className="author__list-item">
// 			<Image
// 				srcSet={`
// /img-${member.number}_270.jpg 270w,
// /img-${member.number}_354.jpg 354w,
// /img-${member.number}_450.jpg 450w,
// /img-${member.number}_540.jpg 540w,
// /img-${member.number}_708.jpg 708w,
// /img-${member.number}_900.jpg 900w
// `}
// 				sizes="(min-width: 1199.98px) 270px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
// 				className="userpic"
// 				src={`${member.src}`}
// 				width="450"
// 				height="460"
// 				alt={`${member.alt}`}
// 			/>
// 			<div className="author__list-content">
// 				<h3 className="author__list-title">{`${member.name}`}</h3>
// 				<p className="author__list-text">{`${member.position}`}</p>
// 				<ul className="socials__list">
// 					{socialList.map((social) => (
// 						<li key={`${social.number}`} className="socials__list-item">
// 							<a
// 								className="socials__list-link"
// 								href={`${social.http}`}
// 								target="_blank"
// 								rel="noreferrer noopener"
// 							>
// 								<svg className="socials__item-icon" width="20" height="20">
// 									<use xlinkHref={`${social.src}`} />
// 								</svg>
// 							</a>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</li>
// 	));
// }
