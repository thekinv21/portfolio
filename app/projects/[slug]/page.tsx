import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CaseStudyPage } from '@/components/case-study/CaseStudyPage'
import { getCaseStudy, getCaseStudySlugs } from '@/lib/content'

type TPageProps = PageProps<'/projects/[slug]'>

export function generateStaticParams() {
	return getCaseStudySlugs().map(slug => ({ slug }))
}

export async function generateMetadata({
	params,
}: TPageProps): Promise<Metadata> {
	const study = getCaseStudy((await params).slug)
	if (!study) return {}

	return {
		title: { absolute: study.meta.title },
		description: study.meta.description,
	}
}

export default async function Page({ params }: TPageProps) {
	const study = getCaseStudy((await params).slug)
	if (!study) notFound()

	return <CaseStudyPage study={study} />
}
