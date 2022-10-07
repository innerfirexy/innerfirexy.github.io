/** @type {import('tailwindcss').Config} */
# tailwind.config.js
module.exports = {
  content: ["./templates/**/*.html", "./themes/**/*.html",  "./themes/**/*.html"],
  theme: {},
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};
