import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./node_modules/flowbite-react/lib/**/*.js", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.html"],
  plugins: [require("flowbite/plugin")],
  theme: {},
};
export default config;
