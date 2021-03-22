import { text } from '~/components/core'

export default text
  .config({ name: 'base/Text' })
  .attrs(({ paragraph }) => ({
    tag: paragraph ? 'p' : 'span',
  }))
  .theme({
    fontSize: 'inherit',
  })
  .states((t) => ({
    primary: {
      color: t.color.primary.base,
    },
    light: { color: t.color.light.base },
    dark: { color: t.color.dark.base },
  }))
  .variants((t) => ({
    paragraph: {
      marginBottom: t.spacing.large,
    },
    highlight: {
      fontWeight: t.fontWeight.semibold,
      fontStyle: 'italic',
    },
    caption: {
      marginBottom: t.spacing.reset,
      fontSize: t.fontSize.small,
      textAlign: 'center',
      fontStyle: 'italic',
    },
  }))
  .multiple((t) => ({
    semibold: {
      fontWeight: t.fontWeight.semibold,
    },
  }))
