import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="description" content="WebStudio website portfolio" />
				<meta name="googlebot" content="index, follow" />
				<meta name="robots" content="index, follow" />
				<meta name="slurp" content="index, follow" />
				<meta
					name="keywords"
					content="Webstudio, WEBSTUDIO, webstudio, Studio, studio, STUDIO"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="author" content="Team Undefined - MagisterUnivers" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="../public/apple-touch-icon.png"
				/>
				<link href="/favicon-custom.ico" rel="icon" type="image/x-icon" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="../public/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="../public/favicon-16x16.png"
				/>
				<link rel="manifest" href="../public/site.webmanifest" />
				<link
					rel="mask-icon"
					href="../public/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
			</Head>
			<body id="modal-data" className="modal-data">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
