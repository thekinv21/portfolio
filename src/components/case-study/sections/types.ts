import type { CaseStudySection } from '@/content'

export type TSection<T extends CaseStudySection['type']> = Extract<
	CaseStudySection,
	{ type: T }
>
