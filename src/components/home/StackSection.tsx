import { ChipList, SectionHeader } from '@/components/ui'
import type { SectionHeading, StackContent } from '@/content'

type TStackSectionProps = {
	heading: SectionHeading
	stack: StackContent
}

export function StackSection({ heading, stack }: TStackSectionProps) {
	const { groups, languages, certificate } = stack

	return (
		<section id='stack' className='flex flex-col gap-12 pb-35'>
			<SectionHeader {...heading} />
			<div className='border-t border-line'>
				{groups.map(group => (
					<div
						key={group.label}
						className='reveal flex flex-wrap gap-x-8 gap-y-3 border-b border-line py-6'
					>
						<span className='flex-[0_0_200px] font-medium'>{group.label}</span>
						<ChipList items={group.items} className='flex-[1_1_400px]' />
					</div>
				))}
			</div>

			<div className='flex flex-col gap-6 pt-10'>
				<div className='reveal flex items-baseline justify-between gap-4'>
					<h3 className='m-0 text-[26px] font-medium tracking-[-0.03em]'>
						{languages.title}
					</h3>
					<span className='text-sm text-muted'>{languages.count}</span>
				</div>
				<div className='grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-3'>
					{languages.items.map(language => (
						<div
							key={language.name}
							className='reveal flex flex-col gap-3.5 rounded-[14px] border border-line p-5.5'
						>
							<div className='flex items-baseline justify-between gap-3'>
								<span className='flex flex-col gap-0.5'>
									<span className='text-[19px] font-medium tracking-[-0.02em]'>
										{language.name}
									</span>
									<span className='text-[13px] text-muted'>
										{language.native}
									</span>
								</span>
								<span className='rounded-full border border-line-strong px-2.5 py-1 font-mono text-xs whitespace-nowrap'>
									{language.level}
								</span>
							</div>
							<div className='h-1 overflow-hidden rounded-full bg-track'>
								<div
									className='lang-fill h-full rounded-full bg-ink'
									style={{ width: `${language.percent}%` }}
								/>
							</div>
						</div>
					))}
				</div>
				<div className='reveal flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[14px] border border-dashed border-line-strong px-5.5 py-4.5'>
					<span className='font-mono text-xs text-muted'>
						{certificate.label}
					</span>
					<span className='font-medium'>{certificate.value}</span>
				</div>
			</div>
		</section>
	)
}
