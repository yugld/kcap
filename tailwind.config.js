/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#fcb61a",
                mask: "rgba(0, 0, 0, 0.2)",
                hover: "#124F2E",
                background: "#171717",
            },
            visibility: ["hover", "focus"],
        },
    },
    plugins: [],
};
