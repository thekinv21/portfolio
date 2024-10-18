import styles from './Footer.module.scss'

export function FooterLogo() {
	return (
		<a href='/' className={styles.logo}>
			<img src='/next.svg' alt='logo' draggable={false} />
			<p>Here is my favorite Programming Language</p>
		</a>
	)
}
