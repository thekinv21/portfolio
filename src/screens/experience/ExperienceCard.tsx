import { IExperience, IExperienceTool } from '@/types/experience.types'
import Image from 'next/image'
import { Fragment } from 'react'

interface IExperienceCard {
	item: IExperience
}

export function ExperienceCard({ item }: IExperienceCard) {
	return (
		<Fragment>
			<div className='rounded-lg hover:scale-105 transition-all ease-in-out duration-300 bg-card h-[450px] text-card-foreground flex flex-col overflow-hidden border p-2'>
				<video
					poster={item.companyImageUrl}
					width={100}
					height={100}
					className='pointer-events-none mx-auto h-60 w-full object-cover object-top'
				/>
				<div className='flex flex-col'>
					<div className='space-y-1'>
						<h3 className='font-semibold tracking-tight mt-1 text-base'>
							{item.company} | {item.position}
						</h3>

						<time className='font-sans text-xs'>{item.year}</time>
						<div className='hidden font-sans text-xs underline print:visible'></div>
						<div className='max-w-full text-pretty font-sans text-xs text-muted-foreground line-clamp-3'>
							{item.description}
						</div>
					</div>
				</div>
				<div className='text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col'>
					<div className='flex flex-wrap gap-4'>
						{item.tools.map((tool: IExperienceTool, idx: number) => (
							<Image
								src={tool.imageUrl}
								alt={tool.title}
								width={40}
								height={40}
								priority
								key={idx}
							/>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	)
}
