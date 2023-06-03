import Header from '@components/Header';
import Footer from './Footer';

export const metadata = {
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
