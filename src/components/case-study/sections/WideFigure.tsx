import { Shot } from '@/components/ui'
import type { TFigure } from '@/types/CaseStudyTypes'

import { FULL_SIZES } from '../styles'

type TWideFigureProps = { figure: TFigure }

export function WideFigure({ figure }: TWideFigureProps) {
	return (
		<figure className='card reveal m-0 flex flex-col gap-3.5'>
			<Shot
				src={figure.src}
				alt={figure.alt}
				aspect='1442 / 835'
				position='center'
				sizes={FULL_SIZES}
				className='shot border border-line-soft'
			/>
			<figcaption className='flex flex-wrap justify-between gap-x-6 gap-y-1'>
				<span className='text-[17px] font-medium'>{figure.title}</span>
				<span className='text-[15px] text-muted'>{figure.caption}</span>
			</figcaption>
		</figure>
	)
}
