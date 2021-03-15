import { element } from '~/components/core'

export default element.config({ component: 'td' }).theme((t) => ({
  color: t.color.light.base,
  fontSize: t.fontSize.medium,
  paddingY: t.spacing.small / 2,
}))
