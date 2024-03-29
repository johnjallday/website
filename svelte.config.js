import vercel from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import { preprocessMeltUI, sequence } from '@melt-ui/pp'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
	},

	extensions: ['.svelte', '.md'],

	preprocess: sequence([
		mdsvex({
			extensions: ['.md']
		}),
		preprocessMeltUI()
	])
};

export default config;
