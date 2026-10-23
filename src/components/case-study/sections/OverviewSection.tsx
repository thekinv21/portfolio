import type { TSection } from '@/types/CaseStudyTypes'

import { EYEBROW, TITLE } from '../styles'

type TOverviewSectionProps = { section: TSection<'overview'> }

export function OverviewSection({ section }: TOverviewSectionProps) {
	return (
		<section className='flex flex-wrap gap-12 py-30'>
			<div className='reveal flex min-w-0 flex-[1_1_280px] flex-col gap-2'>
				<span className={EYEBROW}>{section.eyebrow}</span>
				<h2 className={TITLE}>{section.title}</h2>
			</div>
			<div className='reveal flex min-w-0 flex-[2_1_520px] flex-col gap-4.5 text-lg leading-relaxed text-body'>
				{section.paragraphs.map(paragraph => (
					<p key={paragraph} className='m-0'>
						{paragraph}
					</p>
				))}
			</div>
		</section>
	)
}
