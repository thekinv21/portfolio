import Image from 'next/image'

import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

interface IStackList {
	stacks: string[]
}

export function StackList({ stacks }: IStackList) {
	const { inView: stackView, ref: stackRef } = useInView()

	return (
		<div
			className='flex items-center justify-center flex-wrap gap-10'
			ref={stackRef}
		>
			{stacks.map((item: string, idx: number) => (
				<motion.div
					key={idx}
					initial={{ opacity: 0, x: -100 }}
					animate={stackView ? { opacity: 1, x: 0, scale: 1 } : { scale: 0.5 }}
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
	)
}
