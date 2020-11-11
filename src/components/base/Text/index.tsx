import { text } from '~/components/core'

export default text.variants((t) => ({
  paragraph: {
    marginBottom: t.spacing.lg,
  },
  highlight: {
    fontWeight: 600,
    fontStyle: 'italic',
    marginBottom: t.spacing.reset,
  },
}))
