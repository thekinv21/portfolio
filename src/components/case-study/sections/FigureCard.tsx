import { Shot } from '@/components/ui'
import type { TFigure } from '@/types/CaseStudyTypes'

import { HALF_SIZES } from '../styles'

type TFigureCardProps = { figure: TFigure }

export function FigureCard({ figure }: TFigureCardProps) {
	return (
		<figure className='card reveal m-0 flex flex-col gap-3.5'>
			<Shot
				src={figure.src}
				alt={figure.alt}
				aspect='16 / 10'
				position={figure.position ?? 'center'}
				sizes={HALF_SIZES}
				className='shot border border-line-soft'
			/>
			<figcaption className='flex flex-col gap-0.5'>
				<span className='text-[17px] font-medium'>{figure.title}</span>
				<span className='text-[15px] text-muted'>{figure.caption}</span>
			</figcaption>
		</figure>
	)
}
