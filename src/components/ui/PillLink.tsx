import type { ReactNode } from 'react'

import Link from 'next/link'

type TPillLinkVariant = 'solid' | 'outline' | 'subtle'
type TPillLinkSize = 'sm' | 'md' | 'lg'

type TPillLinkProps = {
	href: string
	children: ReactNode
	variant?: TPillLinkVariant
	size?: TPillLinkSize
	download?: string
	className?: string
	arrow?: ReactNode
}

const variants: Record<TPillLinkVariant, string> = {
	solid: 'border border-ink bg-ink text-white',
	outline: 'btn-ghost border border-ink',
	subtle: 'border border-line-strong',
}

const sizes: Record<TPillLinkSize, string> = {
	sm: 'min-h-10 px-4 text-sm',
	md: 'min-h-12 px-5 text-[15px]',
	lg: 'min-h-13 px-6.5 text-base',
}

const isInternal = (href: string) => href.startsWith('/') && !href.includes('.')

export function PillLink(props: TPillLinkProps) {
	const {
		href,
		children,
		variant = 'solid',
		size = 'sm',
		download,
		className = '',
		arrow = <span className='arrow'>↗</span>,
	} = props
	const classes = `btn link inline-flex items-center gap-2 rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`

	if (isInternal(href)) {
		return (
			<Link href={href} className={classes}>
				{children} {arrow}
			</Link>
		)
	}

	return (
		<a
			href={href}
			{...(download
				? { download }
				: { target: '_blank', rel: 'noopener noreferrer' })}
			className={classes}
		>
			{children} {arrow}
		</a>
	)
}
