import { text } from '~/components/core'

export default text
  .config({ name: 'Heading' })
  .attrs({
    tag: 'h1',
  })
  .theme((t) => ({
    fontFamily: t.fontFamily.headings,
    lineHeight: t.lineHeight.md,
  }))
  .sizes((t) => ({
    level1: {
      fontSize: 48,
    },
    level2: {
      fontSize: 40,
    },
    level3: {
      fontSize: 32,
    },
    level4: {
      fontSize: 28,
    },
    level5: {
      fontSize: 24,
      fontWeight: t.fontWeight.semibold,
      fontFamily: t.fontFamily.base,
    },
  }))
