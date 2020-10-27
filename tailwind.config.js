module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5064CC',
      },
      fontSize: {
        xxs: '0.65rem',
        xxl: '1.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
