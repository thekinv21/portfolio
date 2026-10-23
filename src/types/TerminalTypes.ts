export type TTerminalTone = 'get' | 'post' | 'put' | 'del'

export type TTerminalLine = {
	method?: string
	tone?: TTerminalTone
	text?: string
	comment?: string
	caret?: boolean
}

export type TTerminalLog = {
	title: string
	lines: TTerminalLine[]
}
