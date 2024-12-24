const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|button|card|chip|progress|select|divider|ripple|spinner|form|listbox|popover|scroll-shadow).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
