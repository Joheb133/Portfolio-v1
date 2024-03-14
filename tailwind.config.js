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
                'sm-fade-in-up': 'smFadeInUp 400ms 300ms ease-out forwards',
                'fade-in-up': 'fadeInUp 500ms 300ms ease-out forwards',
                'fade-in-down': 'fadeInDown 300ms ease-out forwards',
                'full-fade-in-down': 'fullFadeInDown 400ms ease-out forwards'
            },
            keyframes: {
                smFadeInUp: {
                    from: { opacity: 0, transform: 'translateY(10%)' },
                    to: { opacity: 1, transform: 'translateY(0)' }
                },
                fadeInUp: {
                    from: { opacity: 0, transform: 'translateY(25%)' },
                    to: { opacity: 1, transform: 'translateY(0)' }
                },
                fadeInDown: {
                    from: { opacity: 0, transform: 'translateY(-25%)' },
                    to: { opacity: 1, transform: 'translateY(0)' }
                },
                fullFadeInDown: {
                    from: { opacity: 0, transform: 'translateY(-100%)' },
                    to: { opacity: 1, transform: 'translateY(0)' }
                }
            }
        },
    },
    plugins: []
}

