import { socialList, teamMembers } from './Teammembers';
import Image from 'next/image';

const Teammembers = () => {
	return (
		<section
			className="section teammembers"
			data-aos="zoom-in"
			data-aos-duration="2000"
		>
			<div className="author container">
				<h2 className="subject">Наша команда</h2>
				<ul className="author__list">
					{teamMembers.map((member) => (
						<li key={`${member.number}`} className="author__list-item">
							<Image
								srcSet={`
/img-${member.number}_270.jpg 270w,
/img-${member.number}_354.jpg 354w,
/img-${member.number}_450.jpg 450w,
/img-${member.number}_540.jpg 540w,
/img-${member.number}_708.jpg 708w,
/img-${member.number}_900.jpg 900w
`}
								sizes="(min-width: 1199.98px) 270px, (min-width: 767.98px) 354px, (min-width: 479.98px) 450px"
								className="userpic"
								src={`${member.src}`}
								width="450"
								height="460"
								alt={`${member.alt}`}
							/>
							<div className="author__list-content">
								<h3 className="author__list-title">{`${member.name}`}</h3>
								<p className="author__list-text">{`${member.position}`}</p>
								<ul className="socials__list">
									{socialList.map((social) => (
										<li key={`${social.number}`} className="socials__list-item">
											<a
												className="socials__list-link"
												href={`${social.http}`}
												target="_blank"
												rel="noreferrer noopener"
											>
												<svg
													className="socials__item-icon"
													width="20"
													height="20"
												>
													<use xlinkHref={`${social.src}`} />
												</svg>
											</a>
										</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Teammembers;
