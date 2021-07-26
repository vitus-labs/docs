import { text } from '~/components/core'

export default text
  .config({ name: 'base/Text' })
  .attrs(({ paragraph }) => ({
    tag: paragraph ? 'p' : 'span',
  }))
  .states((t) => ({
    primary: {
      color: t.color.primary.base,
    },
    light: { color: t.color.light.base },
    dark: { color: t.color.dark.base },
  }))
  .sizes((t) => ({
    small: {
      fontSize: t.fontSize.small,
    },
    medium: {
      fontSize: t.fontSize.medium,
    },
    xLarge: {
      fontSize: t.fontSize.xxLarge,
    },
  }))
  .variants((t) => ({
    paragraph: {
      lineHeight: t.lineHeight.xLarge,
      marginBottom: t.spacing.large,
    },
    highlight: {
      fontWeight: t.fontWeight.semibold,
      fontStyle: 'italic',
    },
    code: {
      fontFamily: t.fontFamily.mono,
      paddingX: t.spacing.xSmall,
      paddingY: t.spacing.xxSmall,
      borderRadius: t.borderRadius.small,
      backgroundColor: 'rgba(97, 137, 47, 0.32)',
      fontSize: t.fontSize.smaller,
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
