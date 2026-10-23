import dentacare from '@/data/case-studies/dentacare.json'
import karina from '@/data/case-studies/karina.json'
import enArticles from '@/data/en/articles.json'
import enBackend from '@/data/en/backend.json'
import enExperience from '@/data/en/experience.json'
import enProjects from '@/data/en/projects.json'
import enReferences from '@/data/en/references.json'
import enSite from '@/data/en/site.json'
import enStack from '@/data/en/stack.json'
import notFound from '@/data/not-found.json'
import profileData from '@/data/profile.json'
import trArticles from '@/data/tr/articles.json'
import trBackend from '@/data/tr/backend.json'
import trExperience from '@/data/tr/experience.json'
import trProjects from '@/data/tr/projects.json'
import trReferences from '@/data/tr/references.json'
import trSite from '@/data/tr/site.json'
import trStack from '@/data/tr/stack.json'
import type { TCaseStudy } from '@/types/CaseStudyTypes'
import type { THomeContent } from '@/types/HomeTypes'
import type { TLocale } from '@/types/LocaleTypes'
import type { TNotFoundContent } from '@/types/NotFoundTypes'
import type { TProfile } from '@/types/ProfileTypes'

export const locales: TLocale[] = ['en', 'tr']

export const profile: TProfile = profileData

const home: Record<TLocale, THomeContent> = {
	en: {
		site: enSite as THomeContent['site'],
		experience: enExperience.items,
		stack: enStack,
		projects: enProjects.items as THomeContent['projects'],
		backend: enBackend as THomeContent['backend'],
		articles: enArticles.items,
		references: enReferences.items,
	},
	tr: {
		site: trSite as THomeContent['site'],
		experience: trExperience.items,
		stack: trStack,
		projects: trProjects.items as THomeContent['projects'],
		backend: trBackend as THomeContent['backend'],
		articles: trArticles.items,
		references: trReferences.items,
	},
}

export const getHomeContent = (locale: TLocale): THomeContent => home[locale]

const caseStudies = [dentacare, karina] as TCaseStudy[]

export const getCaseStudySlugs = () => caseStudies.map(({ slug }) => slug)

export const getCaseStudy = (slug: string) =>
	caseStudies.find(study => study.slug === slug)

export const notFoundContent: TNotFoundContent = notFound as TNotFoundContent
