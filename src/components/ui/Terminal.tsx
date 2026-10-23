import type { TTerminalLine, TTerminalTone } from '@/types/TerminalTypes'

const tones: Record<TTerminalTone, string> = {
	get: 'bg-[#E8F0FE] text-[#1D4ED8]',
	post: 'bg-[#E6F4EA] text-[#15803D]',
	put: 'bg-[#FDF1E1] text-[#B45309]',
	del: 'bg-[#FDECEC] text-[#B91C1C]',
}

type TTerminalProps = {
	title: string
	lines: TTerminalLine[]
	className?: string
	compact?: boolean
}

/** The "API log" card: a titled panel listing method badges and paths. */
export function Terminal(props: TTerminalProps) {
	const { title, lines, className = '', compact = false } = props

	return (
		<div
			className={`flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-line-soft bg-surface font-mono text-[13px] leading-[1.6] ${className}`}
		>
			<div className='px-5 py-3.5 text-xs tracking-[0.02em] text-[#6B6B6B] uppercase'>
				{title}
			</div>
			<div
				className={`mx-3 mb-3 flex flex-col justify-center divide-y divide-avatar overflow-x-auto rounded-[10px] border border-line-soft bg-white px-4 py-1.5 whitespace-nowrap ${
					compact ? '' : 'min-h-55'
				}`}
			>
				{lines.map((line, index) => (
					<TerminalRow key={index} line={line} />
				))}
			</div>
		</div>
	)
}

type TTerminalRowProps = { line: TTerminalLine }

function TerminalRow({ line }: TTerminalRowProps) {
	return (
		<div className='term-line py-2.25'>
			{line.method && (
				<span
					className={`mr-3.5 inline-block w-14.5 rounded-md py-0.5 text-center text-[11px] font-medium ${tones[line.tone ?? 'get']}`}
				>
					{line.method}
				</span>
			)}
			{line.text}
			{line.comment && (
				<span className='text-[#6B6B6B]'>
					{line.text ? ' ' : ''}
					{line.comment}
				</span>
			)}
			{line.caret && (
				<>
					{' '}
					<span className='caret' aria-hidden='true' />
				</>
			)}
		</div>
	)
}
