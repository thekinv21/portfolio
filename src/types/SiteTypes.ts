import type { TLabelValue, TLink, TMeta, TSectionHeading } from './CommonTypes'
import type { TLocale } from './LocaleTypes'
import type { TProjectFilter } from './ProjectTypes'

export type TNav = {
	label: string
	items: TLink[]
}

export type TLanguageSwitch = {
	locale: TLocale
	label: string
	ariaLabel: string
}

export type THeroStat = {
	value: string
	label: string
}

export type THeroNow = {
	label: string
	text: string
	updated: string
}

export type THero = {
	status: string
	greeting: string
	intro: string
	cv: string
	portraitAlt: string
	badge: string
	stat: THeroStat
	location: string
	facts: TLabelValue[]
	now: THeroNow
}

export type TMarquee = {
	label: string
	items: string[]
}

export type TProjectsHeading = TSectionHeading & {
	link: string
	filterLabel: string
	filters: Record<TProjectFilter, string>
}

export type TBackendHeading = TSectionHeading & {
	intro: string
	moreLabel: string
}

export type TWritingHeading = TSectionHeading & {
	link: string
}

export type TReferencesHeading = TSectionHeading & {
	note: string
}

export type TContactHeading = TSectionHeading & {
	titleMuted: string
}

export type TSections = {
	experience: TSectionHeading
	stack: TSectionHeading
	projects: TProjectsHeading
	backend: TBackendHeading
	writing: TWritingHeading
	references: TReferencesHeading
	contact: TContactHeading
}

export type TContactRow = TLabelValue & {
	href: string
}

export type TCopyLabels = {
	idle: string
	done: string
}

export type TContact = {
	rows: TContactRow[]
	copy: TCopyLabels
	cv: string
	details: TLabelValue[]
}

export type TFooter = {
	copyright: string
	backToTop: string
}

export type TSiteContent = {
	meta: TMeta
	nav: TNav
	languageSwitch: TLanguageSwitch
	hero: THero
	marquee: TMarquee
	sections: TSections
	contact: TContact
	footer: TFooter
}
