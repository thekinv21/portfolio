import type { ReactNode } from 'react'

type TSectionHeaderProps = {
	eyebrow: string
	title: string
	size?: 'lg' | 'md'
	children?: ReactNode
}

const titleSizes = {
	lg: 'text-[clamp(32px,4.5vw,52px)] leading-none',
	md: 'text-[clamp(30px,4vw,44px)] leading-[1.05]',
}

export function SectionHeader(props: TSectionHeaderProps) {
	const { eyebrow, title, size = 'lg', children } = props

	return (
		<div className='reveal flex flex-wrap items-end justify-between gap-4'>
			<div className='flex flex-col gap-2'>
				<span className='font-mono text-[13px] text-muted'>{eyebrow}</span>
				<h2
					className={`m-0 font-medium tracking-[-0.04em] ${titleSizes[size]}`}
				>
					{title}
				</h2>
			</div>
			{children}
		</div>
	)
}
