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
      background: '#222829',
    },
    topMenu: {
      height: 70,
      background: '#0F1111',
      borderColor: '#0F1111',
      zIndex: 100,
    },
    sideMenu: {
      height: 'calc(100vh - 70px)',
      width: 320,
      background: '#1B1F20',
      zIndex: 90,
    },
    content: {
      background: '#222829',
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
    mono: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSize: {
    smaller: '80%',
    xSmall: 8,
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
    xxLarge: 2.5,
  },

  // ------------------------------------------------------
  // COLORS OPTIONS
  // ------------------------------------------------------
  color: {
    light: {
      base: '#fff',
      100: 'rgba(255,255,255, 0.1)',
      200: 'rgba(255,255,255, 0.2)',
    },
    dark: {
      base: '#000',
      100: '#1D2122',
      200: '#000',
    },
    // deprecated
    black: {
      base: '#fff',
    },
    white: {
      base: '#fff',
    },
    primary: {
      base: '#86C232',
      100: 'rgba(97, 137, 47, 0.1)',
      200: 'rgba(97, 137, 47, 0.2)',
      300: 'rgba(97, 137, 47, 0.3)',
      400: 'rgba(97, 137, 47, 0.4)',
      500: 'rgba(97, 137, 47, 0.5)',
    },
  },

  borderRadius: { xs: 2, sm: 4, md: 8, base: 14, circle: '50%', extra: 160 },
  transition: {
    base: '0.2s ease-in-out',
  },
} as const

export type Theme = typeof theme

export default theme
