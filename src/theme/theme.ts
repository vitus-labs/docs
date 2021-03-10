export default {
  isDark: true,
  rootSize: 16,
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
    xxxl: 1600,
  },
  grid: {
    columns: 12,
    container: {
      xs: '100%',
      sm: 540,
      md: 720,
      lg: 960,
      xxl: 1360,
      xxxl: 1560,
    },
  },
  layout: {
    root: {
      height: '100vh',
      bg: '#071A2C',
    },
    topMenu: {
      height: 70,
      bg: '#081B2C',
      borderColor: '#4F6579',
      zIndex: 100,
    },
    sideMenu: {
      height: 'calc(100vh - 70px)',
      width: 320,
      bg: '#112F4A',
      zindex: 90,
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
    sm: 12,
    md: 14,
    base: 16,
    lg: 18,
    xl: 20,
  },
  fontWeight: {
    thin: 200,
    light: 300,
    base: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    lighter: 'lighter',
    bolder: 'bolder',
  },
  lineHeight: {
    reset: 1,
    sm: 1.2,
    md: 1.4,
    base: 1.5,
    xl: 2,
  },
  borderRadius: { sm: 4, md: 7, base: 14, circle: '50%', extra: 160 },
  layoutColor: {
    bg: '#071A2C',
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
