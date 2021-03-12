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
      fontSize: t.fontSize.extraXLarge,
    },
    level3: {
      fontSize: t.fontSize.extraLarge,
    },
    level4: {
      fontSize: t.fontSize.xxxLarge,
    },
    level5: {
      fontSize: t.fontSize.xxLarge,
      fontWeight: t.fontWeight.semibold,
      fontFamily: t.fontFamily.base,
    },
  }))
