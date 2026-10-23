import Image from 'next/image'

import { ArrowDown } from 'lucide-react'

import { PillLink } from '@/components/ui'
import type { Profile, SiteContent } from '@/content'

import { CopyEmailButton } from './CopyEmailButton'
import { StatusDot } from './StatusDot'

type TContactSectionProps = {
	profile: Profile
	site: SiteContent
}

export function ContactSection({ profile, site }: TContactSectionProps) {
	const { contact, footer } = site
	const heading = site.sections.contact

	return (
		<section
			id='contact'
			className='flex flex-col gap-16 border-t border-line pt-30 pb-10'
		>
			<div className='flex flex-wrap items-end justify-between gap-8'>
				<div className='flex min-w-0 flex-[1_1_560px] flex-col gap-6'>
					<span className='reveal font-mono text-[13px] text-muted'>
						{heading.eyebrow}
					</span>
					<h2 className='reveal m-0 text-[clamp(44px,7vw,96px)] leading-[0.95] font-semibold tracking-[-0.055em]'>
						{heading.title}
						<br />
						<span className='text-faint'>{heading.titleMuted}</span>
					</h2>
				</div>
				<div className='reveal flex flex-[0_1_340px] items-center gap-3.5 rounded-full border border-line py-3.5 pr-4.5 pl-3.5'>
					<Image
						src={profile.portrait}
						alt=''
						width={48}
						height={48}
						className='size-12 rounded-full bg-portrait object-cover object-top'
					/>
					<div className='flex flex-col'>
						<span className='text-[15px] font-medium'>{profile.name}</span>
						<span className='inline-flex items-center gap-2 text-[13px] text-muted'>
							<StatusDot />
							{site.hero.status}
						</span>
					</div>
				</div>
			</div>

			<div className='flex flex-wrap gap-12'>
				<div className='min-w-0 flex-[2_1_560px] border-t border-ink'>
					{contact.rows.map(row => (
						<a
							key={row.label}
							href={row.href}
							className='row reveal flex items-center justify-between gap-4 border-b border-line py-7'
						>
							<span className='flex min-w-0 flex-col gap-1'>
								<span className='font-mono text-xs text-muted'>
									{row.label}
								</span>
								<span className='text-[clamp(22px,3vw,34px)] font-medium tracking-[-0.03em] wrap-break-word'>
									{row.value}
								</span>
							</span>
							<span className='big-arrow' aria-hidden='true'>
								↗
							</span>
						</a>
					))}
				</div>

				<div className='reveal flex min-w-0 flex-[1_1_260px] flex-col gap-7 pt-7'>
					<div className='flex flex-wrap gap-2'>
						<CopyEmailButton email={profile.email} labels={contact.copy} />
						<PillLink
							href={profile.cv.href}
							download={profile.cv.fileName}
							variant='outline'
							size='md'
							arrow={
								<ArrowDown
									size={16}
									className='arrow-down'
									aria-hidden='true'
								/>
							}
						>
							{contact.cv}
						</PillLink>
					</div>
					{contact.details.map(detail => (
						<div key={detail.label} className='flex flex-col gap-1'>
							<span className='font-mono text-xs text-muted'>
								{detail.label}
							</span>
							<span className='text-[17px] font-medium'>{detail.value}</span>
						</div>
					))}
				</div>
			</div>

			<footer className='flex flex-col gap-5 pt-10'>
				<span
					aria-hidden='true'
					className='wordmark reveal block overflow-hidden text-[clamp(56px,13.5vw,176px)] leading-[0.85] font-semibold tracking-[-0.06em] whitespace-nowrap'
				>
					{profile.lastName}
				</span>
				<div className='flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5 text-sm text-muted'>
					<span>{footer.copyright}</span>
					<a
						href='#top'
						className='link uline inline-flex min-h-11 items-center gap-1.5'
					>
						{footer.backToTop} <span className='arrow'>↑</span>
					</a>
				</div>
			</footer>
		</section>
	)
}
