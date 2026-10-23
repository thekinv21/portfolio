import { ChipList } from '@/components/ui'
import type { TSection } from '@/types/CaseStudyTypes'

import { EYEBROW } from '../styles'

type TStackSectionProps = { section: TSection<'stack'> }

export function StackSection({ section }: TStackSectionProps) {
	return (
		<section className='reveal flex flex-col gap-6 pb-30'>
			<span className={EYEBROW}>{section.eyebrow}</span>
			<ChipList items={section.items} interactive={false} />
		</section>
	)
}
