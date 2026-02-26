import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-space-grotesk)"],
                serif: ["var(--font-playfair)"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#0ea5e9", // Sky-500 (sea blue)
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
