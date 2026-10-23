import {
	BulletList,
	dotVariant,
	SectionHeader,
	Shot,
	Terminal,
	Timeline,
	TimelineAside,
	TimelineDot,
} from '@/components/ui'
import type { TBackendContent } from '@/types/BackendTypes'
import type { TBackendHeading } from '@/types/SiteTypes'

type TBackendSectionProps = {
	heading: TBackendHeading
	backend: TBackendContent
}

export function BackendSection({ heading, backend }: TBackendSectionProps) {
	const { items, more } = backend

	return (
		<section id='backend' className='flex flex-col gap-14 pb-35'>
			<SectionHeader eyebrow={heading.eyebrow} title={heading.title}>
				<p className='m-0 max-w-95 text-[15px] text-muted'>{heading.intro}</p>
			</SectionHeader>

			<Timeline>
				{items.map((item, index) => (
					<li
						key={item.repo}
						className='relative flex flex-wrap gap-x-10 gap-y-5'
					>
						<TimelineDot
							variant={dotVariant(index, items.length)}
							top='top-1.5'
						/>
						<TimelineAside title={item.number} meta={item.category} />
						<a
							href={item.href}
							className={`card reveal flex min-w-0 flex-[1_1_560px] gap-x-8 gap-y-6 ${
								item.image ? 'flex-col' : 'flex-wrap'
							}`}
						>
							{item.image && (
								<Shot
									{...item.image}
									aspect='16 / 8'
									sizes='(max-width: 768px) 100vw, 860px'
									className='shot border border-line-soft'
								/>
							)}
							<div className='flex min-w-0 flex-[2_1_280px] flex-col gap-2.5'>
								<span className='font-mono text-xs text-muted'>
									{item.repo}
								</span>
								<h3 className='m-0 text-[26px] font-medium tracking-[-0.03em]'>
									{item.title} <span className='arrow'>↗</span>
								</h3>
								<BulletList items={item.bullets} />
								<span className='mt-auto font-mono text-xs text-muted'>
									{item.tech}
								</span>
							</div>
							{item.terminal && (
								<Terminal {...item.terminal} className='flex-[3_1_340px]' />
							)}
						</a>
					</li>
				))}
			</Timeline>

			<div className='reveal flex flex-wrap items-center gap-2.5 pl-10'>
				<span className='mr-1.5 text-sm text-muted'>{heading.moreLabel}</span>
				{more.map(link => (
					<a
						key={link.href}
						href={link.href}
						className='chip rounded-full border border-line-strong px-3.5 py-2 font-mono text-xs'
					>
						{link.label} ↗
					</a>
				))}
			</div>
		</section>
	)
}
