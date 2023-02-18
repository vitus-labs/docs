// eslint-disable-next-line camelcase
import { Montserrat, Varela_Round, Source_Code_Pro } from '@next/font/google'

const baseFont = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
})

const headingsFont = Varela_Round({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
})

const sourceCode = Source_Code_Pro({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

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
      height: 72,
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
  // SIZES OPTIONS
  // ------------------------------------------------------
  size: {
    fill: '100%',
    hideScrollBar: 'calc(100% + 20px)',
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
    xSmall: 0.5,
    small: 0.75,
    medium: 1 + 1 / 3,
    large: 1.5,
    xLarge: 2,
    xxLarge: 3,
    xxxLarge: 4,
  },
  // ------------------------------------------------------
  // TYPOGRAPHY OPTIONS
  // ------------------------------------------------------
  fontFamily: {
    base: baseFont.style.fontFamily,
    headings: headingsFont.style.fontFamily,
    mono: sourceCode.style.fontFamily,
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
  headingSize: {
    jumbo: 96,
    level1: 64,
    level2: 48,
    level3: 40,
    level4: 32,
    level5: 24,
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
  // BORDERS OPTIONS
  // ------------------------------------------------------
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: {
    xSmall: 2,
    small: 4,
    medium: 8,
    base: 14,
    circle: '50%',
    extra: 160,
  },

  // ------------------------------------------------------
  // ANIMATIONS OPTIONS
  // ------------------------------------------------------
  transition: {
    base: '0.2s ease-in-out',
  },

  // ------------------------------------------------------
  // COLORS OPTIONS
  // ------------------------------------------------------
  color: {
    light: {
      base: '#fff',
      100: 'rgba(255, 255, 255, 0.1)',
      200: 'rgba(255, 255, 255, 0.2)',
      300: 'rgba(255, 255, 255, 0.3)',
      400: 'rgba(255, 255, 255, 0.4)',
      500: 'rgba(255, 255, 255, 0.5)',
      600: 'rgba(255, 255, 255, 0.6)',
      700: 'rgba(255, 255, 255, 0.7)',
      800: 'rgba(255, 255, 255, 0.8)',
      900: 'rgba(255, 255, 255, 0.9)',
    },
    dark: {
      base: '#0F1111',
      100: 'rgba(15, 17, 17, 0.1)',
      200: 'rgba(15, 17, 17, 0.2)',
      300: 'rgba(15, 17, 17, 0.3)',
      400: 'rgba(15, 17, 17, 0.4)',
      500: 'rgba(15, 17, 17, 0.5)',
      600: 'rgba(15, 17, 17, 0.6)',
      700: 'rgba(15, 17, 17, 0.7)',
      800: 'rgba(15, 17, 17, 0.8)',
      900: 'rgba(15, 17, 17, 0.9)',
    },
    primary: {
      base: '#86C232',
      100: 'rgba(97, 137, 47, 0.1)',
      200: 'rgba(97, 137, 47, 0.2)',
      300: 'rgba(97, 137, 47, 0.3)',
      400: 'rgba(97, 137, 47, 0.4)',
      500: 'rgba(97, 137, 47, 0.5)',
      600: 'rgba(97, 137, 47, 0.6)',
      700: 'rgba(97, 137, 47, 0.7)',
      800: 'rgba(97, 137, 47, 0.8)',
      900: 'rgba(97, 137, 47, 0.9)',
    },
  },
} as const

export type Theme = typeof theme

export default theme
