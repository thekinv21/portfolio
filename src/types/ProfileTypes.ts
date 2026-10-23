export type TProfileCv = {
	href: string
	fileName: string
}

export type TProfileLinks = {
	github: string
	repositories: string
	linkedin: string
	medium: string
}

export type TProfile = {
	name: string
	firstName: string
	lastName: string
	email: string
	portrait: string
	cv: TProfileCv
	links: TProfileLinks
	accent: string
}
