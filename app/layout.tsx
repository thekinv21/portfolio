import type { Metadata } from 'next'
import { Inter_Tight, JetBrains_Mono } from 'next/font/google'

import { getHomeContent } from '@/content'

import './globals.css'

const interTight = Inter_Tight({
	variable: '--font-inter-tight',
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '500', '600'],
})

const jetBrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '500'],
})

const { title, description } = getHomeContent('en').site.meta

export const metadata: Metadata = {
	title: { default: title, template: '%s · Vadim Kiniabaev' },
	description,
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='en'
			data-scroll-behavior='smooth'
			className={`${interTight.variable} ${jetBrainsMono.variable} antialiased`}
			suppressHydrationWarning
		>
			<body suppressHydrationWarning>{children}</body>
		</html>
	)
}
