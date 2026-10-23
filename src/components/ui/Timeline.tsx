import type { ReactNode } from 'react'

type TTimelineProps = {
	children: ReactNode
	gap?: string
}

/** Vertical timeline whose rail fills in as it scrolls into view. */
export function Timeline({ children, gap = 'gap-18' }: TTimelineProps) {
	return (
		<ol className={`tl relative m-0 flex list-none flex-col pl-10 ${gap}`}>
			<span
				aria-hidden='true'
				className='absolute top-2 bottom-2 left-1.75 w-px bg-line'
			/>
			<span
				aria-hidden='true'
				className='tl-fill absolute top-2 bottom-2 left-1.75 w-px bg-ink'
			/>
			{children}
		</ol>
	)
}

type TTimelineDotVariant = 'first' | 'last' | 'default'

export const dotVariant = (
	index: number,
	total: number,
): TTimelineDotVariant =>
	index === 0 ? 'first' : index === total - 1 ? 'last' : 'default'

type TTimelineDotProps = {
	variant?: TTimelineDotVariant
	top?: string
}

/** first: hollow dot with an accent core · last: filled dot · default: hollow */
export function TimelineDot({
	variant = 'default',
	top = 'top-1',
}: TTimelineDotProps) {
	return (
		<span
			aria-hidden='true'
			className={`dot absolute -left-10 flex size-3.75 items-center justify-center rounded-full border border-ink ${top} ${
				variant === 'last' ? 'bg-ink' : 'bg-white'
			}`}
		>
			{variant === 'first' && (
				<span className='size-1.75 rounded-full bg-accent' />
			)}
		</span>
	)
}

type TTimelineAsideProps = {
	title: string
	meta: string
}

/** Sticky year / number column used next to project and backend cards. */
export function TimelineAside({ title, meta }: TTimelineAsideProps) {
	return (
		<div className='reveal sticky top-8 flex flex-[0_0_150px] flex-col gap-1.5 self-start'>
			<span className='text-[30px] leading-none font-medium tracking-[-0.04em]'>
				{title}
			</span>
			<span className='font-mono text-xs text-muted'>{meta}</span>
		</div>
	)
}
