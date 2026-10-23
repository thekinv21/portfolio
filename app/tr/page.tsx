import type { Metadata } from 'next'

import { HomePage } from '@/components/home/HomePage'
import { getHomeContent } from '@/content'

const { title, description } = getHomeContent('tr').site.meta

export const metadata: Metadata = {
	title: { absolute: title },
	description,
}

export default function Page() {
	return <HomePage locale='tr' />
}
