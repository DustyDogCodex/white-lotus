/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            'hero-bg-img': "url('/images/hero-bg.jpg')",
            'nav-hover': 'linear-gradient(90deg, rgb(109, 40, 217) 0%, rgb(185,28,28) 100%)',
            'footer-bg': 'linear-gradient(133deg, #566270 0%, #283444 100%)'
        }
    },
  },
  plugins: [],
}

