import type { TFlowBox } from '@/types/CaseStudyTypes'

type TFlowBoxProps = {
	box: TFlowBox
	highlighted?: boolean
}

export function FlowBox({ box, highlighted }: TFlowBoxProps) {
	return (
		<div
			className={`flex min-w-0 flex-[1_1_260px] flex-col gap-3 rounded-2xl border p-6 ${
				highlighted ? 'border-ink' : 'border-line bg-surface'
			}`}
		>
			<span className='font-mono text-xs text-muted'>{box.label}</span>
			<span className='text-[22px] font-medium tracking-[-0.02em]'>
				{box.title}
			</span>
			<ul className='m-0 flex list-disc flex-col gap-1 pl-4.5 text-[15px] text-body'>
				{box.items.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	)
}
