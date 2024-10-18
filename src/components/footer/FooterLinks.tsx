import styles from './Footer.module.scss'

export function FooterLinks() {
	const footerLinks = [
		{
			section: 'Frameworks',
			links: [
				{ name: 'Javascript', href: 'https://www.w3schools.com/js/' },
				{ name: 'Typescript', href: 'https://www.typescriptlang.org/' },
				{ name: 'NextJS', href: 'https://nextjs.org/' },
				{ name: 'ReactJS', href: 'https://react.dev/' },
				{ name: 'NestJS', href: 'https://docs.nestjs.com/' },
			],
		},
		{
			section: 'Deployments',
			links: [
				{
					name: 'NextJS',
					href: 'https://medium.com/@thekinv21/deploying-next-js-app-on-ubuntu-server-20-04-with-nginx-and-pm2-c573e4da37b8',
				},
				{
					name: 'ReactJS',
					href: 'https://medium.com/@thekinv21/deploying-reactjs-app-on-ubuntu-server-20-04-using-nginx-9a4970b8a955',
				},
				{
					name: 'NestJS',
					href: 'https://medium.com/@thekinv21/deploying-a-nestjs-app-with-pm2-on-a-ubuntu-server-20-04-using-nginx-996a6533f2b7',
				},
				{
					name: 'PostgreSql',
					href: 'https://medium.com/@thekinv21/deploying-postgresql-database-on-ubuntu-server-20-04-fc7e6827b129',
				},
				{
					name: 'Apache Tomcat10',
					href: 'https://github.com/thekinv21/tomcat10_spring_boot_deployment',
				},
			],
		},
		{
			section: 'CSS Tools',
			links: [
				{ name: 'Tailwind Css', href: '#' },
				{ name: 'Bootstrap', href: '#' },
			],
		},
		{
			section: 'Contact me',
			links: [
				{ name: 'thekinv21@gmail.com', href: '#' },
				{ name: 'vadimkiniabaev@gmail.com', href: '#' },
			],
		},
	]

	return (
		<div className={styles.footer_links_grid}>
			{footerLinks.map((section, id: number) => (
				<div key={id}>
					<p>{section.section}</p>
					<nav>
						{section.links.map((link, id: number) => (
							<a key={id} href={link.href}>
								{link.name}
							</a>
						))}
					</nav>
				</div>
			))}
		</div>
	)
}
