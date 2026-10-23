import {
	BulletList,
	ChipList,
	dotVariant,
	SectionHeader,
	Timeline,
	TimelineDot,
} from '@/components/ui'
import type { TSectionHeading } from '@/types/CommonTypes'
import type { TExperienceItem } from '@/types/ExperienceTypes'

type TExperienceSectionProps = {
	heading: TSectionHeading
	items: TExperienceItem[]
}

export function ExperienceSection({ heading, items }: TExperienceSectionProps) {
	return (
		<section id='experience' className='flex flex-col gap-14 py-35'>
			<SectionHeader {...heading} />
			<Timeline>
				{items.map((item, index) => (
					<li key={item.period} className='relative flex flex-col gap-6'>
						<TimelineDot variant={dotVariant(index, items.length)} />

						<div className='reveal flex flex-col gap-1'>
							<span className='font-mono text-[13px] text-muted'>
								{item.period}
							</span>
							<h3 className='m-0 text-[28px] font-medium tracking-[-0.03em]'>
								{item.role}
							</h3>
							<span className='text-muted'>{item.company}</span>
						</div>

						{item.summary && (
							<p className='reveal m-0 max-w-180 text-[17px] leading-relaxed'>
								{item.summary}
							</p>
						)}

						{item.projects && (
							<div className='flex max-w-205 flex-col gap-4'>
								{item.projects.map(project => (
									<div
										key={project.title}
										className='drop flex flex-col gap-3 rounded-xl border border-line p-6'
									>
										<div className='flex items-baseline justify-between gap-3'>
											<h4 className='m-0 text-[17px] font-semibold'>
												{project.title}
											</h4>
											{project.period && (
												<span className='font-mono text-xs whitespace-nowrap text-muted'>
													{project.period}
												</span>
											)}
										</div>
										{project.subtitle && (
											<span className='text-sm text-muted'>
												{project.subtitle}
											</span>
										)}
										<BulletList items={project.bullets} />
									</div>
								))}
							</div>
						)}

						{item.bullets && (
							<div className='reveal max-w-180'>
								<BulletList items={item.bullets} />
							</div>
						)}

						{item.note && (
							<p className='reveal m-0 max-w-180 text-[15px] leading-relaxed text-body'>
								{item.note}
							</p>
						)}

						{item.tags && (
							<ChipList items={item.tags} size='sm' className='reveal' />
						)}
					</li>
				))}
			</Timeline>
		</section>
	)
}
