import type { TLink, TMedia } from './CommonTypes'
import type { TTerminalLog } from './TerminalTypes'

export type TBackendItem = {
	number: string
	category: string
	repo: string
	href: string
	title: string
	bullets: string[]
	tech: string
	image?: TMedia
	terminal?: TTerminalLog
}

export type TBackendContent = {
	items: TBackendItem[]
	more: TLink[]
}
