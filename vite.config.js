import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import svgr from 'vite-plugin-svgr';
import svgrConfig from './svgr.config.mjs';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		svgr({ svgrOptions: svgrConfig }),
	]
});
