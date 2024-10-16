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
						{ label: 'Installing Software', slug: 'guides/software' },
						{ label: 'Layer Apps', slug: 'guides/layerapp' },
						{ label: 'KDE Plasma Customization', slug: 'guides/kde-themes' },
						{ label: 'Devcontainers', slug: 'guides/devcontainers' },
						{ label: 'Rescue mode', slug: 'guides/rescue-mode' },
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
