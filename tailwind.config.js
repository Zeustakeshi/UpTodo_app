/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6651f0",
                primary2: "#8875FF",
                ["primary-pink"]: "#C44C68",
                ["primary-pink2"]: "#BF88EC",
                "text-color": "#2A2B4B",
            },
            fontFamily: {},
        },
    },
    plugins: [],
};
