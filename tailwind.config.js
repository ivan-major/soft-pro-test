module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    safelist: [
        { pattern: /size-\d+/ }
    ],
    theme: {
        extend: {},
        screens: {
            'sm': '768px',
            'md': '1280px',
            'lg': '1536px',
        },
    },
    plugins: [],
};