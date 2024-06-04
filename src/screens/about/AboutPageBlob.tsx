'use client'

import Image from 'next/image'
import styles from './AboutPage.module.scss'

export function AboutPageBlob() {
	return (
		<div className='relative flex min-h-[400px] h-auto w-full w-auto items-center justify-center overflow-hidden rounded-lg'>
			<div className={styles.blob_container}>
				<Image
					src='/me.jpg'
					alt='me'
					priority
					layout='fill'
					className={styles.image_inside}
					draggable={false}
				/>
			</div>
		</div>
	)
}
