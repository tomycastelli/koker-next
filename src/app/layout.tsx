import { Navbar } from '@/components/Navbar'
import './globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<head>
				<meta charSet='utf-8' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />

				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='Especializados en transacciones OTC para clientes corporativos y de alto valor'
				/>
				<link rel='sitemap' href='/sitemap-index.xml' />
				<title>Koker OTC Crypto Argentina</title>
			</head>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
