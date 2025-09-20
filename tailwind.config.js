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
    },
    plugins: [],
};