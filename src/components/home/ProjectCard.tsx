import { Lock } from 'lucide-react'

import { BulletList, PillLink, Shot } from '@/components/ui'
import type { Project, ProjectMock } from '@/content'
import { routes } from '@/lib/routes'

const SHOT_SIZES = '(max-width: 768px) 100vw, 860px'

type TProjectCardProps = { project: Project }

export function ProjectCard({ project }: TProjectCardProps) {
	return (
		<article className='card reveal flex min-w-0 flex-[1_1_560px] flex-col gap-5'>
			{project.images && (
				<div className='flex flex-col gap-3'>
					{project.images.map(image => (
						<Shot key={image.src} {...image} sizes={SHOT_SIZES} />
					))}
				</div>
			)}
			{project.mock && <LikeMock mock={project.mock} />}

			<div className='flex flex-col gap-3'>
				<h3 className='m-0 text-[26px] font-medium tracking-[-0.03em]'>
					{project.title}
				</h3>
				<p className='m-0 max-w-170 leading-[1.55] text-body'>
					{project.description}
				</p>
				<div className='max-w-170'>
					<BulletList items={project.bullets} />
				</div>
				<span className='font-mono text-xs text-muted'>{project.tech}</span>
				{project.links.length > 0 && (
					<div className='flex flex-wrap gap-2 pt-1'>
						{project.links.map(link => (
							<PillLink
								key={link.label}
								href={
									link.caseStudy !== undefined
										? routes.caseStudy(link.caseStudy)
										: link.href
								}
								variant={link.primary ? 'solid' : 'subtle'}
							>
								{link.label}
							</PillLink>
						))}
					</div>
				)}
			</div>
		</article>
	)
}

const PANEL = 'rounded-[10px] border border-line-soft bg-white'
const ROW_WIDTHS = ['w-[92%]', 'w-[78%]', 'w-[86%]']

/** Internal system without public screenshots — an illustrated stand-in. */
function LikeMock({ mock }: { mock: ProjectMock }) {
	return (
		<div className='shot box-border flex flex-col gap-4 border border-line-soft bg-surface p-7'>
			<div className='flex flex-wrap items-center justify-between gap-2'>
				<span className='font-mono text-xs tracking-[0.02em] text-muted'>
					{mock.label}
				</span>
				<span className='rounded-full border border-line-strong bg-white px-2.5 py-1 text-xs text-muted'>
					{mock.note}
				</span>
			</div>
			<div className='grid grid-cols-3 gap-2.5'>
				{mock.steps.map((step, index) => (
					<div
						key={step.step}
						className={`flex flex-col gap-1.5 p-4 ${PANEL} ${
							index === mock.steps.length - 1 ? 'border-ink' : ''
						}`}
					>
						<span className='font-mono text-[11px] text-muted'>
							{step.step}
						</span>
						<span className='text-lg font-medium'>{step.label}</span>
					</div>
				))}
			</div>
			<div
				className={`flex flex-wrap items-center justify-between gap-2.5 px-4 py-3.5 ${PANEL}`}
			>
				<span className='inline-flex items-center gap-2.5 text-[15px]'>
					<Lock size={16} aria-hidden='true' />
					{mock.lock}
				</span>
				<span className='rounded-md bg-[#FDF1E1] px-2.5 py-0.75 font-mono text-[11px] font-medium text-[#B45309]'>
					{mock.live}
				</span>
			</div>
			<div className={`flex flex-col gap-2.5 px-4 py-3.5 ${PANEL}`}>
				<div className='flex justify-between gap-2 font-mono text-[11px] text-muted'>
					<span>{mock.table}</span>
					<span>{mock.tableNote}</span>
				</div>
				{ROW_WIDTHS.map(width => (
					<span key={width} className={`block h-2 rounded bg-track ${width}`} />
				))}
			</div>
		</div>
	)
}
