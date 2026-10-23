import { SectionHeader } from '@/components/ui'
import type { TSection } from '@/types/CaseStudyTypes'

import { FigureCard } from './FigureCard'

type TGallerySectionProps = { section: TSection<'gallery'> }

export function GallerySection({ section }: TGallerySectionProps) {
	return (
		<section className='flex flex-col gap-10 pb-30'>
			<SectionHeader
				eyebrow={section.eyebrow}
				title={section.title}
				size='md'
			/>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-6 gap-y-10'>
				{section.items.map(item => (
					<FigureCard key={item.src} figure={item} />
				))}
			</div>
		</section>
	)
}
