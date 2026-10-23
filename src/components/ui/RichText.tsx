import { Fragment } from 'react'

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`)/g

type TRichTextProps = { text: string }

/**
 * Renders the tiny markup used in the JSON content:
 * `**text**` → emphasised text, `` `code` `` → monospace.
 */
export function RichText({ text }: TRichTextProps) {
	return text.split(TOKEN).map((part, index) => {
		if (part.startsWith('**') && part.endsWith('**')) {
			return (
				<span key={index} className='font-medium text-ink'>
					{part.slice(2, -2)}
				</span>
			)
		}
		if (part.startsWith('`') && part.endsWith('`')) {
			return (
				<span key={index} className='font-mono text-[13px]'>
					{part.slice(1, -1)}
				</span>
			)
		}
		return <Fragment key={index}>{part}</Fragment>
	})
}
