import type { TArticle } from './ArticleTypes'
import type { TBackendContent } from './BackendTypes'
import type { TExperienceItem } from './ExperienceTypes'
import type { TProject } from './ProjectTypes'
import type { TReference } from './ReferenceTypes'
import type { TSiteContent } from './SiteTypes'
import type { TStackContent } from './StackTypes'

export type THomeContent = {
	site: TSiteContent
	experience: TExperienceItem[]
	stack: TStackContent
	projects: TProject[]
	backend: TBackendContent
	articles: TArticle[]
	references: TReference[]
}
