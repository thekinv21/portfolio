import Link from 'next/link'

import type { SiteContent } from '@/content'
import { routes } from '@/lib/routes'

type TSiteHeaderProps = {
	name: string
	nav: SiteContent['nav']
	languageSwitch: SiteContent['languageSwitch']
}

export function SiteHeader({ name, nav, languageSwitch }: TSiteHeaderProps) {
	return (
		<header className='fade mx-auto flex max-w-280 flex-wrap items-center justify-between gap-4 px-6 py-8'>
			<a
				href='#top'
				className='inline-flex min-h-11 items-center font-semibold'
			>
				{name}
			</a>
			<nav
				aria-label={nav.label}
				className='flex flex-wrap gap-x-7 gap-y-1 text-[15px]'
			>
				{nav.items.map(item => (
					<a
						key={item.href}
						href={item.href}
						className='uline inline-flex min-h-11 items-center text-muted'
					>
						{item.label}
					</a>
				))}
			</nav>
			<Link
				href={routes.home(languageSwitch.locale)}
				aria-label={languageSwitch.ariaLabel}
				className='chip inline-flex h-10 min-w-11 items-center justify-center rounded-full border border-line-strong px-2.5 font-mono text-xs'
			>
				{languageSwitch.label}
			</Link>
		</header>
	)
}
