type TStatusDotProps = { size?: string }

export function StatusDot({ size = 'size-1.75' }: TStatusDotProps) {
	return (
		<span
			aria-hidden='true'
			className={`pulse rounded-full bg-accent text-accent ${size}`}
		/>
	)
}
