import experiances from '@/json/experience.json'

import { ExperianceHeading } from './ExperianceHeading'
import { ExperianceList } from './ExperianceList'

export function ExperiencePage() {
	return (
		<section className='section' id='projects'>
			<div className='w-full container px-4 md:px-6 grid gap-6  lg:gap-12  flex-col flex'>
				<ExperianceHeading />

				<ExperianceList experiances={experiances} />
			</div>
		</section>
	)
}
