'use client'

import Link from 'next/link'

import { routes } from '@/lib/routes'

type TErrorProps = {
	error: Error & { digest?: string }
	reset: () => void
}

export default function ErrorBoundary({ reset }: TErrorProps) {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center text-ink'>
			<span className='font-mono text-[13px] text-muted'>Error</span>
			<h1 className='m-0 text-[clamp(32px,4.5vw,52px)] leading-none font-medium tracking-[-0.04em]'>
				Something went wrong.
			</h1>
			<div className='flex flex-wrap justify-center gap-3'>
				<button
					type='button'
					onClick={reset}
					className='btn inline-flex min-h-12 cursor-pointer items-center rounded-full border border-ink bg-ink px-5 text-[15px] font-medium text-white'
				>
					Try again
				</button>
				<Link
					href={routes.home()}
					className='btn btn-ghost inline-flex min-h-12 items-center rounded-full border border-ink px-5 text-[15px] font-medium'
				>
					Back to portfolio
				</Link>
			</div>
		</div>
	)
}
