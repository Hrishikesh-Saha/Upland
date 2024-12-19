/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "var(--main-color)",
        textColor: "var(--text-color)",
      },

      fontFamily : {
        Roboto : ['"Roboto"', 'serif'],
        CodyStar : ['"Codystar"', 'sans-serif'],
        DarkerGrotesque : ['"Darker Grotesque"', 'sans-serif'],
        // font-family: "Roboto", serif;
        // font-family: "Codystar", sans-serif;
        // font-family: "Darker Grotesque", sans-serif;
      },

      screens: {
        'extraLargeDesktop' : '1920px',
      },

    },
  },
  plugins: [],
};
