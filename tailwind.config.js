/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4EFE6',
        ink: '#0A0A0A',
        concrete: '#121212',
        concreteLight: '#1E1E1E',
        // Mode colors
        modeFocus: '#2F5BFF',
        modeGrind: '#FF6B2C',
        modeCreate: '#FF3D8B',
        modeChill: '#B6FF3B',
        modeSocial: '#FFD93D',
        modeRecover: '#8B5CF6',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Anton', 'sans-serif'],
        tag: ['"Permanent Marker"', 'cursive'],
        body: ['"Space Grotesk"', 'sans-serif'],
        dyslexic: ['"OpenDyslexic"', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px #0A0A0A',
        'brutal-sm': '3px 3px 0px #0A0A0A',
        'brutal-lg': '10px 10px 0px #0A0A0A',
        'brutal-active': '2px 2px 0px #0A0A0A',
        'brutal-white': '6px 6px 0px #FFFFFF',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
