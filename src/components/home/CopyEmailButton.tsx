'use client'

import { useEffect, useRef, useState } from 'react'

import { Copy } from 'lucide-react'

type TCopyState = 'idle' | 'done' | 'failed'

type TCopyEmailButtonProps = {
	email: string
	labels: { idle: string; done: string }
}

export function CopyEmailButton({ email, labels }: TCopyEmailButtonProps) {
	const [state, setState] = useState<TCopyState>('idle')
	const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

	useEffect(() => () => clearTimeout(timer.current), [])

	const copy = async () => {
		let next: TCopyState = 'done'
		try {
			await navigator.clipboard.writeText(email)
		} catch {
			// Clipboard blocked — show the address so it can be copied by hand
			next = 'failed'
		}
		setState(next)
		clearTimeout(timer.current)
		timer.current = setTimeout(() => setState('idle'), 2000)
	}

	const label =
		state === 'done' ? labels.done : state === 'failed' ? email : labels.idle

	return (
		<button
			type='button'
			onClick={copy}
			className='btn inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-ink bg-ink px-5 text-[15px] font-medium text-white'
		>
			<Copy size={15} aria-hidden='true' />
			<span aria-live='polite'>{label}</span>
		</button>
	)
}
