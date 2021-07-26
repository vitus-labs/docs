import { element } from '~/components/core'

export default element
  .config({ name: 'base/Badge' })
  .attrs({
    tag: 'span',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    margin: t.spacing.xxSmall,
    paddingX: t.spacing.xSmall,
    paddingY: t.spacing.xxSmall,
    borderRadius: t.borderRadius.small,
    backgroundColor: t.color.light[200],
    fontSize: t.fontSize.smaller,
    fontWeight: t.fontWeight.semibold,
    lineHeight: t.lineHeight.small,
  }))
