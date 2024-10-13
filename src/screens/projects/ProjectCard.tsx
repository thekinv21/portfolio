import Image from 'next/image'
import { Fragment } from 'react'

interface IProjectCard {
	item: IProject
}

export function ProjectCard({ item }: IProjectCard) {
	return (
		<Fragment>
			<a
				target='_blank'
				href={item.url}
				className='rounded-lg hover:scale-105 transition-all ease-in-out duration-300 bg-card min-h-[460px] h-auto text-card-foreground flex flex-col overflow-hidden border p-2'
			>
				<Image
					src={item.imageUrl}
					alt={item.title}
					width={600}
					height={600}
					className='pointer-events-none mx-auto h-60 w-full object-cover object-top'
				/>
				<div className='flex flex-col px-5 pt-3'>
					<div className='space-y-4 opacity-70'>
						<h3 className='font-medium  uppercase'>{item.title}</h3>
						<time className='font-sans text-xs'>{item.date}</time>
						<div className='max-w-full text-xs text-muted-foreground line-clamp-2'>
							{item.description}
						</div>
					</div>
				</div>
				<div className='font-sans text-sm text-muted-foreground flex flex-col p-5'>
					<div className='flex flex-wrap gap-1'>
						{item.tools.map((tool: ITool) => (
							<div
								key={tool.id}
								className='inline-flex items-center rounded transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/90 text-white/90 font-light tracking-widest  px-4 py-0 text-[10px]'
							>
								{tool.name}
							</div>
						))}
					</div>
				</div>
			</a>
		</Fragment>
	)
}
