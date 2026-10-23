import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import boundaries from 'eslint-plugin-boundaries'
import { defineConfig, globalIgnores } from 'eslint/config'

const LAYERS = ['app', 'pages', 'widgets', 'features', 'entities', 'shared']
const SLICED_LAYERS = ['pages', 'widgets', 'features', 'entities']

const layersBelow = layer => LAYERS.slice(LAYERS.indexOf(layer) + 1)

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		files: ['app/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
		plugins: { boundaries },
		settings: {
			'boundaries/include': ['app/**/*', 'src/**/*'],
			'boundaries/elements': [
				{ type: 'app', pattern: 'app' },
				...SLICED_LAYERS.map(layer => ({
					type: layer,
					pattern: `src/${layer}/*`,
					capture: ['slice'],
				})),
				{ type: 'shared', pattern: 'src/shared/*', capture: ['segment'] },
			],
		},
		rules: {
			'boundaries/dependencies': [
				2,
				{
					default: 'disallow',
					policies: [
						...LAYERS.map(layer => ({
							from: { element: { type: layer } },
							allow: {
								to: { element: { types: { anyOf: layersBelow(layer) } } },
							},
						})),
						...['app', 'shared'].map(layer => ({
							from: { element: { type: layer } },
							allow: { to: { element: { type: layer } } },
						})),
						{
							disallow: {
								to: { element: { fileInternalPath: '!**/index.{ts,tsx}' } },
							},
							message:
								'Import from the public API (index.ts) of the slice, not from its internal files.',
						},
						{
							allow: { dependency: { relationship: { to: 'internal' } } },
						},
					],
				},
			],
		},
	},
	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
