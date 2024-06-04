'use client'

import styles from './AboutPage.module.scss'
import { AboutPageBlob } from './AboutPageBlob'
import { AboutPageHeading } from './AboutPageHeading'

export function AboutPage() {
	return (
		<section className={'section'}>
			<div className={styles.section_container}>
				<AboutPageHeading />
				<AboutPageBlob />
			</div>
		</section>
	)
}
