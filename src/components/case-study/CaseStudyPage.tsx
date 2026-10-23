import type { CaseStudy } from '@/content'

import { CaseStudyFacts } from './CaseStudyFacts'
import { CaseStudyFooter } from './CaseStudyFooter'
import { CaseStudyHeader } from './CaseStudyHeader'
import { CaseStudyHero } from './CaseStudyHero'
import { CaseStudySection } from './sections/CaseStudySection'

type TCaseStudyPageProps = { study: CaseStudy }

export function CaseStudyPage({ study }: TCaseStudyPageProps) {
	return (
		<div className='min-h-screen bg-white text-ink'>
			<CaseStudyHeader backLabel={study.backLabel} />

			<main className='mx-auto max-w-280 px-6'>
				<CaseStudyHero study={study} />
				<CaseStudyFacts facts={study.facts} />

				{study.sections.map(section => (
					<CaseStudySection key={section.eyebrow} section={section} />
				))}

				<CaseStudyFooter footer={study.footer} />
			</main>
		</div>
	)
}
