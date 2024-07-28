import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				violet: {
					primary: '#5b1ebb',
					'primary-content': '#f0e6ff',
					secondary: '#824ced',
					'secondary-content': '#cdbfde',
					accent: '#a78cfa',
					'accent-content': '#f0e6ff',
					neutral: '#3d1a8f',
					'neutral-content': '#e8dcff',
					'base-100': '#180735',
					'base-200': '#4e1ea3',
					'base-300': '#420f96',
					'base-content': '#e8dcff',
				},
				blue: {
					primary: '#1E40AF',
					'primary-content': '#e6f0ff',
					secondary: '#3B82F6',
					'secondary-content': '#e6f0ff',
					accent: '#60A5FA',
					'accent-content': '#f0f7ff',
					neutral: '#0F172A',
					'neutral-content': '#e6eeff',
					'base-100': '#0f1a3f',
					'base-200': '#162b66',
					'base-300': '#1c4ab0',
					'base-content': '#BFDBFE',
				},
				emerald: {
					primary: '#10B981',
					'primary-content': '#ccffcc',
					secondary: '#059669',
					'secondary-content': '#ccffcc',
					accent: '#047857',
					'accent-content': '#ccffcc',
					neutral: '#064E3B',
					'neutral-content': '#e6fff9',
					'base-100': '#043d2f',
					'base-200': '#053a2c',
					'base-300': '#043d2f',
					'base-content': '#A7F3D0',
				},
				rose: {
					primary: '#FF1744',
					'primary-content': '#ffcccc',
					secondary: '#D50000',
					'secondary-content': '#ffcccc',
					accent: '#b0003b',
					'accent-content': '#ffcccc',
					neutral: '#880E4F',
					'neutral-content': '#ffcccc',
					'base-100': '#3a0013',
					'base-200': '#75002c',
					'base-300': '#a80044',
					'base-content': '#FCE4EC',
				},
				amber: {
					primary: '#F59E0B',
					'primary-content': '#fff7e6',
					secondary: '#D97706',
					'secondary-content': '#fff5e6',
					accent: '#B45309',
					'accent-content': '#fff3e6',
					neutral: '#92400E',
					'neutral-content': '#fff0e6',
					'base-100': '#422008',
					'base-200': '#6a330b',
					'base-300': '#803700',
					'base-content': '#FDE68A',
				},
			},
		],
	},
};
export default config;
