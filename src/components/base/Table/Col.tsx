import { element } from '~/components/core'

export default element
  .config({ name: 'base/Table/Col', component: 'td' })
  .theme((t) => ({
    color: t.color.light.base,
    fontSize: t.fontSize.medium,
    paddingY: t.spacing.medium,
    paddingX: t.spacing.medium,
  }))
  .styles(
    (css) => css`
      &:first-of-type {
        font-weight: bold;
      }

      &:nth-child(2) {
        max-width: 200px;
      }

      &:nth-child(3) {
        font-weight: bold;
      }
    `
  )
