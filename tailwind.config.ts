import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      cappuccino: '#faf5f0',
      coffee: '#422e19',
      offwhite: '#fefcfc'
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'placeholder': "url('/img/placeholder.png')",
      }
    },
  },
  plugins: [],
}
export default config
