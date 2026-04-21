/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        bg:        'var(--bg)',
        surface:   'var(--surface)',
        'surface-2':'var(--surface-2)',
        border:    'var(--border)',
        'border-2':'var(--border-2)',
        accent:    'var(--accent)',
        primary:   'var(--primary)',
        muted:     'var(--muted)',
        'muted-2': 'var(--muted-2)',
        available: 'var(--available)',
        oos:       'var(--oos)',
      },
    },
  },
  plugins: [],
};
