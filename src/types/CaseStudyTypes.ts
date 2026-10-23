import type { TLabelValue, TLink, TMedia, TMeta } from './CommonTypes'

export type TFigure = TMedia & {
	title: string
	caption: string
}

export type TFeatureFigure = TMedia & {
	label: string
	title: string
	text: string
}

export type TLayer = {
	name: string
	description: string
}

export type TCaseStudyCard = {
	label: string
	title: string
	text: string
}

export type TFlowBox = {
	label: string
	title: string
	items: string[]
}

export type TFlowNote = {
	text: string
	linkLabel: string
	suffix: string
}

export type TOverviewSection = {
	type: 'overview'
	eyebrow: string
	title: string
	paragraphs: string[]
}

export type TGallerySection = {
	type: 'gallery'
	eyebrow: string
	title: string
	items: TFigure[]
}

export type TLayersSection = {
	type: 'layers'
	eyebrow: string
	title: string
	paragraphs: string[]
	listLabel: string
	layers: TLayer[]
	note: string
}

export type TCardsSection = {
	type: 'cards'
	eyebrow: string
	title: string
	items: TCaseStudyCard[]
}

export type TStackSection = {
	type: 'stack'
	eyebrow: string
	items: string[]
}

export type TFlowSection = {
	type: 'flow'
	eyebrow: string
	title: string
	intro: string
	source: TFlowBox
	connector: string
	target: TFlowBox
	note: TFlowNote
}

export type TShowcaseSection = {
	type: 'showcase'
	eyebrow: string
	title: string
	features: TFeatureFigure[]
	grid: TFigure[]
	wide: TFigure
}

export type TCaseStudySection =
	| TOverviewSection
	| TGallerySection
	| TLayersSection
	| TCardsSection
	| TStackSection
	| TFlowSection
	| TShowcaseSection

export type TCaseStudyFooter = {
	back: string
	links: TLink[]
}

export type TCaseStudy = {
	slug: string
	meta: TMeta
	eyebrow: string
	title: string
	lead: string
	primaryLink: TLink
	hero: TMedia
	facts: TLabelValue[]
	sections: TCaseStudySection[]
	footer: TCaseStudyFooter
	backLabel: string
}

export type TSection<T extends TCaseStudySection['type']> = Extract<
	TCaseStudySection,
	{ type: T }
>
