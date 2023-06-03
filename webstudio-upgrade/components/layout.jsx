import Header from '@components/Header';
import Footer from './Footer';

const metadata = {
	title: 'WebStudio',
	description: 'WebStudio project'
};

export default function RootLayout({ children }) {
	return (
		<>
			{' '}
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
