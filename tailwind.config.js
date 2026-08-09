/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink: '#17352b', mint: '#e8f7f0', emerald: '#087f4b', lime: '#b8efcf' }, boxShadow: { soft: '0 14px 45px rgba(18, 68, 49, .10)' } } },
  plugins: []
};