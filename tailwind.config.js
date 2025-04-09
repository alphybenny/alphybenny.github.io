/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          terminal: {
            dark: '#0f0f0f',
            light: '#1a1a1a',
            green: '#00ff00',
            blue: '#0077ff',
            purple: '#9c27b0',
            cyan: '#00e5ff',
            yellow: '#ffeb3b',
            red: '#f44336',
          },
        },
        fontFamily: {
          mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        },
      },
    },
    plugins: [],
    darkMode: 'class',
  }
  