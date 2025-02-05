import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
				green: '#00a497',
				blue: '#00a3af',
				heading: '#302833',
				body: '#595857',
				light: '#f3f3f3',
				pinkLight: '#fdeff2',
				yellowLight: '#f4dda5',
				purpleLight: '#dbd0e6',
				redLight: '#e597b2',
			},
    },
  },
  plugins: [],
} satisfies Config;
