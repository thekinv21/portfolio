import { motion } from 'framer-motion'

export function ProjectHeading() {
	return (
		<div className='space-y-2'>
			<h1 className='animated-text text-3xl xl:text-6xl font-bold tracking-tighter mb-5'>
				Contributions 🔥
			</h1>
			<motion.span className='animated-text max-w-[300px] text-wrap md:text-xl pt-5'>
				Here I have only my projects, other courses added on my Github..
			</motion.span>
		</div>
	)
}
