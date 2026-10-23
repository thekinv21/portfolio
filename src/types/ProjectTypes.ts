import type { TLink, TMedia } from './CommonTypes'

export type TProjectCategory = 'client' | 'fullstack' | 'frontend'
export type TProjectFilter = 'all' | TProjectCategory

export type TProjectHrefLink = Omit<TLink, 'href'> & {
	href: string
	caseStudy?: never
}

export type TProjectCaseStudyLink = Omit<TLink, 'href'> & {
	caseStudy: string
	href?: never
}

export type TProjectLink = TProjectHrefLink | TProjectCaseStudyLink

export type TProjectMockStep = {
	step: string
	label: string
}

export type TProjectMock = {
	label: string
	note: string
	steps: TProjectMockStep[]
	lock: string
	live: string
	table: string
	tableNote: string
}

export type TProject = {
	id: string
	category: TProjectCategory
	year: string
	meta: string
	title: string
	description: string
	bullets: string[]
	tech: string
	images?: TMedia[]
	mock?: TProjectMock
	links: TProjectLink[]
}
