import Link from 'next/link'

import { routes } from '@/lib/routes'
import type { TSection } from '@/types/CaseStudyTypes'

import { EYEBROW, TITLE } from '../styles'
import { FlowBox } from './FlowBox'

type TFlowSectionProps = { section: TSection<'flow'> }

export function FlowSection({ section }: TFlowSectionProps) {
	const { note } = section

	return (
		<section className='flex flex-col gap-10 pb-30'>
			<div className='reveal flex max-w-180 flex-col gap-2'>
				<span className={EYEBROW}>{section.eyebrow}</span>
				<h2 className={TITLE}>{section.title}</h2>
				<p className='mt-2 mb-0 text-[17px] leading-relaxed text-body'>
					{section.intro}
				</p>
			</div>
			<div className='reveal flex flex-wrap items-stretch gap-4'>
				<FlowBox box={section.source} highlighted />
				<div className='flex min-w-20 flex-[0_1_120px] flex-col justify-center gap-2 text-center'>
					<span className='font-mono text-[11px] text-muted'>
						{section.connector}
					</span>
					<div className='wire' aria-hidden='true' />
					<span aria-hidden='true' className='text-lg'>
						→
					</span>
				</div>
				<FlowBox box={section.target} />
			</div>
			<p className='reveal m-0 text-[15px] text-muted'>
				{note.text}{' '}
				<Link href={routes.projects} className='border-b border-ink text-ink'>
					{note.linkLabel}
				</Link>{' '}
				{note.suffix}
			</p>
		</section>
	)
}
