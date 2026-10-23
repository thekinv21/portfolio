import { SectionHeader } from '@/components/ui'

import type { TSection } from './types'

type TCardsSectionProps = { section: TSection<'cards'> }

export function CardsSection({ section }: TCardsSectionProps) {
	return (
		<section className='flex flex-col gap-10 pb-30'>
			<SectionHeader
				eyebrow={section.eyebrow}
				title={section.title}
				size='md'
			/>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
				{section.items.map(item => (
					<div
						key={item.label}
						className='reveal flex flex-col gap-2.5 rounded-2xl border border-line p-7'
					>
						<span className='font-mono text-xs text-muted'>{item.label}</span>
						<h3 className='m-0 text-xl font-medium'>{item.title}</h3>
						<p className='m-0 text-[15px] leading-[1.55] text-body'>
							{item.text}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
