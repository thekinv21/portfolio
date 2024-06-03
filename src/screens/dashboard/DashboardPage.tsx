'use client'

import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Dashboard.module.scss'

export function DashboardPage() {
	return (
		<main className={styles.main_container}>
			<section>
				<div className={styles.section_container}>
					<div className={styles.section_content}>
						<div className={styles.first_div_container}>
							<h1>Hi, I am Vadim 👋</h1>
							<span>
								I am a passionate software engineer with an interest in{' '}
								<div>
									<h1>Frontend Frameworks.</h1>
								</div>
							</span>
						</div>

						<div className={styles.second_div_container}>
							<Link className={styles.first_link_button} href='#'>
								View My Work
								<ChevronRight strokeWidth={1} />
							</Link>
							<Link href='#' className={styles.second_link_button}>
								Contact Me
								<ChevronRight strokeWidth={1} />
							</Link>
						</div>

						<div className={styles.social_container}>
							<a href='mailto:hello@example.com' className={styles.link}>
								<Mail size={20} strokeWidth={1.5} />
							</a>

							<a href='https://github.com/' className={styles.link}>
								<Github size={20} strokeWidth={1.5} />
							</a>

							<a href='https://www.linkedin.com/' className={styles.link}>
								<Linkedin size={20} strokeWidth={1.5} />
							</a>
						</div>
					</div>

					<div className='relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg'>
						<Image
							src='/svg/small.svg'
							alt='small_svg'
							width={100}
							height={100}
							priority
							className='z-10 bg-green-500'
						/>

						<Image
							src='/svg/medium.svg'
							alt='medium_svg'
							className='z-20 bg-red-500'
							width={200}
							height={200}
							priority
						/>

						<Image
							src='/svg/big.svg'
							alt='big_svg'
							width={300}
							height={300}
							priority
							className='z-30 bg-orange-500'
						/>
					</div>
				</div>
			</section>
		</main>
	)
}
