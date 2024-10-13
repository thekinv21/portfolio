import experiences from '@/json/experience.json'

import { ExperienceHeading } from './ExperienceHeading'
import { ExperienceList } from './ExperienceList'

export function ExperiencePage() {
	return (
		<section className='section' id='projects'>
			<div className='w-full container px-4 md:px-6 gap-6  lg:gap-12  flex-col flex'>
				<ExperienceHeading />
				<ExperienceList experiences={experiences} />
			</div>
		</section>
	)
}
