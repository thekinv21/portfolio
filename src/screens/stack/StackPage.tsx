import Image from 'next/image'

import { stack } from '../../../public/svg'

import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

export function StackPage() {
	const { inView: stackView, ref: stackRef } = useInView()

	return (
		<section className='section'>
			<div className='w-full container px-4 md:px-6 grid gap-6  lg:gap-12  flex-col flex'>
				<div className='space-y-2'>
					<h1 className='animated-text text-3xl xl:text-6xl font-bold tracking-tighter mb-5'>
						My Toolbox 🛠️
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

				<div
					className='flex items-center justify-center flex-wrap gap-10'
					ref={stackRef}
				>
					{stack.map((item: string, idx: number) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, x: -100 }}
							animate={
								stackView ? { opacity: 1, x: 0, scale: 1 } : { scale: 0.5 }
							}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
						>
							<Image
								width={150}
								height={150}
								draggable={false}
								priority
								src={item}
								alt={`image as ${item}`}
								className='object-cover'
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
