/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-primary': '#00D42F',
                'light': '#969696',
                'dark': '#2C2C2C'
            }
        },
    },
    plugins: [],
}

