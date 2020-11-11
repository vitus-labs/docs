import { text } from '~/components/core'

export default text
  .attrs(({ paragraph }) => ({
    tag: paragraph ? 'p' : 'span',
  }))
  .theme({
    fontSize: 'inherit',
  })
  .variants((t) => ({
    paragraph: {
      marginBottom: t.spacing.lg,
    },
    highlight: {
      fontWeight: 600,
      fontStyle: 'italic',
    },
    caption: {
      fontStyle: 'italic',
      marginBottom: t.spacing.reset,
      fontSize: t.fontSize.sm,
      textAlign: 'center',
    },
  }))
  .multiple((t) => ({
    semibold: {
      fontWeight: t.fontWeight.semibold,
    },
  }))
