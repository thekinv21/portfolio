import type { TLabelValue } from './CommonTypes'

export type TStackGroup = {
	label: string
	items: string[]
}

export type TLanguage = {
	name: string
	native: string
	level: string
	percent: number
}

export type TLanguages = {
	title: string
	count: string
	items: TLanguage[]
}

export type TStackContent = {
	groups: TStackGroup[]
	languages: TLanguages
	certificate: TLabelValue
}
