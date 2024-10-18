import { motion } from 'framer-motion'

export function ExperienceHeading() {
	return (
		<div className='space-y-2'>
			<h1 className='animated-text text-3xl xl:text-6xl font-bold tracking-tighter mb-5'>
				Experience
			</h1>
			<motion.span className='animated-text max-w-[300px] text-wrap md:text-xl pt-5'>
				Here are the companies I work with and have worked with
			</motion.span>
		</div>
	)
}
