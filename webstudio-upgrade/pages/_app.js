import '@styles/globals.css';
import RootLayout from '../components/layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			once: true
		});
	}, []);

	return (
		<RootLayout>
			{' '}
			<Component {...pageProps} />
		</RootLayout>
	);
}
