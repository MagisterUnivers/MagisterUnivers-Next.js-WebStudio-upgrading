import whatWeDo from './WhatWeDo';
import Image from 'next/image';

const WhatWeDo = () => {
	return (
		<section
			className="section whatwedo"
			data-aos="zoom-in"
			data-aos-duration="2000"
		>
			<div className="desc-box container">
				<h2 className="subject">Чим ми займаємося</h2>
				<ul className="desc-box__list">
					{whatWeDo.map((job) => (
						<li key={`${job.number}`} className="desc-box__list-item">
							<Image
								src={`${job.src}`}
								alt={`${job.alt}`}
								width={370}
								height={294}
							/>
							<p className="desc-box__subtext">{`${job.subtitle}`}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default WhatWeDo;
