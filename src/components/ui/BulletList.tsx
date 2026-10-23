type TBulletListProps = { items: string[] }

export function BulletList({ items }: TBulletListProps) {
	return (
		<ul className='m-0 flex list-disc flex-col gap-1.5 pl-4.5 text-[15px] leading-normal text-body'>
			{items.map(item => (
				<li key={item}>{item}</li>
			))}
		</ul>
	)
}
