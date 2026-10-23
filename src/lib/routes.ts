import type { Locale } from '@/content'

export const routes = {
	home: (locale: Locale = 'en') => (locale === 'tr' ? '/tr' : '/'),
	projects: '/#projects',
	caseStudy: (slug: string) => `/projects/${slug}`,
} as const
