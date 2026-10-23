import { SectionHeader } from '@/components/ui'
import type { TSection } from '@/types/CaseStudyTypes'

import { FeatureCard } from './FeatureCard'
import { FigureCard } from './FigureCard'
import { WideFigure } from './WideFigure'

type TShowcaseSectionProps = { section: TSection<'showcase'> }

export function ShowcaseSection({ section }: TShowcaseSectionProps) {
	return (
		<section className='flex flex-col gap-14 pb-30'>
			<SectionHeader
				eyebrow={section.eyebrow}
				title={section.title}
				size='md'
			/>

			{section.features.map((feature, index) => (
				<FeatureCard
					key={feature.src}
					feature={feature}
					reversed={index % 2 === 1}
				/>
			))}

			<div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-6 gap-y-10'>
				{section.grid.map(item => (
					<FigureCard key={item.src} figure={item} />
				))}
			</div>

			<WideFigure figure={section.wide} />
		</section>
	)
}
