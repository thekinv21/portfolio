'use client'

import { AboutPage } from '../about/AboutPage'
import { ExperiencePage } from '../experience/ExperiencePage'
import { ProjectsPage } from '../projects/ProjectsPage'
import { StackPage } from '../stack/StackPage'
import styles from './HomePage.module.scss'

export function HomePage() {
	return (
		<main className={styles.main_container}>
			<AboutPage />
			<ProjectsPage />
			<StackPage />
			<ExperiencePage />
		</main>
	)
}
