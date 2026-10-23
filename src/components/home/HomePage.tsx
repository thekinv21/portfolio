import { getHomeContent, profile } from '@/lib/content'
import type { TLocale } from '@/types/LocaleTypes'

import { BackendSection } from './BackendSection'
import { ContactSection } from './ContactSection'
import { ExperienceSection } from './ExperienceSection'
import { HeroSection } from './HeroSection'
import { ProjectsSection } from './ProjectsSection'
import { ReferencesSection } from './ReferencesSection'
import { SiteHeader } from './SiteHeader'
import { StackSection } from './StackSection'
import { TechMarquee } from './TechMarquee'
import { WritingSection } from './WritingSection'

type THomePageProps = { locale: TLocale }

export function HomePage({ locale }: THomePageProps) {
	const content = getHomeContent(locale)
	const { site } = content

	return (
		<div lang={locale} className='min-h-screen bg-white text-ink'>
			<div className='progress' aria-hidden='true' />
			<SiteHeader
				name={profile.name}
				nav={site.nav}
				languageSwitch={site.languageSwitch}
			/>

			<main id='top'>
				<HeroSection profile={profile} hero={site.hero} />
				<TechMarquee {...site.marquee} />

				<div className='mx-auto max-w-280 px-6'>
					<ExperienceSection
						heading={site.sections.experience}
						items={content.experience}
					/>
					<StackSection heading={site.sections.stack} stack={content.stack} />
					<ProjectsSection
						heading={site.sections.projects}
						projects={content.projects}
						repositoriesHref={profile.links.repositories}
					/>
					<BackendSection
						heading={site.sections.backend}
						backend={content.backend}
					/>
					<WritingSection
						heading={site.sections.writing}
						articles={content.articles}
						mediumHref={profile.links.medium}
					/>
					<ReferencesSection
						heading={site.sections.references}
						references={content.references}
					/>
					<ContactSection profile={profile} site={site} />
				</div>
			</main>
		</div>
	)
}
