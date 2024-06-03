'use client'

import { AboutPage } from '../about/AboutPage'
import styles from './HomePage.module.scss'

export function HomePage() {
	return (
		<main className={styles.main_container}>
			<AboutPage />
		</main>
	)
}
