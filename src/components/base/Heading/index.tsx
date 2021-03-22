import { text } from '~/components/core'

export default text
  .config({ name: 'base/Heading' })
  .attrs({
    tag: 'h1',
  })
  .theme((t) => ({
    fontFamily: t.fontFamily.headings,
    lineHeight: t.lineHeight.medium,
  }))
  .sizes((t) => ({
    level1: {
      fontSize: t.fontSize.extraXxLarge,
    },
    level2: {
      fontSize: 64,
    },
    level3: {
      fontSize: 40,
    },
    level4: {
      fontSize: 28,
    },
    level5: {
      fontSize: t.fontSize.xxLarge,
      fontWeight: t.fontWeight.semibold,
      fontFamily: t.fontFamily.base,
    },
  }))
