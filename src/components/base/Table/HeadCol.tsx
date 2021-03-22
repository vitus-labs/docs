import { element } from '~/components/core'

export default element
  .config({ name: 'base/Table/HeadCol', component: 'th' })
  .theme((t) => ({
    color: t.color.light.base,
    fontSize: t.fontSize.base,
    paddingY: t.spacing.large,
    paddingX: t.spacing.medium,
    backgroundColor: t.color.primary[400],
    textAlign: 'left',
    fontWeight: t.fontWeight.semibold,
    whiteSpace: 'nowrap',
  }))
  .styles(
    (css) => css`
      &:first-child {
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    `
  )
