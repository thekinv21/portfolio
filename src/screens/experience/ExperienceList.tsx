import { motion } from 'framer-motion'

import { IExperience } from '@/types/experience.types'
import { useInView } from 'react-intersection-observer'
import { ExperienceCard } from './ExperienceCard'

interface IExperienceList {
	experiences: IExperience[]
}

export function ExperienceList({ experiences }: IExperienceList) {
	const { inView: experienceView, ref: experienceRef } = useInView()

	return (
		<div
			className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'
			ref={experienceRef}
		>
			{experiences.map((item: IExperience, idx: number) => (
				<motion.div
					key={idx}
					initial={{ opacity: 0, x: -100 }}
					animate={
						experienceView ? { opacity: 1, x: 0, scale: 1 } : { scale: 0.5 }
					}
					exit={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.5, delay: idx * 0.1 }}
				>
					<ExperienceCard key={idx} item={item} />
				</motion.div>
			))}
		</div>
	)
}
