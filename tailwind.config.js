module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontWeight: {
        thin: '100',
        light: '200',
        normal: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
        heavy: '900',
      },
      colors: {
        primary: '#2F625E',
        Secondary: '#759E95',
        Dark: '#231F20',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1320px',
        },
      }
    },
  },
  plugins: [],
}
