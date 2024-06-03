import projects from '@/json/project.json'

import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'
import { ProjectCard } from './ProjectCard'

export function ProjectsPage() {
	const { inView: projectView, ref: projectRef } = useInView()

	return (
		<section className='section' id='projects'>
			<div className='w-full container px-4 md:px-6 grid gap-6  lg:gap-12  flex-col flex'>
				<div className='space-y-2'>
					<h1 className='animated-text text-3xl xl:text-6xl font-bold tracking-tighter mb-5'>
						My Project 🔥
					</h1>
					<motion.span className='animated-text max-w-[300px] text-wrap md:text-xl pt-5'>
						Here I have only my projects, other courses added on my Github..
						<div className='overflow-hidden py-3'>
							<h1 className='animated-text inline-flex w-full text-left font-bold leading-none tracking-tighter'>
								I strive to work on it and add even more beautiful projects 🤗
							</h1>
						</div>
					</motion.span>
				</div>

				<div
					className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'
					ref={projectRef}
				>
					{projects.map((item: IProject, idx: number) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, x: -100 }}
							animate={
								projectView ? { opacity: 1, x: 0, scale: 1 } : { scale: 0.5 }
							}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
						>
							<ProjectCard key={item.id} item={item} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
