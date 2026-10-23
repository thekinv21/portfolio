export type Locale = 'en' | 'tr'

export interface Link {
	label: string
	href: string
	primary?: boolean
}

export type ProjectLink = Omit<Link, 'href'> &
	({ href: string; caseStudy?: never } | { caseStudy: string; href?: never })

export interface LabelValue {
	label: string
	value: string
}

export interface Media {
	src: string
	alt: string
	aspect?: string
	position?: string
}

export interface Profile {
	name: string
	firstName: string
	lastName: string
	email: string
	portrait: string
	cv: { href: string; fileName: string }
	links: {
		github: string
		repositories: string
		linkedin: string
		medium: string
	}
	accent: string
}

export interface SectionHeading {
	eyebrow: string
	title: string
}

export interface SiteContent {
	meta: { title: string; description: string }
	nav: { label: string; items: Link[] }
	languageSwitch: { locale: Locale; label: string; ariaLabel: string }
	hero: {
		status: string
		greeting: string
		intro: string
		cv: string
		portraitAlt: string
		badge: string
		stat: { value: string; label: string }
		location: string
		facts: LabelValue[]
		now: { label: string; text: string; updated: string }
	}
	marquee: { label: string; items: string[] }
	sections: {
		experience: SectionHeading
		stack: SectionHeading
		projects: SectionHeading & {
			link: string
			filterLabel: string
			filters: Record<ProjectFilter, string>
		}
		backend: SectionHeading & { intro: string; moreLabel: string }
		writing: SectionHeading & { link: string }
		references: SectionHeading & { note: string }
		contact: SectionHeading & { titleMuted: string }
	}
	contact: {
		rows: (LabelValue & { href: string })[]
		copy: { idle: string; done: string }
		cv: string
		details: LabelValue[]
	}
	footer: { copyright: string; backToTop: string }
}

export interface ExperienceProject {
	title: string
	period?: string
	subtitle?: string
	bullets: string[]
}

export interface ExperienceItem {
	period: string
	role: string
	company: string
	summary?: string
	projects?: ExperienceProject[]
	bullets?: string[]
	note?: string
	tags?: string[]
}

export interface StackContent {
	groups: { label: string; items: string[] }[]
	languages: {
		title: string
		count: string
		items: { name: string; native: string; level: string; percent: number }[]
	}
	certificate: LabelValue
}

export type ProjectCategory = 'client' | 'fullstack' | 'frontend'
export type ProjectFilter = 'all' | ProjectCategory

export interface ProjectMock {
	label: string
	note: string
	steps: { step: string; label: string }[]
	lock: string
	live: string
	table: string
	tableNote: string
}

export interface Project {
	id: string
	category: ProjectCategory
	year: string
	meta: string
	title: string
	description: string
	bullets: string[]
	tech: string
	images?: Media[]
	mock?: ProjectMock
	links: ProjectLink[]
}

export type TerminalTone = 'get' | 'post' | 'put' | 'del'

export interface TerminalLine {
	method?: string
	tone?: TerminalTone
	text?: string
	comment?: string
	caret?: boolean
}

export interface BackendItem {
	number: string
	category: string
	repo: string
	href: string
	title: string
	bullets: string[]
	tech: string
	image?: Media
	terminal?: { title: string; lines: TerminalLine[] }
}

export interface Article {
	date: string
	title: string
	summary: string
	lang: string
	href: string
}

export interface Reference {
	initials: string
	name: string
	role: string
	company: string
	linkedin: string
	email: string
}

export interface HomeContent {
	site: SiteContent
	experience: ExperienceItem[]
	stack: StackContent
	projects: Project[]
	backend: { items: BackendItem[]; more: Link[] }
	articles: Article[]
	references: Reference[]
}

export interface Figure extends Media {
	title: string
	caption: string
}

export interface FeatureFigure extends Media {
	label: string
	title: string
	text: string
}

export type CaseStudySection =
	| { type: 'overview'; eyebrow: string; title: string; paragraphs: string[] }
	| { type: 'gallery'; eyebrow: string; title: string; items: Figure[] }
	| {
			type: 'layers'
			eyebrow: string
			title: string
			paragraphs: string[]
			listLabel: string
			layers: { name: string; description: string }[]
			note: string
	  }
	| {
			type: 'cards'
			eyebrow: string
			title: string
			items: { label: string; title: string; text: string }[]
	  }
	| { type: 'stack'; eyebrow: string; items: string[] }
	| {
			type: 'flow'
			eyebrow: string
			title: string
			intro: string
			source: { label: string; title: string; items: string[] }
			connector: string
			target: { label: string; title: string; items: string[] }
			note: { text: string; linkLabel: string; suffix: string }
	  }
	| {
			type: 'showcase'
			eyebrow: string
			title: string
			features: FeatureFigure[]
			grid: Figure[]
			wide: Figure
	  }

export interface CaseStudy {
	slug: string
	meta: { title: string; description: string }
	eyebrow: string
	title: string
	lead: string
	primaryLink: Link
	hero: Media
	facts: LabelValue[]
	sections: CaseStudySection[]
	footer: { back: string; links: Link[] }
	backLabel: string
}

export interface NotFoundContent {
	badge: string
	title: string
	text: string
	back: string
	report: string
	log: { title: string; lines: TerminalLine[] }
}
