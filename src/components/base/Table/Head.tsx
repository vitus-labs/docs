import { element } from '~/components/core'

export default element
  .config({ name: 'base/Table/Head', component: 'thead' })
  .theme((t) => ({
    color: t.color.light.base,
    fontSize: t.fontSize.medium,
    paddingY: t.spacing.small,
    paddingX: t.spacing.small,
  }))
