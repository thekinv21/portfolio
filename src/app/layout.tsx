import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Vadim Kiniabaev',
	description: "It's portfolio web site for Vadim Kiniabaev",
	icons: {
		icon: '/favicon.ico',
	},
}

interface IRootLayout {
	children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
