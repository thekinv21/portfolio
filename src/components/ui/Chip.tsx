type TChipSize = 'sm' | 'md'

type TChipProps = {
	children: string
	size?: TChipSize
	interactive?: boolean
}

const sizes: Record<TChipSize, string> = {
	sm: 'px-3 py-1.5 text-[13px]',
	md: 'px-3.5 py-2 text-sm',
}

export function Chip({
	children,
	size = 'md',
	interactive = true,
}: TChipProps) {
	return (
		<span
			className={`rounded-full border border-line-strong ${sizes[size]} ${
				interactive ? 'chip' : ''
			}`}
		>
			{children}
		</span>
	)
}

type TChipListProps = {
	items: string[]
	size?: TChipSize
	interactive?: boolean
	className?: string
}

export function ChipList(props: TChipListProps) {
	const { items, size, interactive, className = '' } = props

	return (
		<div className={`flex flex-wrap gap-2 ${className}`}>
			{items.map(item => (
				<Chip key={item} size={size} interactive={interactive}>
					{item}
				</Chip>
			))}
		</div>
	)
}
