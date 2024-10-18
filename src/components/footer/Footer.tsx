'use client'

import { FooterLogo } from './FooterLogo'
import { FooterSocial } from './FooterSocial'

import styles from './Footer.module.scss'
import { FooterLinks } from './FooterLinks'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_container}>
				<div className={styles.footer_content_grid}>
					<div>
						<FooterLogo />
						<FooterSocial />
					</div>
					<FooterLinks />
				</div>
				<p className={styles.company_}>
					© {new Date().getFullYear()} Vadim Kiniabaev
				</p>
			</div>
		</footer>
	)
}
