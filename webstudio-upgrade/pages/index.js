import Benefits from '@components/benefits/Benefits.jsx';
import Hero from '@components/hero/Hero.jsx';
import WhatWeDo from '@components/whatwedo/WhatWeDo.jsx';
import Teammembers from '@components/teammembers/Teammembers.jsx';
import Clients from '@components/clients/Clients.jsx';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>WebStudio</title>
			</Head>
			<Hero />
			<Benefits />
			<WhatWeDo />
			<Teammembers />
			<Clients />
		</>
	);
}
