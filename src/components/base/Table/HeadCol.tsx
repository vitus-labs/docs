import { element } from '~/components/core'

export default element
  .config({ name: 'base/Table/HeadCol', component: 'th' })
  .theme((t) => ({
    color: t.color.light.base,
    fontSize: t.fontSize.medium,
    paddingY: t.spacing.small,
    paddingX: t.spacing.small,
    backgroundColor: '#124576',
    textAlign: 'left',
  }))
