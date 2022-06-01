module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          1000: "#18181b",
        },
      },
      fontFamily: {
        // font-family: 'IBM Plex Serif', serif;
        "IBM-Plex-Serif": ["IBM Plex Serif", "serif"],
      },
    },
    screens: {
      phone: { max: "500px" },
      // => @media (max-width: 500px) {...}
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
