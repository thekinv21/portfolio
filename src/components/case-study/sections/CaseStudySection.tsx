import type { CaseStudySection as TCaseStudySection } from '@/content'

import { CardsSection } from './CardsSection'
import { FlowSection } from './FlowSection'
import { GallerySection } from './GallerySection'
import { LayersSection } from './LayersSection'
import { OverviewSection } from './OverviewSection'
import { ShowcaseSection } from './ShowcaseSection'
import { StackSection } from './StackSection'

type TCaseStudySectionProps = { section: TCaseStudySection }

export function CaseStudySection({ section }: TCaseStudySectionProps) {
	switch (section.type) {
		case 'overview':
			return <OverviewSection section={section} />
		case 'gallery':
			return <GallerySection section={section} />
		case 'layers':
			return <LayersSection section={section} />
		case 'cards':
			return <CardsSection section={section} />
		case 'stack':
			return <StackSection section={section} />
		case 'flow':
			return <FlowSection section={section} />
		case 'showcase':
			return <ShowcaseSection section={section} />
	}
}
