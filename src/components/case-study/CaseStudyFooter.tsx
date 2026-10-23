import Link from 'next/link'

import { PillLink } from '@/components/ui'
import type { CaseStudy } from '@/content'
import { routes } from '@/lib/routes'

type TCaseStudyFooterProps = { footer: CaseStudy['footer'] }

export function CaseStudyFooter({ footer }: TCaseStudyFooterProps) {
	return (
		<section className='flex flex-wrap items-center justify-between gap-6 border-t border-line pt-16 pb-12'>
			<Link
				href={routes.projects}
				className='back inline-flex min-h-11 items-center gap-2.5 text-xl font-medium tracking-[-0.02em]'
			>
				<span className='arrow'>←</span> {footer.back}
			</Link>
			<div className='flex flex-wrap gap-3'>
				{footer.links.map(link => (
					<PillLink
						key={link.href}
						href={link.href}
						size='lg'
						variant={link.primary ? 'solid' : 'outline'}
					>
						{link.label}
					</PillLink>
				))}
			</div>
		</section>
	)
}
