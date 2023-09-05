/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            'hero-bg-img': "url('/src/assets/hero-bg.jpg')",
            'nav-hover': 'linear-gradient(90deg, #2AF598 0%, #009EFD 100%)',
            'footer-bg': 'linear-gradient(133deg, #566270 0%, #283444 100%)'
        }
    },
  },
  plugins: [],
}

