import { text } from '~/components/core'

export default text
  .config({ name: 'base/TextList/Item' })
  .attrs({
    tag: 'li',
  })
  .theme((t) => ({
    marginLeft: t.spacing.large,
  }))
