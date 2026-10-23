import { SectionHeader } from '@/components/ui'
import type { TReference } from '@/types/ReferenceTypes'
import type { TReferencesHeading } from '@/types/SiteTypes'

type TReferencesSectionProps = {
	heading: TReferencesHeading
	references: TReference[]
}

export function ReferencesSection({
	heading,
	references,
}: TReferencesSectionProps) {
	const companies = Map.groupBy(references, person => person.company)

	return (
		<section id='references' className='flex flex-col gap-10 pb-35'>
			<SectionHeader eyebrow={heading.eyebrow} title={heading.title}>
				<span className='text-sm text-muted'>{heading.note}</span>
			</SectionHeader>
			<div className='border-t border-ink'>
				{[...companies].map(([company, people]) => (
					<div
						key={company}
						className='reveal flex flex-wrap gap-x-8 gap-y-2 border-b border-line py-4'
					>
						<div className='flex flex-[0_0_200px] flex-col gap-1 pt-5'>
							<span className='font-medium'>{company}</span>
							<span className='font-mono text-xs text-muted'>
								{String(people.length).padStart(2, '0')}
							</span>
						</div>
						<ul className='m-0 flex min-w-0 flex-[1_1_480px] list-none flex-col p-0'>
							{people.map(person => (
								<li
									key={person.email}
									className='row flex items-center gap-5 rounded-xl py-4'
								>
									<span
										aria-hidden='true'
										className='flex size-12 shrink-0 items-center justify-center rounded-full bg-avatar text-[15px] font-medium tracking-[-0.02em]'
									>
										{person.initials}
									</span>
									<div className='flex min-w-0 flex-1 flex-col gap-0.5'>
										<span className='text-[19px] font-medium tracking-[-0.02em]'>
											{person.name}
										</span>
										<span className='text-sm text-muted'>{person.role}</span>
										<a
											href={`mailto:${person.email}`}
											className='uline mt-1 self-start font-mono text-xs break-all text-body'
										>
											{person.email}
										</a>
									</div>
									<a
										href={person.linkedin}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={`${person.name} — LinkedIn`}
										className='big-arrow'
									>
										↗
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}
