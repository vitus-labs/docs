import text from '../Text'

export default text
  .attrs((t) => ({
    tag: 'h1',
  }))
  .theme((t) => ({
    fontFamily: t.fontFamily.headings,
    lineHeight: t.lineHeight.md,
  }))
  .sizes((t) => ({
    level1: {
      fontSize: 48,
    },
    level2: {
      fontSize: 42,
    },
    level3: {
      fontSize: 36,
    },
    level4: {
      fontSize: 32,
    },
    level5: {
      fontSize: 24,
      fontFamily: t.fontFamily.base,
    },
  }))
