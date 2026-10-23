export type TExperienceProject = {
	title: string
	period?: string
	subtitle?: string
	bullets: string[]
}

export type TExperienceItem = {
	period: string
	role: string
	company: string
	summary?: string
	projects?: TExperienceProject[]
	bullets?: string[]
	note?: string
	tags?: string[]
}
