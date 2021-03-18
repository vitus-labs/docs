const theme = {
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
  // ------------------------------------------------------
  // GRID OPTIONS
  // ------------------------------------------------------
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
  // ------------------------------------------------------
  // LAYOUT OPTIONS
  // ------------------------------------------------------
  layout: {
    root: {
      height: '100vh',
      background: '#020F1B',
    },
    topMenu: {
      height: 70,
      background: '#081B2C',
      borderColor: '#4F6579',
      zIndex: 100,
    },
    sideMenu: {
      height: 'calc(100vh - 70px)',
      width: 320,
      background: '#112F4A',
      zIndex: 90,
    },
    content: {
      background: '#071A2C',
    },
  },
  // ------------------------------------------------------
  // SPACING OPTIONS
  // ------------------------------------------------------
  spacing: {
    reset: 0,
    xxSmall: 2,
    xSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    xLarge: 20,
    xxLarge: 24,
    xxxLarge: 32,
  },
  ratio: {
    base: 1,
    large: 1 + 1 / 3,
  },
  // ------------------------------------------------------
  // TYPOGRAPHY OPTIONS
  // ------------------------------------------------------
  fontFamily: {
    base: "'Montserrat', sans-serif",
    headings: "'Varela Round', sans-serif",
  },
  fontSize: {
    smaller: '80%',
    small: 12,
    medium: 14,
    base: 16,
    large: 18,
    xLarge: 20,
    xxLarge: 24,
    xxxLarge: 28,
    extraLarge: 32,
    extraXLarge: 40,
    extraXxLarge: 48,
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
    small: 1.2,
    medium: 1.4,
    base: 1.5,
    xLarge: 2,
  },

  // ------------------------------------------------------
  // COLORS OPTIONS
  // ------------------------------------------------------
  color: {
    light: {
      base: '#fff',
    },
    dark: {
      base: '#000',
    },
    // deprecated
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

  borderRadius: { xs: 2, sm: 4, md: 7, base: 14, circle: '50%', extra: 160 },
  transition: {
    base: '0.2s ease-in-out',
  },
} as const

export type Theme = typeof theme

export default theme
