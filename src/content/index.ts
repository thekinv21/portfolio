import dentacare from './data/case-studies/dentacare.json'
import karina from './data/case-studies/karina.json'
import enArticles from './data/en/articles.json'
import enBackend from './data/en/backend.json'
import enExperience from './data/en/experience.json'
import enProjects from './data/en/projects.json'
import enReferences from './data/en/references.json'
import enSite from './data/en/site.json'
import enStack from './data/en/stack.json'
import notFound from './data/not-found.json'
import profileData from './data/profile.json'
import trArticles from './data/tr/articles.json'
import trBackend from './data/tr/backend.json'
import trExperience from './data/tr/experience.json'
import trProjects from './data/tr/projects.json'
import trReferences from './data/tr/references.json'
import trSite from './data/tr/site.json'
import trStack from './data/tr/stack.json'
import type {
	CaseStudy,
	HomeContent,
	Locale,
	NotFoundContent,
	Profile,
} from './types'

export type * from './types'

export const locales: Locale[] = ['en', 'tr']

export const profile: Profile = profileData

const home: Record<Locale, HomeContent> = {
	en: {
		site: enSite as HomeContent['site'],
		experience: enExperience.items,
		stack: enStack,
		projects: enProjects.items as HomeContent['projects'],
		backend: enBackend as HomeContent['backend'],
		articles: enArticles.items,
		references: enReferences.items,
	},
	tr: {
		site: trSite as HomeContent['site'],
		experience: trExperience.items,
		stack: trStack,
		projects: trProjects.items as HomeContent['projects'],
		backend: trBackend as HomeContent['backend'],
		articles: trArticles.items,
		references: trReferences.items,
	},
}

export const getHomeContent = (locale: Locale): HomeContent => home[locale]

// JSON imports widen string literals, so section `type` needs the cast
const caseStudies = [dentacare, karina] as CaseStudy[]

export const getCaseStudySlugs = () => caseStudies.map(({ slug }) => slug)

export const getCaseStudy = (slug: string) =>
	caseStudies.find(study => study.slug === slug)

export const notFoundContent: NotFoundContent = notFound as NotFoundContent
