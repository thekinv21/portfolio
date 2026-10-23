import type { Metadata } from 'next'

import { NotFoundPage } from '@/components/not-found/NotFoundPage'

export const metadata: Metadata = {
	title: { absolute: 'Page not found — Vadim Kiniabaev' },
}

export default function NotFound() {
	return <NotFoundPage />
}
