/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			// Headings
			darker: "Darker Grotesque",
			// Body 
			krub: "Oxygen",
			incon: "Tajawal",
		},},
	},
	plugins: [],
}
