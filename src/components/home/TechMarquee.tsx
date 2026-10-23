import { Fragment } from 'react'

import type { TMarquee } from '@/types/SiteTypes'

type TTechMarqueeProps = TMarquee

export function TechMarquee({ label, items }: TTechMarqueeProps) {
	return (
		<div
			aria-label={label}
			className='marquee-wrap fade overflow-hidden border-y border-line py-5.5 [animation-delay:.9s]'
		>
			<div className='marquee gap-12 text-[clamp(22px,3vw,34px)] font-medium tracking-[-0.03em] whitespace-nowrap'>
				{/* Rendered twice so the -50% translate loops seamlessly */}
				<MarqueeItems items={items} />
				<MarqueeItems items={items} hidden />
			</div>
		</div>
	)
}

type TMarqueeItemsProps = {
	items: string[]
	hidden?: boolean
}

function MarqueeItems({ items, hidden }: TMarqueeItemsProps) {
	return items.map(item => (
		<Fragment key={item}>
			<span aria-hidden={hidden || undefined}>{item}</span>
			<span aria-hidden='true' className='text-star'>
				✦
			</span>
		</Fragment>
	))
}
