/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-primary': '#00D42F'
            },
            screens: {
                'ss': '374px',
                'lg': '1080px'
            }
        },
    },
    plugins: []
}

