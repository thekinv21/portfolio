interface IProject {
	title: string
	id: string
	imageUrl: string
	description: string
	date: string
	tools: ITool[]
	url: string
}

interface ITool {
	id: string
	name: string
}
