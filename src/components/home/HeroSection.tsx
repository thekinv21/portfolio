import Image from 'next/image'

import { ArrowDown, MapPin } from 'lucide-react'

import { PillLink, RichText } from '@/components/ui'
import type { Profile, SiteContent } from '@/content'

import { StatusDot } from './StatusDot'

type THeroSectionProps = {
	profile: Profile
	hero: SiteContent['hero']
}

export function HeroSection({ profile, hero }: THeroSectionProps) {
	const socials = [
		{ label: 'GitHub', href: profile.links.github },
		{ label: 'LinkedIn', href: profile.links.linkedin },
		{ label: 'Medium', href: profile.links.medium },
	]

	return (
		<section className='mx-auto flex max-w-280 flex-col gap-18 px-6 pt-18 pb-22'>
			<div className='flex flex-wrap items-center gap-16'>
				<div className='flex min-w-0 flex-[1_1_520px] flex-col gap-7'>
					<span className='rise inline-flex items-center gap-2.5 self-start rounded-full border border-line-strong px-3.5 py-2 text-sm text-body [animation-delay:.1s]'>
						<StatusDot />
						{hero.status}
					</span>
					<div className='flex flex-col gap-3.5'>
						<span className='rise font-mono text-sm text-muted [animation-delay:.15s]'>
							{hero.greeting}
						</span>
						<h1 className='m-0 text-[clamp(52px,8.5vw,112px)] leading-[0.92] font-semibold tracking-[-0.055em]'>
							<span className='mask'>
								<span className='[animation-delay:.2s]'>
									{profile.firstName}
								</span>
							</span>
							<span className='mask'>
								<span className='[animation-delay:.32s]'>
									{profile.lastName}
									<span className='text-accent'>.</span>
								</span>
							</span>
						</h1>
					</div>
					<p className='rise m-0 max-w-130 text-xl leading-normal text-body [animation-delay:.55s]'>
						<RichText text={hero.intro} />
					</p>
					<div className='rise flex flex-wrap items-center gap-3 [animation-delay:.7s]'>
						<PillLink
							href={profile.cv.href}
							size='md'
							download={profile.cv.fileName}
							arrow={
								<ArrowDown
									size={16}
									className='arrow-down'
									aria-hidden='true'
								/>
							}
						>
							{hero.cv}
						</PillLink>
						<span className='ml-3 inline-flex gap-5 text-[15px]'>
							{socials.map(social => (
								<a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className='uline inline-flex min-h-11 items-center text-muted'
								>
									{social.label}
								</a>
							))}
						</span>
					</div>
				</div>

				<div className='relative mx-auto min-w-65 flex-[0_1_400px] p-6'>
					<RotatingBadge text={hero.badge} />
					<div className='clipin relative aspect-4/5 overflow-hidden rounded-[28px] bg-portrait'>
						<Image
							src={profile.portrait}
							alt={hero.portraitAlt}
							fill
							preload
							sizes='(max-width: 768px) 90vw, 400px'
							className='zoomout object-cover object-top'
							draggable={false}
						/>
					</div>
					<div className='float-1 absolute bottom-14 -left-2 flex flex-col gap-0.5 rounded-2xl border border-line-strong bg-white px-4.5 py-3.5 shadow-[0_12px_32px_rgba(17,17,17,0.08)]'>
						<span className='text-[28px] leading-none font-semibold tracking-[-0.04em]'>
							{hero.stat.value}
						</span>
						<span className='text-[13px] text-muted'>{hero.stat.label}</span>
					</div>
					<div className='float-2 absolute -right-1 bottom-0 inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-2.5 text-[13px] text-white'>
						<MapPin size={14} aria-hidden='true' />
						{hero.location}
					</div>
				</div>
			</div>

			<div className='rise grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 border-t border-line pt-7 [animation-delay:.9s]'>
				{hero.facts.map(fact => (
					<div key={fact.label} className='flex flex-col gap-1'>
						<span className='font-mono text-xs text-muted'>{fact.label}</span>
						<span className='font-medium'>{fact.value}</span>
					</div>
				))}
			</div>

			<div className='rise flex flex-wrap items-center gap-x-4 gap-y-2.5 rounded-[14px] border border-line px-5 py-4 [animation-delay:1s]'>
				<span className='inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 font-mono text-xs text-white'>
					<StatusDot size='size-1.5' />
					{hero.now.label}
				</span>
				<span className='text-[15px] text-body'>
					<RichText text={hero.now.text} />
				</span>
				<span className='ml-auto font-mono text-xs text-muted'>
					{hero.now.updated}
				</span>
			</div>
		</section>
	)
}

function RotatingBadge({ text }: { text: string }) {
	return (
		<svg
			className='spin-slow absolute -top-2.5 -right-2.5 z-2 size-33'
			aria-hidden='true'
			viewBox='0 0 200 200'
		>
			<defs>
				<path
					id='hero-badge-circle'
					d='M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0'
				/>
			</defs>
			<circle
				cx='100'
				cy='100'
				r='98'
				fill='#FFFFFF'
				stroke='#111111'
				strokeWidth='1'
			/>
			<text className='font-mono text-[15px] tracking-[3px]' fill='#111111'>
				<textPath href='#hero-badge-circle'>{text}</textPath>
			</text>
			<circle cx='100' cy='100' r='8' fill='#111111' />
		</svg>
	)
}
