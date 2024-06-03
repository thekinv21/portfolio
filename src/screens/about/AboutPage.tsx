'use client'

import staticData from '@/json/interested.json'
import { gsap } from 'gsap'
import { ChevronRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './AboutPage.module.scss'

export function AboutPage() {
	const [interested, setInterested] = useState<string>(staticData[0].title)

	const handleView = () => {
		const project = document.getElementById('projects')
		if (project) {
			project.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		const updateInterest = () => {
			const randomIndex = Math.floor(Math.random() * staticData.length)
			setInterested(staticData[randomIndex].title)
		}

		updateInterest()
		const interval = setInterval(updateInterest, 5000)

		gsap.fromTo(
			'.animated-text',
			{ opacity: 0, x: 100 },
			{ opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: 'back.inOut' }
		)

		return () => clearInterval(interval)
	}, [])

	return (
		<section className={'section'}>
			<div className={styles.section_container}>
				<div className={styles.section_content}>
					<div className={styles.first_div_container}>
						<h1 className='animated-text'>Hi, I am Vadim 👋</h1>
						<span className='animated-text'>
							I am a passionate software engineer with an interest in{' '}
							<div>
								<h1 className='animated-text'>{interested}</h1>
							</div>
						</span>
					</div>

					<div className={styles.second_div_container}>
						<button
							onClick={handleView}
							className={`${styles.first_link_button} button`}
						>
							View My Work
							<ChevronRight strokeWidth={1} />
						</button>
						<Link
							type='application/pdf'
							href='#'
							className={`${styles.second_link_button} button`}
						>
							<Download strokeWidth={1} />
							Download CV
						</Link>
					</div>

					<div className={styles.social_container}>
						<a
							target='_blank'
							href='mailto:thekinv21@gmail.com'
							className={`${styles.link}`}
						>
							<Mail size={20} strokeWidth={1.5} />
						</a>

						<a
							target='_blank'
							href='https://github.com/thekinv21'
							className={`${styles.link}`}
						>
							<Github size={20} strokeWidth={1.5} />
						</a>

						<a
							target='_blank'
							href='https://www.linkedin.com/in/vadim-kiniabaev-035754178/'
							className={`${styles.link}`}
						>
							<Linkedin size={20} strokeWidth={1.5} />
						</a>
					</div>
				</div>

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
			</div>
		</section>
	)
}
