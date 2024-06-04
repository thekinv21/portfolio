import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'
import { ProjectCard } from './ProjectCard'

interface IProjectList {
	projects: IProject[]
}

export function ProjectList({ projects }: IProjectList) {
	const { inView: projectView, ref: projectRef } = useInView()
	return (
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
	)
}
