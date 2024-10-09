// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Aurora Docs',
			social: {
				github: 'https://github.com/ublue-os/bluefin',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Aurora Intro', slug: 'guides/intro'}, 
						{ label: 'Layer Apps', slug: 'guides/layerapp' },
						{ label: 'Devcontainers', slug: 'guides/devcontainers' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
