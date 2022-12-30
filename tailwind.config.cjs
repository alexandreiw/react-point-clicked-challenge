/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'hsla(250,65%,75%,1)',
                primaryAlt: 'hsla(250,65%,55%,1)',
                themeLight: 'hsla(231, 15%, 90%,1)',
            },
        },
    },
    plugins: [],
};
