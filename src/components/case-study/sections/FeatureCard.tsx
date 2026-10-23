import { Shot } from '@/components/ui'
import type { TFeatureFigure } from '@/types/CaseStudyTypes'

type TFeatureCardProps = {
	feature: TFeatureFigure
	reversed?: boolean
}

export function FeatureCard({ feature, reversed }: TFeatureCardProps) {
	return (
		<figure
			className={`card reveal m-0 flex items-center gap-x-10 gap-y-6 ${
				reversed ? 'flex-row-reverse flex-wrap-reverse' : 'flex-wrap'
			}`}
		>
			<Shot
				src={feature.src}
				alt={feature.alt}
				aspect='1442 / 835'
				position='center'
				sizes='(max-width: 768px) 100vw, 640px'
				className='shot min-w-0 flex-[3_1_520px] border border-line-soft'
			/>
			<figcaption className='flex min-w-0 flex-[2_1_280px] flex-col gap-2'>
				<span className='font-mono text-xs text-muted'>{feature.label}</span>
				<span className='text-[22px] font-medium tracking-[-0.02em]'>
					{feature.title}
				</span>
				<span className='leading-[1.55] text-body'>{feature.text}</span>
			</figcaption>
		</figure>
	)
}
