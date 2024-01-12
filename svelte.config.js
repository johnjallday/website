//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { preprocessMeltUI, sequence } from '@melt-ui/pp'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
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
