/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e8f0f8',
                    100: '#d1e1f1',
                    200: '#a3c3e3',
                    300: '#75a5d5',
                    400: '#4787c7',
                    500: '#1e5a8a',
                    600: '#1e4a6e',
                    700: '#1e3a5f',
                    800: '#162b47',
                    900: '#0e1c2f',
                },
                accent: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                arabic: ['Noto Sans Arabic', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
