import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        primary: '#1f7a63',
        accent: '#eab308',
        text: '#e5e7eb',
      },
      boxShadow: {
        premium: '0 12px 30px rgba(0,0,0,0.25)',
      },
      keyframes: {
        pulseScore: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' }
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        pulseScore: 'pulseScore 1.2s ease-in-out infinite',
        fadeIn: 'fadeIn 500ms ease-out'
      }
    },
  },
  plugins: [],
};

export default config;
