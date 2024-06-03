'use client'

import { AboutPage } from '../about/AboutPage'
import { StackPage } from '../stack/StackPage'
import styles from './HomePage.module.scss'

export function HomePage() {
	return (
		<main className={styles.main_container}>
			<AboutPage />
			<StackPage />
		</main>
	)
}
