import { ProjectHeading } from './ProjectHeading'
import { ProjectList } from './ProjectList'

import projects from '@/json/project.json'

export function ProjectsPage() {
	return (
		<section className='section' id='projects'>
			<div className='w-full container px-4 md:px-6  gap-6  lg:gap-12  flex-col flex'>
				<ProjectHeading />
				<ProjectList projects={projects} />
			</div>
		</section>
	)
}
