import type { TLabelValue } from '@/types/CommonTypes'

type TCaseStudyFactsProps = { facts: TLabelValue[] }

export function CaseStudyFacts({ facts }: TCaseStudyFactsProps) {
	return (
		<section className='reveal grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 border-b border-line pt-10 pb-30'>
			{facts.map(fact => (
				<div key={fact.label} className='flex flex-col gap-1'>
					<span className='font-mono text-xs text-muted'>{fact.label}</span>
					<span className='text-[17px] font-medium'>{fact.value}</span>
				</div>
			))}
		</section>
	)
}
