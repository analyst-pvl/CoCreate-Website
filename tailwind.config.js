/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-red-200",
    "bg-yellow-100",
    "bg-blue-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-blue-100",
  ],

  theme: {
    extend: {
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 0.7s ease-out",
      },
    },
  },
  plugins: [],
};
