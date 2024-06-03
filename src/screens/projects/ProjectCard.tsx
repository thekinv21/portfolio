import { Github } from 'lucide-react'
import { Fragment } from 'react'

interface IProjectCard {
	item: IProject
}

export function ProjectCard({ item }: IProjectCard) {
	return (
		<Fragment>
			<div className='rounded-lg hover:scale-105 transition-all ease-in-out duration-300 bg-card min-h-[400px] text-card-foreground flex flex-col overflow-hidden border p-2'>
				<video
					poster={item.imageUrl}
					width={300}
					height={300}
					className='pointer-events-none mx-auto h-60 w-full object-cover object-top'
				/>
				<div className='flex flex-col'>
					<div className='space-y-1'>
						<h3 className='font-semibold tracking-tight mt-1 text-base'>
							{item.title}
						</h3>
						<time className='font-sans text-xs'>{item.date}</time>
						<div className='hidden font-sans text-xs underline print:visible'></div>
						<div className='max-w-full text-pretty font-sans text-xs text-muted-foreground line-clamp-2'>
							{item.description}
						</div>
					</div>
				</div>
				<div className='text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col'>
					<div className='mt-2 flex flex-wrap gap-1'>
						{item.tools.map((tool: ITool) => (
							<div
								key={tool.id}
								className='inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-100 text-gray-100-foreground hover:bg-gray-100/80 px-1 py-0 text-[10px]'
							>
								{tool.name}
							</div>
						))}
					</div>
				</div>
				<div className='flex items-center pt-2'>
					<div className='flex flex-row flex-wrap items-start gap-1'>
						<a target='_blank' href={item.url}>
							<div className='items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-100  shadow hover:bg-gray-100/80 flex gap-2 px-2 py-1 text-[10px]'>
								<Github size={15} strokeWidth={1.5} />
								Source Code
							</div>
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
