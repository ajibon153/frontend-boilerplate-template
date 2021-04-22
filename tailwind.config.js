module.exports = {
  mode: 'jit',
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        tablet: '576px',
        desktop: '1200px',
      },
      colors: {
        body: {
          800: '#36264e',
          DEFAULT: '#796e89',
          100: '#afa8b8',
          80: '#c9c5d0',
        },
        primary: '#6d01d3',
      },
      zIndex: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalBackdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
