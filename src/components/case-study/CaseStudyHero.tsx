import { PillLink, Shot } from '@/components/ui'
import type { TCaseStudy } from '@/types/CaseStudyTypes'

import { FULL_SIZES } from './styles'

type TCaseStudyHeroProps = { study: TCaseStudy }

export function CaseStudyHero({ study }: TCaseStudyHeroProps) {
	return (
		<>
			<section className='flex flex-col gap-7 pt-16 pb-14'>
				<span className='rise font-mono text-[13px] text-muted [animation-delay:.1s]'>
					{study.eyebrow}
				</span>
				<h1 className='m-0 text-[clamp(56px,10vw,128px)] leading-[0.9] font-semibold tracking-[-0.055em]'>
					<span className='mask'>
						<span className='[animation-delay:.15s]'>{study.title}</span>
					</span>
				</h1>
				<p className='rise m-0 max-w-180 text-[clamp(20px,2.2vw,26px)] leading-[1.4] text-body [animation-delay:.4s]'>
					{study.lead}
				</p>
				<div className='rise flex flex-wrap gap-3 [animation-delay:.55s]'>
					<PillLink href={study.primaryLink.href} size='lg'>
						{study.primaryLink.label}
					</PillLink>
				</div>
			</section>

			<Shot
				{...study.hero}
				preload
				sizes={FULL_SIZES}
				className='clipin-sm overflow-hidden rounded-2xl border border-line-soft bg-shot'
			/>
		</>
	)
}
