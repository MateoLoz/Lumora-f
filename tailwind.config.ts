import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/[lang]/**/*.{js,ts,jsx,tsx,mdx}"
  ],
theme: {
  extend: {
    backgroundImage: {
      'login-mesh': 'radial-gradient(circle at 20% 80%, hsl(240 40% 85% / .6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(320 45% 88% / .5) 0%, transparent 50%), radial-gradient(circle at 40% 40%, hsl(280 50% 90% / .4) 0%, transparent 50%)',
    },
  },
},
  plugins: [],
};
export default config;