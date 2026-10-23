import Link from 'next/link'

import { profile } from '@/content'
import { routes } from '@/lib/routes'

type TCaseStudyHeaderProps = { backLabel: string }

export function CaseStudyHeader({ backLabel }: TCaseStudyHeaderProps) {
	return (
		<header className='mx-auto flex max-w-280 flex-wrap items-center justify-between gap-4 px-6 py-8'>
			<Link
				href={routes.home()}
				className='back inline-flex min-h-11 items-center gap-2 text-[15px]'
			>
				<span className='arrow'>←</span> {backLabel}
			</Link>
			<Link
				href={routes.home()}
				className='inline-flex min-h-11 items-center font-semibold'
			>
				{profile.name}
			</Link>
		</header>
	)
}
