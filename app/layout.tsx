import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dashboard Astra',
	description: 'Dashboard Astra',
	icons: {
		icon: '/astra.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='bg-gradient-to-b from-base-100 via-black to-black'
			suppressHydrationWarning
		>
			<body
				className={`${inter.className} bg-gradient-to-b from-base-100 to-black border-t-4 border-primary`}
			>
				{children}
			</body>
		</html>
	);
}
