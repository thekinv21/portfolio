'use client'

import { useState } from 'react'

import {
	dotVariant,
	SectionHeader,
	Timeline,
	TimelineAside,
	TimelineDot,
} from '@/components/ui'
import type { Project, ProjectFilter, SiteContent } from '@/content'

import { ProjectCard } from './ProjectCard'

const FILTERS: ProjectFilter[] = ['all', 'client', 'fullstack', 'frontend']

type TProjectsSectionProps = {
	heading: SiteContent['sections']['projects']
	projects: Project[]
	repositoriesHref: string
}

export function ProjectsSection({
	heading,
	projects,
	repositoriesHref,
}: TProjectsSectionProps) {
	const [filter, setFilter] = useState<ProjectFilter>('all')

	const matches = (project: Project, value: ProjectFilter) =>
		value === 'all' || project.category === value

	return (
		<section id='projects' className='flex flex-col gap-14 pb-35'>
			<SectionHeader eyebrow={heading.eyebrow} title={heading.title}>
				<a
					href={repositoriesHref}
					className='link uline inline-flex min-h-11 items-center gap-1 text-[15px] text-muted'
				>
					{heading.link} <span className='arrow'>↗</span>
				</a>
			</SectionHeader>

			<div
				role='group'
				aria-label={heading.filterLabel}
				className='reveal -mt-6 flex flex-wrap gap-2'
			>
				{FILTERS.map(value => {
					const active = filter === value
					return (
						<button
							key={value}
							type='button'
							aria-pressed={active}
							onClick={() => setFilter(value)}
							className={`inline-flex min-h-10 cursor-pointer items-center rounded-full border px-4 text-sm transition-colors ${
								active
									? 'border-ink bg-ink text-white'
									: 'border-line-strong bg-white text-ink hover:border-ink'
							}`}
						>
							{heading.filters[value]}
							<span className='ml-2 font-mono text-[11px] opacity-65'>
								{projects.filter(project => matches(project, value)).length}
							</span>
						</button>
					)
				})}
			</div>

			<Timeline gap='gap-20'>
				{projects.map((project, index) => (
					<li
						key={project.id}
						hidden={!matches(project, filter)}
						className='relative flex flex-wrap gap-x-10 gap-y-5'
					>
						<TimelineDot
							variant={dotVariant(index, projects.length)}
							top='top-1.5'
						/>
						<TimelineAside title={project.year} meta={project.meta} />
						<ProjectCard project={project} />
					</li>
				))}
			</Timeline>
		</section>
	)
}
