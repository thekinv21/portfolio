import Image from 'next/image'
import styles from './Footer.module.scss'

export function FooterLogo() {
	return (
		<a href='/' className={styles.logo}>
			<Image
				width={100}
				height={100}
				src='/next.svg'
				alt='logo'
				draggable={false}
			/>
			<p>Here is my favorite Programming Language</p>
		</a>
	)
}
