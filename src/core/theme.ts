export default {
  isDark: true,
  rootSize: 16,
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  },
  grid: {
    columns: 12,
    container: {
      xs: '100%',
      sm: 540,
      md: 720,
      lg: 960,
      xl: 1140,
    },
  },
  spacing: {
    reset: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    base: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  fontFamily: {
    base: "'Montserrat', sans-serif",
    headings: "'Varela Round', sans-serif",
  },
  fontSize: {
    base: 16,
  },
  lineHeight: {
    reset: 1,
  },
  layoutColor: {
    topMenu: '#081B2C',
    sideMenu: '#112F4A',
  },
  color: {
    black: {
      base: '#fff',
    },
    white: {
      base: '#fff',
    },
    primary: {
      base: '#E96B6B',
    },
  },
  transition: {
    base: '0.2s ease-in-out',
  },
}
