export interface IExperience {
	title: string
	position: string
	year: string
	tools: IExperienceTool[]
	description: string
	companyImageUrl: string
	company?: string
}

export interface IExperienceTool {
	title: string
	imageUrl: string
}
