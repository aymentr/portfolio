/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
    extend: {
      colors: {
        void: 'var(--color-void)',
        graphite: 'var(--color-graphite)',
        charcoal: 'var(--color-charcoal)',
        metal: 'var(--color-metal)',
        paper: 'var(--color-paper)',
        mist: 'var(--color-mist)',
        cool: 'var(--color-cool)',
        violet: 'var(--color-violet)',
        point: 'var(--color-point)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      transitionTimingFunction: {
        cinematic: 'var(--ease-cinematic)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.32em',
      },
    },
  },
  plugins: [],
};
