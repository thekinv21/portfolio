import { EYEBROW, TITLE } from '../styles'
import type { TSection } from './types'

type TLayersSectionProps = { section: TSection<'layers'> }

export function LayersSection({ section }: TLayersSectionProps) {
	const { layers } = section

	return (
		<section className='flex flex-wrap gap-12 pb-30'>
			<div className='reveal flex min-w-0 flex-[1_1_280px] flex-col gap-4'>
				<span className={EYEBROW}>{section.eyebrow}</span>
				<h2 className={TITLE}>{section.title}</h2>
				{section.paragraphs.map(paragraph => (
					<p key={paragraph} className='m-0 leading-relaxed text-body'>
						{paragraph}
					</p>
				))}
			</div>
			<ol
				aria-label={section.listLabel}
				className='reveal m-0 flex min-w-0 flex-[2_1_520px] list-none flex-col gap-2 p-0'
			>
				{layers.map((layer, index) => (
					<li
						key={layer.name}
						className={`layer flex flex-wrap justify-between gap-x-4 gap-y-1 rounded-xl border px-5 py-4 ${
							index === layers.length - 1 ? 'border-ink' : 'border-line'
						}`}
					>
						<span className='font-mono text-[15px] font-medium'>
							{layer.name}
						</span>
						<span className='text-sm text-muted'>{layer.description}</span>
					</li>
				))}
				<li className='flex items-center gap-2 pt-1 font-mono text-xs text-muted'>
					<span aria-hidden='true'>↓</span>
					{section.note}
				</li>
			</ol>
		</section>
	)
}
