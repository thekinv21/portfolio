import { stack } from '../../../public/svg'

import { StackHeading } from './StackHeading'
import { StackList } from './StackList'

export function StackPage() {
	return (
		<section className='section'>
			<div className='w-full container px-4 md:px-6  gap-6  lg:gap-12  flex-col flex'>
				<StackHeading />
				<StackList stacks={stack} />
			</div>
		</section>
	)
}
