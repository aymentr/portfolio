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
        // rgb(var(--x) / <alpha-value>) is required for Tailwind's opacity
        // modifiers (bg-paper/50, text-mist/60, ...) to work with CSS custom
        // properties — see the comment above the variables in index.css.
        void: 'rgb(var(--color-void) / <alpha-value>)',
        graphite: 'rgb(var(--color-graphite) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        metal: 'rgb(var(--color-metal) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        mist: 'rgb(var(--color-mist) / <alpha-value>)',
        cool: 'rgb(var(--color-cool) / <alpha-value>)',
        violet: 'rgb(var(--color-violet) / <alpha-value>)',
        point: 'rgb(var(--color-point) / <alpha-value>)',
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
