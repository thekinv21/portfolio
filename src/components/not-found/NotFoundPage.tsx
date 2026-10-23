import Link from 'next/link'

import { PillLink, Terminal } from '@/components/ui'
import { notFoundContent as content, profile } from '@/content'
import { routes } from '@/lib/routes'

const DIGITS = ['4', '0', '4']

export function NotFoundPage() {
	return (
		<div className='flex min-h-screen flex-col bg-white text-ink'>
			<header className='mx-auto box-border flex w-full max-w-280 items-center justify-between gap-4 px-6 py-8'>
				<Link
					href={routes.home()}
					className='inline-flex min-h-11 items-center font-semibold'
				>
					{profile.name}
				</Link>
				<span className='font-mono text-[13px] text-muted'>
					{content.badge}
				</span>
			</header>

			<main className='mx-auto box-border flex w-full max-w-280 flex-auto flex-wrap items-center gap-14 px-6 pt-6 pb-20'>
				<div className='flex min-w-0 flex-[1_1_480px] flex-col gap-7'>
					<h1
						aria-label='404'
						className='m-0 flex text-[clamp(120px,20vw,240px)] leading-[0.85] font-semibold tracking-[-0.07em]'
					>
						{DIGITS.map((digit, index) => (
							<span
								key={index}
								aria-hidden='true'
								className='mask inline-block'
							>
								<span
									className={index === 1 ? 'drift text-faint' : ''}
									style={{ animationDelay: `${0.1 + index * 0.1}s` }}
								>
									{digit}
								</span>
							</span>
						))}
					</h1>
					<div className='rise flex flex-col gap-3 [animation-delay:.45s]'>
						<h2 className='m-0 text-[clamp(26px,3.5vw,40px)] leading-[1.1] font-medium tracking-[-0.04em]'>
							{content.title}
						</h2>
						<p className='m-0 max-w-115 text-lg leading-[1.55] text-muted'>
							{content.text}
						</p>
					</div>
					<div className='rise flex flex-wrap gap-3 [animation-delay:.6s]'>
						<PillLink
							href={routes.home()}
							size='lg'
							className='back'
							arrow={<span className='arrow order-first'>←</span>}
						>
							{content.back}
						</PillLink>
						<PillLink
							href={`mailto:${profile.email}`}
							size='lg'
							variant='outline'
							arrow={null}
						>
							{content.report}
						</PillLink>
					</div>
				</div>
				<Terminal
					{...content.log}
					compact
					className='rise flex-[1_1_360px] [animation-delay:.75s]'
				/>
			</main>
		</div>
	)
}
