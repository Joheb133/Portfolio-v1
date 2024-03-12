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
            },
            animation: {
                'fade-in-up': 'fadeInUp 300ms ease-out forwards'
            },
            keyframes: {
                fadeInUp: {
                    from: { opacity: 0, transform: 'translateY(25%)' },
                    to: { opacity: 1, transform: 'translateY(0)' }
                }
            }
        },
    },
    plugins: []
}

