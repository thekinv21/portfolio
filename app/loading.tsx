export default function Loading() {
	return (
		<div
			role='status'
			aria-label='Loading'
			className='flex min-h-screen items-center justify-center bg-white'
		>
			<span className='pulse size-2.5 rounded-full bg-accent text-accent' />
		</div>
	)
}
