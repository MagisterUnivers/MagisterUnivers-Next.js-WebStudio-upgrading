import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="uk">
			<Head>
				<meta name="description" content="WebStudio website portfolio" />
				<meta name="googlebot" content="index, follow" />
				<meta name="robots" content="index, follow" />
				<meta name="slurp" content="index, follow" />
				<meta
					name="keywords"
					content="Webstudio, WEBSTUDIO, webstudio, Studio, studio, STUDIO"
				/>
				<meta name="application-TileColor" content="#2196f3" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="author" content="Team Undefined - MagisterUnivers" />
				<link href="/favicon-custom.ico" rel="icon" type="image/x-icon" />
			</Head>
			<body id="modal-data" className="modal-data">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
