import { SectionHeader } from '@/components/ui'
import type { Article, SiteContent } from '@/content'

type TWritingSectionProps = {
	heading: SiteContent['sections']['writing']
	articles: Article[]
	mediumHref: string
}

export function WritingSection({
	heading,
	articles,
	mediumHref,
}: TWritingSectionProps) {
	return (
		<section id='writing' className='flex flex-col gap-8 pb-35'>
			<SectionHeader eyebrow={heading.eyebrow} title={heading.title}>
				<a
					href={mediumHref}
					className='link uline inline-flex min-h-11 items-center gap-1 text-[15px] text-muted'
				>
					{heading.link} <span className='arrow'>↗</span>
				</a>
			</SectionHeader>
			<div className='border-t border-ink'>
				{articles.map(article => (
					<a
						key={article.href}
						href={article.href}
						className='row flex flex-wrap items-center gap-x-7 gap-y-2 border-b border-line py-5.5'
					>
						<span className='flex-[0_0_120px] font-mono text-[13px] text-muted'>
							{article.date}
						</span>
						<span className='flex min-w-0 flex-[1_1_360px] flex-col gap-1'>
							<span className='text-[19px] font-medium tracking-[-0.02em]'>
								{article.title}
							</span>
							<span className='text-sm text-muted'>{article.summary}</span>
						</span>
						<span className='inline-flex items-center gap-3'>
							<span className='rounded-full border border-line-strong px-2.5 py-0.75 font-mono text-[11px]'>
								{article.lang}
							</span>
							<span className='big-arrow' aria-hidden='true'>
								↗
							</span>
						</span>
					</a>
				))}
			</div>
		</section>
	)
}
