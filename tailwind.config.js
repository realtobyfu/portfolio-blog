/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary: deep blue
        primary: {
          DEFAULT: '#1e3a8a',  // blue-800
          light:   '#3b82f6',  // blue-500
          dark:    '#1e40af',  // blue-900
        },
        // Secondary: bright teal
        secondary: {
          DEFAULT: '#06b6d4',  // cyan-500
          light:   '#22d3ee',  // cyan-400
          dark:    '#0e7490',  // cyan-700
        },
        // Neutral backgrounds
        neutral: {
          light:   '#f0f9ff',  // sky-50
          DEFAULT: '#e0f2fe',  // sky-100
          dark:    '#bae6fd',  // sky-200
        },
        // Accent (optional)
        accent:   '#a78bfa',  // indigo-300
      },
      fontFamily: {
        playwrite: ['"Playwrite AU SA"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 