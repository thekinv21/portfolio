import Image from 'next/image'

import type { Media } from '@/content'

type TShotProps = Media & {
	sizes: string
	className?: string
	preload?: boolean
}

/** Screenshot frame: fixed aspect ratio, cover-fit image, zooms on card hover. */
export function Shot(props: TShotProps) {
	const {
		src,
		alt,
		aspect = '16 / 9',
		position = 'top',
		sizes,
		className = 'shot',
		preload,
	} = props

	return (
		<div className={`relative ${className}`} style={{ aspectRatio: aspect }}>
			<Image
				src={src}
				alt={alt}
				fill
				sizes={sizes}
				preload={preload}
				className='object-cover'
				style={{ objectPosition: position }}
			/>
		</div>
	)
}
