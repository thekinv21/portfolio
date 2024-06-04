import { motion } from 'framer-motion'

export function StackHeading() {
	return (
		<div className='space-y-2'>
			<h1 className='animated-text text-3xl xl:text-6xl font-bold tracking-tighter mb-5'>
				My Stack 🛠️
			</h1>
			<motion.span className='animated-text max-w-[300px] text-wrap md:text-xl pt-5'>
				For create and build dynamic, scalable applications.
				<div className='overflow-hidden py-3'>
					<h1 className='animated-text inline-flex w-full text-left font-bold leading-none tracking-tighter'>
						It is just the beginning 🔥
					</h1>
				</div>
			</motion.span>
		</div>
	)
}
