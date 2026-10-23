import type { TLocale } from '@/types/LocaleTypes'

export const routes = {
	home: (locale: TLocale = 'en') => (locale === 'tr' ? '/tr' : '/'),
	projects: '/#projects',
	caseStudy: (slug: string) => `/projects/${slug}`,
} as const
