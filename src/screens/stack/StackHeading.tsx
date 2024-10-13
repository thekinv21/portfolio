import { motion } from 'framer-motion'

export function StackHeading() {
	return (
		<div className='space-y-2'>
			<h1 className='animated-text text-3xl xl:text-6xl font-bold tracking-tighter mb-5'>
				Stack 🛠️
			</h1>
			<motion.span className='animated-text max-w-[300px] text-wrap md:text-xl pt-5'>
				For create and build dynamic, scalable applications.
				<div className='overflow-hidden py-3'></div>
			</motion.span>
		</div>
	)
}
